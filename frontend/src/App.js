import "./index.css";
import { Route, Routes } from "react-router-dom";
import UserRoutes from "./routes/UserRoutes";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/*" element={<UserRoutes />}></Route>
      </Routes>
    </div>
  );
}

export default App;
