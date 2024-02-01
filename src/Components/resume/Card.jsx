function Card(values) {
  const {icon, year, title, desc} = values

  return (
    <div className="card__timeline">
        <i className={icon}></i>
        <span className="card__date">{year}</span>
        <h3 className="card__title">{title}</h3>
        <p className="card__text">{desc}</p>
    </div>
  )
}

export default Card