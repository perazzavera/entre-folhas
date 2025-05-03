export default function InfoProduto({ produtoEncontrado }) {
  return (
    <>
      <h2 className="text-4xl font-playfair font-medium text-verde-escuro mb-2">
        {produtoEncontrado.nome}
      </h2>
      <div className="absolute right-5 top-3">
        {produtoEncontrado.novo && (
          <span className="ml-4 bg-verde-escuro text-verde-claro text-xs font-medium px-2 py-1 rounded animate-pulse">
            Novo
          </span>
        )}
      </div>
      <div className="mb-6">
        <h2 className="text-lg font-medium text-gray-900 mb-2">Descrição</h2>
        <p className="text-gray-600">{produtoEncontrado.descricao}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-medium text-gray-900 mb-2">
          Características
        </h2>
        <ul className="list-disc pl-5 text-gray-600 space-y-1">
          {produtoEncontrado.caracteristicas?.map((caracteristica, index) => (
            <li key={index}>{caracteristica}</li>
          ))}
        </ul>
      </div>

      <div className="flex items-center mb-4">
        <span className="text-3xl font-playfair text-verde-escuro">
          R$ {produtoEncontrado.preco.toFixed(2).replace(".", ",")}
        </span>
      </div>
    </>
  );
}
