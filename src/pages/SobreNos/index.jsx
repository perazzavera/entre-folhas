import { LuBadgeCheck, LuLeaf, LuLightbulb } from "react-icons/lu";
import Banner from "./Banner";
import NewsLetter from "../Home/Newsletter";
import { useEffect } from "react";
const valores = [
  {
    id: "Sustentabilidade",
    texto:
      "Priorizamos práticas sustentáveis em toda nossa cadeia, desde o cultivo até a entrega.",
  },
  {
    id: "Qualidade",
    texto:
      "Selecionamos cuidadosamente cada planta e vaso para garantir produtos duráveis e de alta qualidade.",
  },
  {
    id: "Inovação",
    texto:
      "Buscamos constantemente novas variedades e designs para oferecer produtos únicos e especiais.",
  },
];

const icones = [LuLeaf, LuBadgeCheck, LuLightbulb];

export default function SobreNos() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section>
      <Banner />
      <div>
        {/* História */}
        <div className="py-16 px-4 grid grid-cols-1 bg-bege lg:px-20 lg:grid-cols-2 lg:gap-20 lg:items-center">
          <div className="grid grid-cols-1 gap-4">
            <h3 className="font-playfair text-3xl text-verde-escuro">
              Como tudo começou
            </h3>
            <p>
              A Entre Folhas nasceu em 2018, quando Carolina, uma bióloga
              apaixonada por plantas, decidiu transformar seu hobby em um
              negócio. Tudo começou com um pequeno espaço em casa, onde ela
              cultivava suas próprias plantas e selecionava vasos artesanais
              para presentear amigos e familiares.
            </p>
            <p>
              O que era apenas um passatempo, logo se transformou em paixão.
              Carolina começou a estudar mais profundamente sobre plantas
              ornamentais, seus cuidados específicos e como elas poderiam
              transformar ambientes e melhorar o bem-estar das pessoas.
            </p>
            <p>
              Em 2020, juntou-se a Rafael, designer e artesão, que trouxe sua
              expertise no desenvolvimento de vasos e suportes únicos. Juntos,
              eles expandiram a Entre Folhas para o que é hoje: um espaço
              dedicado a conectar pessoas com a natureza através de produtos
              cuidadosamente selecionados.
            </p>
          </div>
          <div className="rounded-xl shadow-md shadow-black/20 my-6">
            <img
              className="rounded-xl lg:h-130 lg:object-cover lg:object-bottom lg:w-full"
              src="/images/cactario-1.jpeg"
              alt="imagem de um cactario com suculentas"
            />
          </div>
        </div>
      </div>
      {/* Missão e valores */}
      <div className=" py-16 px-4 lg:px-40">
        <div className="grid grid-cols-1 gap-4 lg:text-center">
          <h3 className="font-playfair text-3xl text-verde-escuro">
            Nossa missão e valores
          </h3>

          <p>
            Acreditamos que a presença de elementos naturais em nossos lares e
            espaços de trabalho é essencial para o bem-estar. Nossa missão é
            facilitar essa conexão com a natureza através de produtos que
            combinam beleza, funcionalidade e sustentabilidade.
          </p>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {valores.map((valor, index) => {
              const Icon = icones[index];
              return (
                <div
                  key={valor.id}
                  className="bg-bege p-4 rounded-xl shadow-black/20 shadow-md"
                >
                  <div className="flex mx-auto bg-verde-oliva w-fit p-3 rounded-full text-verde-claro">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h4 className="text-center font-playfair text-xl my-2">
                    {valor.id}
                  </h4>
                  <p>{valor.texto}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <NewsLetter />
    </section>
  );
}
