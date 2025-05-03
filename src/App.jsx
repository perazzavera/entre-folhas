import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DefaultPage from "./pages/DefaultPage";
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import DetalhesProduto from "./pages/DetalhesProduto";
import { CartProvider } from "./context/CarrinhoContext";
import Carrinho from "./pages/Carrinho";
import SobreNos from "./pages/SobreNos";
import Contato from "./pages/Contato";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Routes>
            <Route path="/" element={<DefaultPage />}>
              <Route index element={<Home />} />
              <Route path="/produtos" element={<Produtos />} />
              <Route path="/produtos/:categorias" element={<Produtos />} />
              <Route
                path="/produtos/:categorias/:subcategoria"
                element={<Produtos />}
              />

              <Route
                path="/produtos/:categorias/:subcategoria/:id"
                element={<DetalhesProduto />}
              />
              <Route path="/sobre" element={<SobreNos />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/carrinho" element={<Carrinho />} />
              <Route path="/checkout" element={<Checkout />} />
            </Route>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
