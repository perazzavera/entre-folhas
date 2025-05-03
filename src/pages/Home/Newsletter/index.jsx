import { useState } from "react";

export default function Newsletter() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [campoTexto, setCampoTexto] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setCampoTexto("");
  };

  return (
    <section className="py-10 px-4 bg-bege lg:px-80">
      <h2 className="font-playfair text-4xl text-verde-escuro text-center mb-4">
        Receba novidades e dicas de cuidados
      </h2>
      <p className="text-center">
        Inscreva-se para receber nossa newsletter com lançamentos, promoções
        exclusivas e dicas para cuidar das suas plantas.
      </p>
      <form className="grid grid-cols-1 gap-4 my-6 lg:grid-cols-3">
        <input
          value={campoTexto}
          onChange={(e) => setCampoTexto(e.target.value)}
          className=" bg-white p-3 rounded-xl lg:col-span-2"
          type="email"
          placeholder="Seu melhor email"
        />
        <button
          onClick={handleSubmit}
          className="bg-verde-escuro text-verde-claro p-3 rounded-xl hover:bg-verde-oliva cursor-pointer transition-all duration-300"
        >
          Quero receber
        </button>
        {isSubmitted && (
          <div className="flex justify-center lg:col-span-3">
            <p className="text-verde-escuro font-medium text-center animate-pulse">
              Sua inscrição foi realizada com sucesso!
            </p>
          </div>
        )}
      </form>
      <p className="text-gray-500 text-xs text-center">
        Ao se inscrever, você concorda com nossa política de privacidade. Não
        compartilhamos seus dados com terceiros.
      </p>
    </section>
  );
}
