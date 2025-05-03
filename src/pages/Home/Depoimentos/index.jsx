import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import RatingStars from "../../../components/RatingStars";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

const depoimentos = [
  {
    id: 1,
    nome: "Ana Luiza Santos",
    depoimento:
      "As plantas que comprei chegaram em ótimo estado e o vaso é lindo! Superou todas as minhas expectativas. Já estou planejando minhas próximas compras.",
    imagem: "/images/ana.png",
    rating: 5,
  },
  {
    id: 2,
    nome: "Ricardo Oliveira",
    depoimento:
      "Estou impressionado com a qualidade dos produtos e o cuidado com o empacotamento. As plantas chegaram intactas e já estão embelezando meu escritório.",
    imagem: "/images/ricardo.png",
    rating: 5,
  },
  {
    id: 3,
    nome: "Fernanda Lima",
    depoimento:
      "A Zamioculca que comprei está lindíssima e o atendimento foi excelente! Fiquei tão satisfeita que já recomendei para vários amigos.",
    imagem: "/images/fernanda.png",
    rating: 4,
  },
];

export default function Depoimentos() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-10 px-4 bg-verde-escuro text-verde-claro">
      <h2 className="text-4xl font-playfair text-center">
        O que nossos clientes dizem
      </h2>
      <p className="text-center mt-4">
        Descubra como nossas plantas e vasos estão transformando os ambientes e
        tocando corações.
      </p>

      <div className="overflow-hidden mt-8 relative" ref={emblaRef}>
        <div className="flex">
          {depoimentos.map((pessoa) => (
            <div key={pessoa.id} className="min-w-full p-4 text-center">
              <img
                src={pessoa.imagem}
                alt={pessoa.nome}
                className="rounded-full h-20 w-20 object-cover mx-auto mb-2"
              />
              <h3 className="text-2xl font-playfair">{pessoa.nome}</h3>
              <div className="flex justify-center my-2">
                <RatingStars rating={pessoa.rating} />
              </div>
              <p className="max-w-xl mx-auto">{pessoa.depoimento}</p>
            </div>
          ))}
        </div>

        {/* Setas */}
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-verde-claro text-verde-escuro p-2 rounded-full hover:bg-verde-claro/80"
          onClick={() => emblaApi && emblaApi.scrollPrev()}
        >
          <LuChevronLeft />
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-verde-claro text-verde-escuro p-2 rounded-full hover:bg-verde-claro/80"
          onClick={() => emblaApi && emblaApi.scrollNext()}
        >
          <LuChevronRight />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-3 h-3 rounded-full border ${
              index === selectedIndex
                ? "bg-verde-claro border-verde-claro"
                : "border-verde-claro"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
