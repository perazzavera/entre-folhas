import { useContext } from "react";
import { CartContext } from "../../../../context/CarrinhoContext";

export default function FormularioCartao() {
  const {
    cartao,
    handleCartaoChange,
    validade,
    handleValidadeChange,
    cvc,
    handleCvcChange,
    setCurrentStep,
    currentStep,
    clearCart,
  } = useContext(CartContext);
  return (
    <form className="grid grid-cols-1 gap-4 lg:my-10">
      <div>
        <label htmlFor="cartao" className="grid grid-cols-1 w-full">
          Número do Cartão *
          <input
            type="text"
            maxLength={19} // 16 dígitos + 3 espaços
            value={cartao}
            onChange={handleCartaoChange}
            className="border-1 border-verde-oliva p-3 rounded-lg outline-0"
            placeholder="1234 5678 9012 3456"
          />
        </label>
      </div>
      <div>
        <label htmlFor="nome" className="grid grid-cols-1 w-full">
          Nome do Cartão *
          <input
            type="text"
            className="border-1 border-verde-oliva p-3 rounded-lg outline-0"
          />
        </label>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex-1">
          <label htmlFor="validade" className="grid grid-cols-1 w-full">
            Validade *
          </label>
          <input
            id="validade"
            type="text"
            value={validade}
            onChange={handleValidadeChange}
            maxLength={5}
            placeholder="MM/AA"
            className="border-1 border-verde-oliva p-3 rounded-lg w-full outline-0"
          />
        </div>
        <div className="flex-1">
          <label htmlFor="cvc" className="grid grid-cols-1 w-full">
            CVC
          </label>
          <input
            id="cvc"
            type="text"
            value={cvc}
            onChange={handleCvcChange}
            maxLength={4}
            placeholder="123"
            className="border-1 border-verde-oliva p-3 outline-0 rounded-lg w-full"
          />
        </div>
      </div>
      <div className="flex justify-center h-full items-center mt-4">
        <BotaoAcao
          onClick={() => {
            setCurrentStep(currentStep + 1);
            clearCart();
          }}
        >
          Finalizar Pedido
        </BotaoAcao>
      </div>
    </form>
  );
}
