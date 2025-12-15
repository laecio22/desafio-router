import s from "./header.module.scss";
import { Link } from "react-router-dom";
import imageCoracao from '../../assets/coracao.png';
import menuHamburguer from '../../assets/hamburguer.png';
const Header = () => {
  return (
    <header className={s.header}>
      <div>
        <img src={imageCoracao} alt="imagem coração" />
         <Link to="/"><p>Médicos & Dentistas</p></Link>
      
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/voluntarios"><button>Seja Voluntário</button></Link>
      </nav>      
        <img src={menuHamburguer} alt="nenu hamburguer" className={s.menuHamburguer}/>
      
    </header>
  );
};

export default Header;
