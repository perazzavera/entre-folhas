import { useState } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

export default function ImagemProduto({ produtoEncontrado }) {
  const [imagemAtual, setImagemAtual] = useState(0);

  const avancarImagem = () => {
    setImagemAtual((prev) =>
      prev === produtoEncontrado.imagens.length - 1 ? 0 : prev + 1
    );
  };

  const voltarImagem = () => {
    setImagemAtual((prev) =>
      prev === 0 ? produtoEncontrado.imagens.length - 1 : prev - 1
    );
  };

  const trocarImagem = (index) => setImagemAtual(index);

  return (
    <div>
      <div className="relative overflow-hidden rounded-lg mb-4 shadow-md shadow-black/20">
        <img
          src={produtoEncontrado.imagens[imagemAtual]}
          alt={produtoEncontrado.nome}
          className="w-full h-[500px] object-cover"
        />

        {produtoEncontrado.novo && (
          <span className="absolute top-3 left-3 text-white text-xs font-medium px-2 py-1 rounded">
            <p className="bg-verde-claro text-verde-escuro p-2 rounded-xl">
              Novo
            </p>
          </span>
        )}

        {produtoEncontrado.imagens.length > 1 && (
          <>
            <button
              onClick={voltarImagem}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-sm transition-colors"
              aria-label="Imagem anterior"
            >
              <LuChevronLeft className="text-primary" />
            </button>

            <button
              onClick={avancarImagem}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-sm transition-colors"
              aria-label="Próxima imagem"
            >
              <LuChevronRight className="text-primary" />
            </button>
          </>
        )}
      </div>

      {produtoEncontrado.imagens.length > 1 && (
        <div className="flex gap-3 overflow-x-auto py-2 ps-1">
          {produtoEncontrado.imagens.map((img, index) => (
            <button
              key={index}
              onClick={() => trocarImagem(index)}
              className={`rounded-xl w-20 h-20 overflow-hidden border-2 ${
                index === imagemAtual
                  ? "border-3 border-verde-escuro"
                  : "border-transparent"
              }`}
            >
              <img src={img} className="rounded-xl w-full h-30 object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
