import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

export default function Paginacao({
  paginaAtual,
  setPaginaAtual,
  numerosPaginas,
  totalPaginas,
}) {
  return (
    <div className="flex justify-center mt-16 gap-4 lg:gap-50 items-center">
      <button
        onClick={() => {
          if (paginaAtual > 1) {
            setPaginaAtual(paginaAtual - 1);
          }
        }}
        className="text-verde-claro bg-verde-escuro rounded-full p-1"
      >
        <LuChevronLeft className="w-10 h-10 pe-1" />
      </button>
      <div className="flex justify-center gap-2 items-center">
        {numerosPaginas.map((numero) => (
          <button
            key={numero}
            onClick={() => setPaginaAtual(numero)}
            className={`px-4 py-2 rounded-full ${
              numero === paginaAtual
                ? "bg-verde-escuro text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {numero}
          </button>
        ))}
      </div>
      <button
        onClick={() => {
          if (paginaAtual < totalPaginas) {
            setPaginaAtual(paginaAtual + 1);
          }
        }}
        className="text-verde-claro bg-verde-escuro rounded-full p-1"
      >
        <LuChevronRight className="w-10 h-10 ps-1" />
      </button>
    </div>
  );
}
