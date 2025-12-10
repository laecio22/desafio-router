import s from "./home.module.scss";
import iconSaude from "../../assets/saude.png";
import doutor from "../../assets/doutor.png";
import CardMissao from "../../components/cardMissao/CardMissao";
import CardEstatisticas from "../../components/cardEstatisticas/CardEstatisticas";

const Home = () => {
  const title1 = "Acesso Equitativo";
  const description1 =
    "Garantir que todos tenham acesso a cuidados de saúde de qualidade, independentemente de sua condição financeira.";
  const title2 = "Comunidade Forte";
  const description2 =
    "Construir uma rede de profissionais de saúde dedicados a servir com compaixão e profissionalismo.";
  const title3 = "Bem-estar Total";
  const description3 =
    "Oferecer atendimento integral em medicina geral e odontologia para melhorar a qualidade de vida.";
  
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
      <section className={s.missao}>
        <h2>Nossa Missão</h2>
        <p>
          Transformar vidas através do acesso universal a saúde de qualidade
        </p>
        <div className={s.boxCardsMissao}>
          <CardMissao titleCard={title1} descriptionCard={description1} />
          <CardMissao titleCard={title2} descriptionCard={description2} />
          <CardMissao titleCard={title3} descriptionCard={description3} />
        </div>
      </section>
      <section className={s.estatisticas}>
        <h2>Nosso Impacto</h2>
        <p>
          Transformando a saúde de nossa comunidade, um paciente de cada vez
        </p>
        <div className={s.boxCardsEstatisticas}>
          <CardEstatisticas title="2,500+" description="Pessoas Atendidas"/>
          <CardEstatisticas title="150+"  description="Profissionais Voluntários"/>
          <CardEstatisticas title="98%"  description="Satisfação dos Pacientes"/>
          <CardEstatisticas title="5+"  description="Anos de Dedicação" />
        </div>
      </section>
    </main>
  );
};

export default Home;
