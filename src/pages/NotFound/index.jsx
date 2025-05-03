import { LuArrowLeft, LuHouse } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <section className="h-screen bg-bege px-4">
      <div className="h-full w-full flex items-center justify-center text-center">
        <div>
          <h2 className="font-bold text-8xl text-verde-escuro">404</h2>
          <h3 className="font-playfair text-verde-escuro text-2xl my-4">
            Página não encontrada
          </h3>
          <p>
            Ops! Parece que você se perdeu entre as folhas. A página que você
            está procurando não existe ou foi movida.
          </p>
          <div className="grid grid-cols-1 gap-4 mt-6 lg:grid-cols-2 lg:gap-10">
            <Link
              to="/"
              className="flex items-center gap-2 bg-verde-escuro text-verde-claro p-3 rounded-lg justify-center"
            >
              <LuHouse /> Voltar para o Início
            </Link>
            <button
              className="flex items-center gap-2 bg-verde-claro text-verde-escuro p-3 rounded-lg justify-center cursor-pointer"
              onClick={() => {
                navigate(-1);
              }}
            >
              <LuArrowLeft /> Voltar à página anterior
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
