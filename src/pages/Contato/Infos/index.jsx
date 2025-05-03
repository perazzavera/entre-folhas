import { LuMail, LuMapPin, LuPhone } from "react-icons/lu";

export default function Infos() {
  return (
    <div className=" bg-bege p-6 rounded-2xl grid grid-cols-1">
      <h3 className="font-playfair text-xl text-verde-escuro lg:mb-4">
        Informações de contato
      </h3>
      <div className="grid grid-cols-1 gap-4 mt-6 lg:mt-0">
        <div className="flex items-center gap-4">
          <div className="bg-verde-escuro text-verde-claro p-3 rounded-full">
            <LuMail className="w-7 h-7" />
          </div>
          <span>
            <h4 className="font-playfair text-lg">Email</h4>
            <a href="mailto:contato@entrefolhas.com.br">
              contato@entrefolhas.com.br
            </a>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-verde-escuro text-verde-claro p-3 rounded-full">
            <LuPhone className="w-7 h-7" />
          </div>
          <span>
            <h4 className="font-playfair text-lg">Telefone</h4>
            <a href="tel:+551199876-5432">(11) 99876-5432</a>
          </span>
        </div>
        <div className="flex items-start gap-4">
          <div className="bg-verde-escuro text-verde-claro p-3 rounded-full">
            <LuMapPin className="w-7 h-7" />
          </div>
          <span>
            <h4 className="font-playfair text-lg">Endereço</h4>
            <span>
              <p>Rua das Hortênsias, 123</p>
              <p>Jardim Botânico</p>
              <p>São Paulo - SP</p>
            </span>
          </span>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-2">
        <h3 className="font-playfair text-xl text-verde-escuro">
          Horário de Funcionamento
        </h3>
        <p>Segunda a Sexta: 9h às 18h</p>
        <p>Sábado: 10h às 16h</p>
      </div>
    </div>
  );
}
