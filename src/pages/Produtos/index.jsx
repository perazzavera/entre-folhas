"use client";

import produtos from "../../mocks/plantas.json";
import { useEffect, useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import FiltrosMobile from "./Filtros/FiltrosMobile";
import SortFilter from "./Filtros/SortFilter";
import FiltrosDesktop from "./Filtros/FiltrosDesktop";
import { useParams } from "react-router-dom";
import GridProdutos from "./GridProdutos";
import Paginacao from "./Paginacao";

const subcategorias = [
  { name: "CACTOS", to: "/produtos/plantas/cactos" },
  { name: "KOKEDAMAS", to: "/produtos/plantas/kokedamas" },
  { name: "SUCULENTAS", to: "/produtos/plantas/suculentas" },
  { name: "FLORAIS", to: "/produtos/plantas/florais" },
  { name: "FOLHAGENS", to: "/produtos/plantas/folhagens" },
  { name: "MINI ÁRVORES", to: "/produtos/plantas/miniarvores" },
  { name: "SAMAMBAIAS", to: "/produtos/plantas/samambaias" },
  { name: "PALMEIRAS", to: "/produtos/plantas/palmeiras" },
];

const nomesFormatados = {
  cactos: "CACTOS",
  kokedamas: "KOKEDAMAS",
  suculentas: "SUCULENTAS",
  florais: "FLORAIS",
  folhagens: "FOLHAGENS",
  miniarvores: "MINI ÁRVORES",
  samambaias: "SAMAMBAIAS",
  palmeiras: "PALMEIRAS",
};

export default function Produtos() {
  const { categorias, subcategoria } = useParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const [sortBy, setSortBy] = useState("");

  const [paginaAtual, setPaginaAtual] = useState(1);
  const produtosPorPagina = 6;
  const indiceInicial = (paginaAtual - 1) * produtosPorPagina;
  const indiceFinal = paginaAtual * produtosPorPagina;

  const produtosFiltrados = produtos.filter((produto) => {
    const categoriaMatch = categorias
      ? produto.categorias[0].toLowerCase() === categorias.toLowerCase()
      : true;
    const subcategoriaMatch = subcategoria
      ? produto.subcategoria.toLowerCase() === subcategoria.toLowerCase()
      : true;
    return categoriaMatch && subcategoriaMatch;
  });

  const produtosOrdenados = [...produtosFiltrados].sort((a, b) => {
    if (sortBy === "precoAsc") return a.preco - b.preco;
    if (sortBy === "precoDesc") return b.preco - a.preco;
    if (sortBy === "maisRecentes") return new Date(b.data) - new Date(a.data);
    return 0;
  });

  const produtosVisiveis = produtosOrdenados.slice(indiceInicial, indiceFinal);
  const totalPaginas = Math.ceil(produtosFiltrados.length / produtosPorPagina);
  const numerosPaginas = Array.from({ length: totalPaginas }, (_, i) => i + 1);

  const product = {
    breadcrumbs: [
      { id: 1, name: "HOME", to: "/" },
      { id: 2, name: "PRODUTOS", to: "/produtos" },
      categorias && {
        id: 3,
        name: categorias.toUpperCase(),
        to: "/produtos",
      },
    ].filter(Boolean),
    tag:
      (subcategoria && nomesFormatados[subcategoria.toLowerCase()]) ||
      "TODOS OS PRODUTOS",
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [paginaAtual]);

  return (
    <>
      <Breadcrumb product={product} />
      <div className="bg-white">
        <div>
          {/* OFF CANVAS FILTRO MOBILE */}
          <FiltrosMobile
            mobileFiltersOpen={mobileFiltersOpen}
            setMobileFiltersOpen={setMobileFiltersOpen}
            subcategorias={subcategorias}
          />

          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* HEADER PAGINA */}
            <div className="flex items-baseline justify-between border-b border-gray-200 py-6">
              <h2 className="text-xl font-playfair font-medium text-verde-escuro">
                {product.tag}
              </h2>

              <SortFilter
                setMobileFiltersOpen={setMobileFiltersOpen}
                sortBy={sortBy}
                setSortBy={setSortBy}
              />
            </div>

            {/* FILTROS DESKTOP */}
            <section aria-labelledby="products-heading" className="pt-6 pb-24">
              <h2 id="products-heading" className="sr-only">
                Products
              </h2>

              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                <FiltrosDesktop subcategorias={subcategorias} />

                {/* GRID DE PRODUTOS*/}
                <div className="lg:col-span-3">
                  <GridProdutos produtosVisiveis={produtosVisiveis} />

                  {/* PAGINAÇÃO*/}
                  <Paginacao
                    paginaAtual={paginaAtual}
                    setPaginaAtual={setPaginaAtual}
                    numerosPaginas={numerosPaginas}
                    totalPaginas={totalPaginas}
                  />
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
