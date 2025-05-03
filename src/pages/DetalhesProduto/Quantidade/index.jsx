import { LuMinus, LuPlus } from "react-icons/lu";

export default function Quantidade({ contador, setContador }) {
  return (
    <div className="flex items-center gap-2 border-1 border-verde-escuro py-2 px-4 rounded-full bg-verde-claro">
      <button
        className="cursor-pointer"
        onClick={() => setContador(contador - 1)}
        disabled={contador <= 1}
      >
        <LuMinus className="w-5 h-5 text-verde-escuro" />
      </button>
      <span className="text-lg border-l-1 border-r-1 px-3 border-verde-escuro">
        {contador}
      </span>
      <button
        className="cursor-pointer"
        onClick={() => setContador(contador + 1)}
      >
        <LuPlus className="w-5 h-5 text-verde-escuro" />
      </button>
    </div>
  );
}
