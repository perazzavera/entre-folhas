import { useContext } from "react";
import { CartContext } from "../../../context/CarrinhoContext";
import { BotaoAcao, BotaoLink } from "../../../components/Botoes";
import { useNavigate } from "react-router-dom";

export default function Summary() {
  const navigate = useNavigate();
  const { getCartTotal, metodosEnvio, formData } = useContext(CartContext);
  const subtotal = getCartTotal();
  const frete = Number(
    metodosEnvio.find((item) => item.label === formData.envio)?.valor || 0
  );

  const total = subtotal + frete;

  return (
    <div className="py-4 shadow-md shadow-black/20 p-4 rounded-xl bg-white lg:sticky lg:top-0">
      <h3 className="font-playfair text-verde-escuro text-xl mb-4">
        Resumo da compra
      </h3>
      <div className="space-y-2">
        <div className="flex justify-between">
          <p className="text-gray-500">Subtotal</p>
          <p className="font-semibold text-verde-escuro">
            R${subtotal.toFixed(2).replace(".", ",")}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-500">Frete</p>
          <p className="font-semibold text-verde-escuro">
            R$ {frete.toFixed(2).replace(".", ",")}
          </p>
        </div>
      </div>

      <div className="flex justify-between mt-4 text-lg border-t-1 border-gray-400 pt-4">
        <p className="font-semibold text-verde-escuro">Total</p>
        <p className="text-verde-escuro font-semibold">
          R${total.toFixed(2).replace(".", ",")}
        </p>
      </div>

      <div className="grid grid-cols-2 w-fit mx-auto gap-4 mt-8">
        <BotaoAcao
          onClick={() => {
            navigate(-1);
          }}
        >
          Continuar Comprando
        </BotaoAcao>
        <BotaoLink to="/checkout">Finalizar Compra</BotaoLink>
      </div>
    </div>
  );
}
