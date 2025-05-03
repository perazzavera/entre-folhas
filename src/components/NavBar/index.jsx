import { Disclosure, DisclosurePanel } from "@headlessui/react";
import { useContext } from "react";
import { LuShoppingBag, LuX } from "react-icons/lu";
import { Link, useLocation } from "react-router-dom";
import { CartContext } from "../../context/CarrinhoContext";
import MenuMobile from "./MenuMobile";

const navigation = [
  { name: "Home", to: "/" },
  { name: "Produtos", to: "/produtos" },
  { name: "Sobre Nós", to: "/sobre" },
  { name: "Contato", to: "/contato" },
];

export default function NavBar() {
  const { totalItens } = useContext(CartContext);
  const location = useLocation();
  const paginaAtual = location.pathname;

  return (
    <Disclosure as="nav" className="bg-verde-escuro">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 relative">
        <div className="relative flex h-16 items-center justify-between lg:h-20">
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden lg:flex">
            <div className="me-4 ">
              {/* Ícone carrinho */}
              <Link className="cursor-pointer relative" to="/carrinho">
                <LuShoppingBag className="size-5 text-verde-claro" />
              </Link>
            </div>
            <span className="absolute top-3 right-11 bg-verde-claro text-verde-escuro text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-sm lg:right-2 lg:top-4">
              {totalItens()}
            </span>

            {/* Mobile menu button*/}
            <MenuMobile />
          </div>

          {/* Logo e Nome da marca */}
          <div className="flex items-center justify-start lg:w-full ">
            <div className="flex gap-4 items-center">
              <img
                alt="logo entre folhas"
                src="/images/favicon.png"
                className="h-10 w-auto lg:h-16"
              />
              <Link to="/">
                <h1 className="font-marca text-4xl text-verde-claro lg:text-5xl">
                  Entre Folhas
                </h1>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block lg:mx-auto">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    className={`text-verde-claro w-fit p-2 rounded-lg transition-all duration-300 ${
                      paginaAtual === item.to
                        ? "bg-verde-oliva"
                        : "hover:bg-verde-oliva"
                    } `}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"></div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3 grid grid-cols-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              as="a"
              to={item.to}
              className={`text-verde-claro w-fit p-2 rounded-lg transition-all duration-300 ${
                paginaAtual === item.to
                  ? "bg-verde-oliva"
                  : "hover:bg-verde-oliva"
              } `}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
