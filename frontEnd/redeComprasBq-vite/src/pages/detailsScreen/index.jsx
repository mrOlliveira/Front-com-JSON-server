import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { lojaService } from '../../services/lojaServices';

export default function DetailsScreen() {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    const carregarProduto = async () => {
      try {
        const dados = await lojaService.buscarPorId(id);
        setProduto(dados);
      } catch (err) {
        setErro('Produto não encontrado.');
      }
    };
    carregarProduto();
  }, [id]);
  
  if (erro || !produto) return <div>{erro || 'Erro ao carregar'}</div>;

  return (
    <div>
      <h1>Detalhes do Produto</h1>
      <div>

        <h2>{produto.nome || `Armário ${produto.posicao}`}</h2>
        <p><strong>Categoria:</strong> {produto.categoria || 'Estudantil'}</p>
        <p><strong>Preço:</strong> R$ {produto.preco?.toFixed(2)}</p>
        <button>
          Comprar Agora
        </button>

      </div>
    </div>
  );
}
