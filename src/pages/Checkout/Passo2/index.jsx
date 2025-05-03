import Resumo from "../Resumo";
import FormularioCartao from "./FormularioCartao";

export default function Passo2() {
  return (
    <section>
      <div className="py-10 grid grid-cols-1 lg:grid-cols-2 lg:gap-20">
        <div className="shadow-black/20 shadow-md p-4 rounded-xl bg-white lg:h-fit lg:sticky lg:top-0">
          <h2 className="font-playfair text-xl text-verde-escuro">
            Informações de Pagamento
          </h2>
          <FormularioCartao />
        </div>
        <Resumo />
      </div>
    </section>
  );
}
