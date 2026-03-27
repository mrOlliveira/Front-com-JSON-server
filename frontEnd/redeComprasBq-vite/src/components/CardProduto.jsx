export default function CardProduto({ produto }) {
  const nomeExibicao = produto.nome || `Armário ${produto.posicao}`;

  return (
    <div>
      <div className="informacoes">
        <h3>{nomeExibicao}</h3>
        <p className="precoarmario">R$ {produto.preco?.toFixed(2)}</p>
        
        <button onClick={() => {console.log(`Vendo detalhes do produto ID: ${produto.id}`)}}>
          VER DETALHES
        </button>

      </div>
    </div>
  );
}