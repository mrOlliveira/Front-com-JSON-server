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
  <div>
            <h1>Armários Disponíveis</h1>
            
            <div >
                { armarios.map((item) => (
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
