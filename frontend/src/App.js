import Navbar from "./components/Navbar/Navbar";
import "./index.css";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <div>
          <HomePage />
        </div>
      </div>
    </>
  );
}

export default App;
