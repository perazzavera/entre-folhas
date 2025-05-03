import { Link } from "react-router-dom";

export function BotaoLink({ to, children }) {
  return (
    <Link
      className="bg-verde-escuro text-verde-claro p-3 rounded-lg hover:bg-verde-oliva transition-all duration-300 flex justify-center items-center w-fit cursor-pointer text-center"
      to={to}
    >
      {children}
    </Link>
  );
}

export function BotaoAcao({ type, children, onClick, posicao }) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`bg-verde-escuro text-verde-claro p-3 rounded-lg hover:bg-verde-oliva transition-all duration-300 cursor-pointer text-${posicao}`}
    >
      {children}
    </button>
  );
}
