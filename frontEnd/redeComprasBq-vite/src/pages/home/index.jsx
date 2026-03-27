import React, { useEffect, useState } from 'react';
import { lojaService } from '../../services/lojaServices';
import CardProduto from '../../components/CardProduto';
import { Link } from 'react-router-dom';

export default function Home() {

  const [armarios, setArmarios] = useState([]);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    const carregarDados = async () => {
      try {
        const dados = await lojaService.buscarTodos();
        setArmarios(dados);
      } catch (err) {
        setErro("Não foi possível carregar os armários.");
      }
    };
    carregarDados();
  }, []);

return(
  <div style={{ padding: '40px', backgroundColor: '#0a0e17', minHeight: '100vh' }}>
            <h1 style={{ color: '#00d2ff', marginBottom: '20px' }}>Armários Disponíveis</h1>
            
            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
                gap: '20px' 
            }}>
                {armarios.length === 0 ? (
                  erro ? <p style={{color: '#ff4444'}}>{erro}</p> : <p>Carregando...</p>
                ) : armarios.map((item) => (
                    <Link to={`/details/${item.id}`} style={{ textDecoration: 'none' }}>
                      <CardProduto 
                        key={item.id} 
                        produto={item} 
                      />
                    </Link>
                ))}
            </div>
        </div>
    );
  };
