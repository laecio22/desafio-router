import s from "./home.module.scss";
import iconSaude from "../../assets/saude.png";
import doutor from "../../assets/doutor.png";

const Home = () => {
  return (
    <main>
      <section className={s.container}>
        <div className={s.boxInfo}>
          <img src={iconSaude} alt="imagem com uma mensagem saúde para todos" />
          <h1>Saúde e cuidado sem barreiras</h1>
          <p>
            Um projeto dedicado a oferecer atendimento médico e odontológico
            gratuito para pessoas que mais precisam na nossa comunidade.
          </p>
          <div className={s.boxButtons}>
            <button className={s.btnVoluntario}>Seja Voluntário</button>
            <button className={s.btnAjuda}> Como ajudar</button>
          </div>
        </div>
        <div className={s.boxImage}>
          <img src={doutor} alt="Imagem de  um doutor  sorrindo" />
        </div>
      </section>
    </main>
  );
};

export default Home;
