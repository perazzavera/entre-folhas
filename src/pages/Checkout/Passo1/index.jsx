import { BotaoAcao } from "../../../components/Botoes";
import Resumo from "../Resumo";
import FormularioPedido from "./FormularioPedido";
import MetodoEnvio from "./MetodoEnvio";

export default function Passo1({ currentStep, setCurrentStep }) {
  return (
    <section>
      <div className="py-10 grid grid-cols-1 lg:grid-cols-2 lg:gap-20">
        <form className="shadow-md shadow-black/20 px-4 py-4 rounded-xl bg-white">
          <h2 className="font-playfair text-xl text-verde-escuro mb-6">
            Informações de Envio
          </h2>
          {/* Informações pessoais */}
          <FormularioPedido />

          {/* Método de envio */}
          <div className="pt-10">
            <h2 className="font-playfair text-xl text-verde-escuro mb-2">
              Método de Envio
            </h2>
            <MetodoEnvio />
            <div className="mt-4 flex justify-center">
              <BotaoAcao onClick={() => setCurrentStep(currentStep + 1)}>
                Continuar para pagamento
              </BotaoAcao>
            </div>
          </div>
        </form>
        <Resumo />
      </div>
    </section>
  );
}
