import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/HomePage";

function App() {
  return (
    <div className="bg-black overflow-hidden app scroll-smooth">
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
