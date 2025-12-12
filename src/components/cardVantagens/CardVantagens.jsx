import s from './cardVantagens.module.scss'

const CardVantagens = (props) => {
  return (
    <article className={s.article}>
      <h3>{props.title}</h3>
      <p className={s.description}>{props.description}</p>
    </article>
  )
}

export default CardVantagens