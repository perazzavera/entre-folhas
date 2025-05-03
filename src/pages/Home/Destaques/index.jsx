import { Link } from "react-router-dom";
import produtos from "../../../mocks/plantas.json";
import { LuEye, LuShoppingBag } from "react-icons/lu";
import { BotaoLink } from "../../../components/Botoes";
import { useContext } from "react";
import { CartContext } from "../../../context/CarrinhoContext";
import { toast, ToastContainer } from "react-toastify";

export default function Destaques() {
  const { addToCart } = useContext(CartContext);
  const notify = () => toast("Item adicionado ao carrinho!");

  return (
    <section className="py-10 px-4 lg:px-20">
      <h2 className="font-playfair text-4xl text-center text-verde-escuro mb-4">
        Nossos destaques
      </h2>
      <p className="text-center">
        Descubra nossas peças mais amadas, cuidadosamente selecionadas para sua
        casa.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {produtos.slice(0, 4).map((produto) => {
          const ehNovo = produto.novo === true;
          return (
            <div
              key={produto.id}
              className="produto-card group shadow-md shadow-black/20 rounded-xl"
            >
              <div className="relative overflow-hidden rounded-t-xl">
                <img
                  src={produto.imagens[0]}
                  alt={produto.name}
                  className="w-full h-120 rounded-t-xl object-cover transition-transform duration-500 group-hover:scale-105 lg:h-80"
                />
                {ehNovo && (
                  <p className="absolute top-3 left-3 bg-verde-claro text-verde-escuro p-2 rounded-lg">
                    Novo
                  </p>
                )}

                {/* Overlay with Quick actions */}
                <div className="absolute inset-0 bg-verde-escuro/40 flex items-center justify-center gap-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link
                    to={`/produtos/${produto.categorias[0]}/${produto.subcategoria}/${produto.id}`}
                    className="w-12 h-12 rounded-full bg-verde-claro flex items-center justify-center hover:bg-accent transition-colors"
                  >
                    <LuEye size={20} className="text-primary" />
                  </Link>

                  <button
                    onClick={() => {
                      addToCart(produto);
                      notify();
                    }}
                    className="w-12 h-12 rounded-full bg-verde-claro flex items-center justify-center hover:bg-accent transition-colors"
                  >
                    <LuShoppingBag size={20} className="text-primary" />
                  </button>
                  <ToastContainer position="bottom-right" />
                </div>
              </div>

              <div className="p-4 relative">
                <h3 className="font-playfair font-medium text-2xl text-verde-escuro ">
                  {produto.nome}
                </h3>
                <p className="my-2">{produto.descricao}</p>
                <p className="text-primary font-semibold">
                  R$ {produto.preco.toFixed(2).replace(".", ",")}
                </p>
                <div className="absolute right-5 top-30">
                  <BotaoLink
                    to={`/produtos/${produto.categorias[0]}/${produto.subcategoria}/${produto.id}`}
                    className="lg:hidden"
                  >
                    Ver mais
                  </BotaoLink>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-8 flex justify-center">
        <BotaoLink to="/produtos">Ver todos os nossos produtos</BotaoLink>
      </div>
    </section>
  );
}
