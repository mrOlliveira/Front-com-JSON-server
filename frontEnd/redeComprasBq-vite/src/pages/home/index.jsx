import React, { useEffect, useState } from 'react';
import { lojaService } from '../../services/lojaServices';

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
  });

return(
  <div style={{ padding: '40px', backgroundColor: '#0a0e17', minHeight: '100vh' }}>
            <h1 style={{ color: '#00d2ff', marginBottom: '20px' }}>Armários Disponíveis</h1>
            
            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
                gap: '20px' 
            }}>
                {itens.map((item) => (
                    <CardProduto 
                        key={item.id} 
                        produto={item}  
                    />
                ))}
            </div>
        </div>
    );
  };
