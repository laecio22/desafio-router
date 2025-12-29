import s from "./header.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import imageCoracao from "../../assets/coracao.png";
import menuHamburguer from "../../assets/hamburguer.png";
const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((v) => !v);
  const closeMenu = () => setOpen(false);

  return (
    <header className={s.header}>
      <div>
        <img src={imageCoracao} alt="imagem coração" />
        <Link to="/">
          <p>Médicos & Dentistas</p>
        </Link>
      </div>

      <nav className={s.desktopNav}>
        <Link to="/">Home</Link>
        <Link to="/voluntarios">
          <button>Seja Voluntário</button>
        </Link>
      </nav>

      <img
        src={menuHamburguer}
        alt="menu hamburguer"
        className={s.menuHamburguer}
        onClick={toggleMenu}
        aria-label={open ? "Fechar menu" : "Abrir menu"}
      />

      <div
        className={`${s.mobileNav} ${open ? s.open : ""}`}
        role="dialog"
        aria-hidden={!open}
      >
        <Link to="/" onClick={closeMenu}>
          Home
        </Link>
        <Link to="/voluntarios" onClick={closeMenu}>
          <button>Seja Voluntário</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
