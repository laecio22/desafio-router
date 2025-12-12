import s from "./footer.module.scss";
import IconCoracao from "/coracao.png";
import IconEmail from "../../assets/iconEmail.png";
import IconPhone from "../../assets/iconPhone.png";
import IconMap from "../../assets/iconMap.png";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.contentFooter}>
        <div className={s.container}>
          <article>
            <div className={s.boxFlexivel}>
              <img src={IconCoracao} alt="icone de coração"  className={s.imageCoracao}/>
              <h3>Médicos e Dentistas</h3>
            </div>
            <p>Saúde e cuidado sem barreiras para toda comunidade.</p>
          </article>
          <article>
            <h3>Contato</h3>
            <div className={s.boxFlexivel}>
              <img src={IconEmail} alt="ícone  de  email" />
              <p>contato@medico-dentista.org</p>
            </div>
            <div className={s.boxFlexivel}>
              <img src={IconPhone} alt="ícone  de telefone" />
              <p>(11) 3000-0000</p>
            </div>
            <div className={s.boxFlexivel}>
              <img src={IconMap} alt="ícone de localização" />
              <p>São Paulo, Brasil</p>
            </div>
          </article>
        </div>
        <article>
          <h3>Redes Sociais</h3>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Linkedin</p>
        </article>
      </div>
      <div className={s.copyrightFooter}>
        <p>
          © 2025 Médicos e Dentistas pela Comunidade. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
