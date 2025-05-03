import { useContext, useEffect } from "react";
import Summary from "./Sumario";
import { CartContext } from "../../context/CarrinhoContext";
import CarrinhoVazio from "./CarrinhoVazio";
import ListaItens from "./ListaItens";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <section className="px-4 py-10 lg:px-20 bg-bege">
        <h2 className="font-playfair text-3xl text-gray-800 lg:mt-4">
          Carrinho de Compras
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 lg:items-center">
          <div className=" bg-bege my-6 rounded-xl lg:bg-transparent">
            {/* Mensagem carrinho vazio */}
            {cart.length === 0 ? (
              <CarrinhoVazio />
            ) : (
              <ListaItens
                cart={cart}
                updateQuantity={updateQuantity}
                removeFromCart={removeFromCart}
              />
            )}
          </div>
          <Summary />
        </div>
      </section>
    </>
  );
}
