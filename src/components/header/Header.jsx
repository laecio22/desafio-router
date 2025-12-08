import s from "./header.module.scss";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className={s.header}>
      <div>
        <img src='/coracao.png' alt="imagem coração" />
         <Link to="/"><p>Médicos & Dentistas</p></Link>
      
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/voluntarios"><button>Seja Voluntário</button></Link>
      </nav>
    </header>
  );
};

export default Header;
