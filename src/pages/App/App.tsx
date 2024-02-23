import "./App.css";
import { Header } from "../../components/Header/Header";
import { GridProducts } from "../../components/GridProducts/GridProducts";
import { Cart } from "../../components/Cart/Carts";
import { Footer } from "../../components/Footer/Footer";
import { useApp } from "./hook/useApp";

function App() {
  const { filteredProducts } = useApp();
  return (
    <>
      <Header />
      <Cart />
      <GridProducts products={filteredProducts} />
      <Footer />
    </>
  );
}

export default App;
