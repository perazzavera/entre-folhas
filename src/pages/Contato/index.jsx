import Infos from "./Infos";
import Form from "./Form";
import Mapa from "./Mapa";
import { useEffect, useState } from "react";

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="py-16 px-4 lg:px-20">
      {/* Título e sub */}
      <div>
        <h2 className="font-playfair text-3xl text-center text-verde-escuro mb-2">
          Entre em contato
        </h2>
        <p className="text-center">
          Estamos aqui para responder suas dúvidas, receber sugestões ou
          simplesmente conversar sobre plantas.
        </p>
      </div>

      {/* Infos e formulário */}
      <div className="my-6 rounded-2xl grid grid-cols-1 lg:grid-cols-3 lg:gap-10">
        <Infos />
        <Form cols="2" formData={formData} setFormData={setFormData} />
      </div>
      <Mapa />
    </section>
  );
}
