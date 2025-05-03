import { BotaoLink } from "../../../components/Botoes";

export default function HeroSection() {
  return (
    <section className="h-screen bg-[url(/images/hero.jpg)] bg-left bg-cover">
      <div className="h-full bg-verde-claro/70 flex items-center lg:justify-center">
        <div className="px-4 text-center">
          <h2 className="font-playfair text-5xl mb-4 font-medium text-verde-escuro animate-fade-up">
            Entre folhas, nasce o aconchego.
          </h2>
          <p className="text-verde-escuro text-lg animate-fade-up delay-5">
            Decorações naturais para casas com alma.
          </p>
          <div className="mt-6 delay-10 flex justify-center">
            <BotaoLink to="/produtos">Descubra o verde ideal</BotaoLink>
          </div>
        </div>
      </div>
    </section>
  );
}
