import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/HomePage";
import CreateEvent from "./pages/CreateEvent";

function App() {
  return (
    <div className="bg-black overflow-hidden app scroll-smooth">
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route path="/create-event" element={<CreateEvent />} /> */}
      </Routes>
    </div>
  );
}

export default App;
