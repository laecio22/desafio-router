import s from './cardMissao.module.scss'

const CardMissao = (props) => {
  return (
    <article className={s.container}>
        <h3>{props.titleCard}</h3>
        <p>{props.descriptionCard}</p>
    </article>
  )
}

export default CardMissao