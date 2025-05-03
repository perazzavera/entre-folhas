import Resumo from "../Resumo";
import FormularioCartao from "./FormularioCartao";

export default function Passo2({
  cartao,
  currentStep,
  setCurrentStep,
  cvc,
  validade,
  handleCartaoChange,
  handleValidadeChange,
  handleCvcChange,
  clearCart,
}) {
  return (
    <section>
      <div className="py-10 grid grid-cols-1 lg:grid-cols-2 lg:gap-20">
        <div className="shadow-black/20 shadow-md p-4 rounded-xl bg-white lg:h-fit lg:sticky lg:top-0">
          <h2 className="font-playfair text-xl text-verde-escuro">
            Informações de Pagamento
          </h2>
          <FormularioCartao
            cartao={cartao}
            handleCartaoChange={handleCartaoChange}
            handleValidadeChange={handleValidadeChange}
            handleCvcChange={handleCvcChange}
            validade={validade}
            cvc={cvc}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            clearCart={clearCart}
          />
        </div>
        <Resumo />
      </div>
    </section>
  );
}
