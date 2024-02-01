import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/homepage/Home.jsx";
import Summry from "./pages/summrypage/Summry.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/summry/:id" element={<Summry/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
