import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
