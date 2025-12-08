import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./globalStyle.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Voluntarios from "./pages/voluntarios/Voluntarios"
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/voluntarios" element={<Voluntarios/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
