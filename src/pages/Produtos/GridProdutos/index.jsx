import { Link } from "react-router-dom";

export default function GridProdutos({ produtosVisiveis }) {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      {produtosVisiveis.map((produto) => {
        const ehNovo = produto.novo === true;
        return (
          <div
            key={produto.id}
            className="produto-card group shadow-md shadow-black/20 rounded-xl"
          >
            <div className="relative overflow-hidden rounded-t-xl">
              <img
                src={produto.imagens[0]}
                alt={produto.nome}
                className="w-full h-120 rounded-t-xl object-cover transition-transform duration-500 group-hover:scale-105 lg:h-80"
              />
              {ehNovo && (
                <p className="absolute top-3 left-3 bg-verde-claro text-verde-escuro p-2 rounded-lg">
                  Novo
                </p>
              )}
            </div>

            <div className="p-4 h-50 flex flex-col justify-between bg-verde-claro/10 relative">
              <h3 className="font-playfair font-medium text-2xl text-verde-escuro lg:text-xl">
                {produto.nome}
              </h3>
              <p className="my-2 lg:text-sm">{produto.descricao}</p>
              <div className="flex items-center justify-between">
                <p className="text-primary font-semibold mt-auto">
                  R$ {produto.preco.toFixed(2).replace(".", ",")}
                </p>
                <Link
                  className="font-playfair text-verde-claro bg-verde-escuro py-1 px-2 rounded-xl hover:bg-verde-oliva transition-all duration-300"
                  to={`/produtos/${produto.categorias[0]}/${produto.subcategoria}/${produto.id}`}
                >
                  Ver mais
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
