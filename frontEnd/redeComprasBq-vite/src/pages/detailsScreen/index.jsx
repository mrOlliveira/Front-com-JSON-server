import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { lojaService } from '../../services/lojaServices';

export default function DetailsScreen() {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    const carregarProduto = async () => {
      try {
        setLoading(true);
        const dados = await lojaService.buscarPorId(id);
        setProduto(dados);
      } catch (err) {
        setErro('Produto não encontrado.');
      } finally {
        setLoading(false);
      }
    };
    carregarProduto();
  }, [id]);

  if (loading) return <div style={{padding: '40px', color: 'white'}}>Carregando...</div>;
  if (erro || !produto) return <div style={{padding: '40px', color: '#ff4444'}}>{erro || 'Erro ao carregar'}</div>;

  return (
    <div style={{ padding: '40px', backgroundColor: '#0a0e17', minHeight: '100vh', color: 'white' }}>
      <h1 style={{ color: '#00d2ff' }}>Detalhes do Produto</h1>
      <div style={{ maxWidth: '500px', margin: '20px 0' }}>
        <h2>{produto.nome || `Armário ${produto.posicao}`}</h2>
        <p><strong>Categoria:</strong> {produto.categoria || 'Estudantil'}</p>
        <p><strong>Preço:</strong> R$ {produto.preco?.toFixed(2)}</p>
        {/* Add more fields as per backend data */}
        <button style={{ background: '#00d2ff', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px' }}>
          Comprar Agora
        </button>
      </div>
    </div>
  );
}
