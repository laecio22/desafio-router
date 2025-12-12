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
      <section className={s.containerForm}>
        <form>
          <h2>Inscrição para Voluntários</h2>
          <div>
            <h4>Dados Pessoais</h4>
            <input type="text"  placeholder="Nome*" />
            <input type="email" placeholder="Seu Email*" />
            <input type="tel" placeholder="Seu telefone" />
          </div>
          <div>
            <h4>Mensagem Adicional</h4>
            <textarea placeholder="Conte-nos porque quer ser  um voluntário ..."></textarea>
          </div>
          <p>Entraremos em  contato para  mais informações</p>
          <button>Enviar Inscrição</button>
        </form>
      </section>
    </main>
  );
};

export default Voluntarios;
