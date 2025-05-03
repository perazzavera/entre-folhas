import { useContext } from "react";
import { CartContext } from "../../../context/CarrinhoContext";
import { LuMapPin } from "react-icons/lu";

export default function Resumo() {
  const { cart, metodosEnvio, formData, getCartTotal } =
    useContext(CartContext);
  const subtotal = getCartTotal();
  const frete = Number(
    metodosEnvio.find((item) => item.label === formData.envio)?.valor || 0
  );
  const total = subtotal + frete;

  return (
    <div className="grid grid-cols-1 shadow-black/20 shadow-md p-4 rounded-xl mt-10 lg:h-fit lg:sticky lg:top-0 lg:mt-0 bg-white">
      <h3 className="font-playfair text-verde-escuro text-xl mb-4">
        Resumo da compra
      </h3>
      <div className="space-y-2">
        <div className="grid grid-cols-1 gap-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex gap-10 w-full px-4 lg:bg-bege lg:p-4 lg:rounded-xl"
            >
              <div className="">
                <img
                  className="w-30 min-h-30 max-h-30 rounded-xl object-bottom object-cover"
                  src={item.imagens[0]}
                  alt={item.nome}
                />
              </div>
              <div className="flex flex-col justify-between w-full">
                <h3 className="font-playfair text-xl text-verde-escuro">
                  {item.nome}
                </h3>
                <p className="text-gray-500">Quantidade: {item.quantity}</p>
                <p className="font-bold text-rose text-xl">
                  R$ {item.preco.toFixed(2).replace(".", ",")}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-4 my-8 border-t-1 border-gray-400 pt-4">
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

        <div className="flex justify-between text-lg border-t-1 border-gray-400 pt-4">
          <p className="font-semibold text-verde-escuro">Total</p>
          <p className="text-verde-escuro font-semibold">
            R${total.toFixed(2).replace(".", ",")}
          </p>
        </div>
        <div className="mt-6 text-gray-500 text-sm">
          {formData.cidade && formData.estado && (
            <p className="flex items-center gap-2">
              <LuMapPin className="w-5 h-5" /> Entrega para: {formData.cidade} -{" "}
              {formData.estado}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
