import s from './cardVantagens.module.scss'

const CardVantagens = (props) => {
  return (
    <section>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </section>
  )
}

export default CardVantagens