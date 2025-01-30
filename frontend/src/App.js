import FullProductList from "./components/FullProductList/FullProductList";
import Navbar from "./components/Navbar/Navbar";
import "./index.css";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <div>
          {/* <HomePage /> */}
          <FullProductList />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
