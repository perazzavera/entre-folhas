import { BotaoLink } from "../../../components/Botoes";

export default function Historia() {
  return (
    <section className="py-10 px-4 bg-bege lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div className="grid grid-cols-1 gap-4">
          <h2 className="font-playfair text-4xl text-verde-escuro text-center">
            A nossa história
          </h2>
          <p className="lg:text-center">
            Entre Folhas nasceu do amor pelas plantas e do desejo de trazer mais
            natureza para o dia a dia das pessoas.
          </p>
          <p className="lg:text-center">
            Em 2018, começamos a selecionar peças únicas de cerâmica artesanal
            para combinar com nossas plantas favoritas. Desde então, nossa
            coleção cresceu, mantendo sempre o mesmo cuidado na escolha de cada
            item.
          </p>
          <p className="lg:text-center">
            Acreditamos que a natureza tem o poder de transformar ambientes e,
            por consequência, nossas vidas. Cada planta e vaso que enviamos
            carrega essa filosofia.
          </p>
        </div>
        <div>
          <img
            className="h-100 w-full object-cover object-bottom rounded-xl my-8 shadow-black/20 shadow-md"
            src="/images/historia.jpeg"
            alt="imagem de vários vasinhos de suculentas"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <BotaoLink to="/sobre">Conheça nossa história</BotaoLink>
      </div>
    </section>
  );
}
