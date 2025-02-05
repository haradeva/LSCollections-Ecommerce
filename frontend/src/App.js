import FullProductList from "./components/FullProductList/FullProductList";
import Navbar from "./components/Navbar/Navbar";
import "./index.css";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import Order from "./components/Order/Order";
import OrderDetails from "./components/Order/OrderDetails";

function App() {
  return (
    <div className="">
      <Navbar />
      <div>
        {/* <HomePage /> */}
        {/* <FullProductList /> */}
        {/* <ProductDetails /> */}
        {/* <Cart /> */}
        {/* <Checkout /> */}
        {/* <Order /> */}
        <OrderDetails />
      </div>
      <Footer />
    </div>
  );
}

export default App;
