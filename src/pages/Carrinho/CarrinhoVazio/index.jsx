import { LuShoppingBag } from "react-icons/lu";
import { Link } from "react-router-dom";

export default function CarrinhoVazio() {
  return (
    <div className="justify-center items-center p-6 text-center">
      <div>
        <div className="flex justify-center">
          <LuShoppingBag className="h-12 w-12 text-verde-escuro" />
        </div>
        <p className="font-playfair text-2xl my-2">Seu carrinho está vazio</p>
        <p>Parece que você ainda não adicionou produtos ao seu carrinho.</p>
      </div>
      <div className="flex justify-center mt-4">
        <Link
          to="/produtos"
          className="bg-verde-escuro text-verde-claro py-2 px-4 rounded-lg"
        >
          Ver produtos
        </Link>
      </div>
    </div>
  );
}
