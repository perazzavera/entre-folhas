import { LuMinus, LuPlus, LuTrash2 } from "react-icons/lu";

export default function ListaItens({ cart, updateQuantity, removeFromCart }) {
  return (
    <ul className="my-6 space-y-4">
      {cart.map((item) => (
        <li
          key={item.id}
          className="flex gap-10 w-full px-4 bg-white p-4 rounded-xl"
        >
          <div className="">
            <img
              className="w-30 min-h-30 max-h-30 rounded-xl object-bottom object-cover"
              src={item.imagens[0]}
              alt={item.nome}
            />
          </div>
          <div className="flex flex-col justify-between w-full">
            <h3 className="font-dm text-verde-escuro">{item.nome}</h3>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 border-1 border-gray-500 rounded-3xl w-fit py-2 px-4 ">
                <button
                  className="cursor-pointer text-verde-escuro"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                >
                  <LuMinus />
                </button>
                <span className="text-verde-escuro">{item.quantity}</span>
                {/* Exibe a quantidade */}
                <button
                  className="cursor-pointer text-verde-escuro"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  <LuPlus />
                </button>
              </div>
              <div>
                <LuTrash2
                  onClick={() => removeFromCart(item.id)}
                  className="w-8 h-8 text-verde-escuro cursor-pointer"
                />
              </div>
            </div>
            <p className="font-bold text-verde-escuro text-xl">
              R$ {item.preco.toFixed(2).replace(".", ",")}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
