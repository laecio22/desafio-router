import CardVantagens from "../../components/cardVantagens/CardVantagens";
import s from "./voluntarios.module.scss";
const Voluntarios = () => {
  return (
    <main>
      <section className={s.containerVoluntario}>
        <h1>Seja Voluntário</h1>
        <p>Junte-se a nós e faça a diferença na vida de pessoas que precisam</p>
        <div className={s.containerCards}>
          <CardVantagens 
          title="Impacto Direto" 
          description="Sua dedicação salva vidas e transforma comunidades"/>
          <CardVantagens
          title="Crescimento Pessoal" 
          description="Desenvolva habilidades e cresça profissionalmente"
          />
          <CardVantagens
          title="Comunidade"
          description="Faça parte de uma rede de profissionais comprometidos"
          />        
        </div>
      </section>
      {/* <section className={s.containerForm}>
        <form></form>
      </section> */}
    </main>
  );
};

export default Voluntarios;
