import './CardProduto.css'; 

export default function CardProduto({ produto, aoComprar }) {
  const nomeExibicao = produto.nome || `Armário ${produto.posicao}`;
  const categoriaExibicao = produto.categoria || "Estudantil";

  return (
    <div className="card-produto">
      <div className="imagem-container">
        <img />
      </div>
      
      <div className="info">
        <span className="categoria">{categoriaExibicao.toUpperCase()}</span>
        <h3>{nomeExibicao}</h3>
        <p className="preco">R$ {produto.preco?.toFixed(2)}</p>
        
        <button 
          className="btn-comprar" 
          onClick={() => aoComprar(produto)}
        >
          VER DETALHES
        </button>
      </div>
    </div>
  );
}