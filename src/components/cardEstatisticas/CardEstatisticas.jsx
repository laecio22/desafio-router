import s from './cardEstatisticas.module.scss'

const CardEstatisticas = (props) => {
  return (
    <article className={s.article}>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </article>
  )
}

export default CardEstatisticas