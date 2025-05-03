import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";
import plantas from "../../mocks/plantas.json";
import { useContext, useEffect, useState } from "react";
import { BotaoAcao } from "../../components/Botoes";
import { CartContext } from "../../context/CarrinhoContext";
import ImagemProduto from "./ImagemProduto";
import InfoProduto from "./InfoProduto";
import Quantidade from "./Quantidade";
import { toast, ToastContainer } from "react-toastify";

export default function DetalhesProduto() {
  const { addToCart } = useContext(CartContext);
  const { categorias, subcategoria, id } = useParams();
  const [contador, setContador] = useState(1);
  const produtoEncontrado = plantas.find((item) => item.id === id);

  const product = {
    breadcrumbs: [
      { id: 1, name: "HOME", to: "/" },
      { id: 2, name: "PRODUTOS", to: "/produtos" },
      { id: 3, name: categorias.toUpperCase(), to: `/produtos/${categorias}` },
      {
        id: 4,
        name: subcategoria.toUpperCase(),
        to: `/produtos/${categorias}/${subcategoria}`,
      },
    ],
    tag: produtoEncontrado?.nome.toUpperCase() || "",
  };

  const notify = () => toast("Item adicionado ao carrinho!");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Breadcrumb product={product} />
      <section className="py-10 px-4 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Imagens do Produto */}
          <ImagemProduto produtoEncontrado={produtoEncontrado} />

          {/* Detalhes do Produto */}
          <div className="flex flex-col relative">
            <InfoProduto produtoEncontrado={produtoEncontrado} />
            <div className="flex items-center justify-between lg:flex-col lg:items-start">
              <Quantidade contador={contador} setContador={setContador} />

              <div className="mt-auto lg:mt-4">
                <BotaoAcao
                  onClick={() => {
                    addToCart(produtoEncontrado, contador);
                    notify();
                  }}
                  className="w-full bg-primary hover:bg-primary-dark text-white py-3 px-4 rounded-lg font-medium transition-colors"
                >
                  Adicionar ao carrinho
                </BotaoAcao>
                <ToastContainer
                  position="bottom-right"
                  style={{ marginTop: "4rem" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
