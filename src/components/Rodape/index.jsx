import {
  LuFacebook,
  LuInstagram,
  LuMail,
  LuMapPin,
  LuPhone,
  LuTwitter,
} from "react-icons/lu";
import { Link } from "react-router-dom";

const links = [
  {
    id: 1,
    label: "Home",
    to: "/",
  },
  {
    id: 2,
    label: "Produtos",
    to: "/produtos",
  },
  {
    id: 3,
    label: "Sobre Nós",
    to: "/sobre",
  },
  {
    id: 4,
    label: "Contato",
    to: "/contato",
  },
  {
    id: 5,
    label: "Carrinho",
    to: "/carrinho",
  },
];

export default function Rodape() {
  return (
    <footer className="bg-verde-escuro text-verde-claro py-10 px-4 lg:px-20">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-">
        <div>
          <h2 className="font-marca text-5xl mb-4">Entre Folhas</h2>
          <p>
            Decorações naturais para casas com alma. Selecionamos com carinho
            cada produto para trazer mais vida e beleza ao seu lar.
          </p>
          <nav className="flex items-center gap-3 my-4 ">
            <a
              className="hover:text-verde-oliva transition-all duration-300"
              href="http://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LuInstagram className="w-6 h-6" />
            </a>
            <a
              className="hover:text-verde-oliva transition-all duration-300"
              href="http://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LuFacebook className="w-6 h-6" />
            </a>
            <a
              className="hover:text-verde-oliva transition-all duration-300"
              href="http://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LuTwitter className="w-6 h-6" />
            </a>
          </nav>
        </div>
        <div className="lg:mx-auto">
          <h3 className="font-playfair text-2xl mb-4">Links Rápidos</h3>
          <nav className="grid grid-cols-1 gap-2">
            {links.map((link) => (
              <Link
                key={link.id}
                className="hover:text-verde-oliva transition-all duration-300"
                to={link.to}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="lg:mx-auto">
          <h3 className="font-playfair text-2xl mb-4">Entre em contato</h3>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center gap-4">
              <LuMail className="w-6 h-6" />
              <a href="mailto:contato@entrefolhas.com.br">
                contato@entrefolhas.com.br
              </a>
            </div>
            <div className="flex items-center gap-4">
              <LuPhone className="w-6 h-6" />
              <a href="tel:+551199876-5432">(11) 99876-5432</a>
            </div>
            <div className="flex gap-4">
              <LuMapPin className="w-6 h-6" />
              <div className="grid grid-cols-1">
                <p>Rua das Hortênsias, 123</p>
                <p>Jardim Botânico</p>
                <p>São Paulo - SP</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-6 pt-6 border-t-1 border-verde-claro">
        <p className="text-center text-sm">
          © 2025 Entre Folhas. Todos os direitos reservados. *Projeto fictício,
          sem fins comerciais *
        </p>
      </div>
    </footer>
  );
}
