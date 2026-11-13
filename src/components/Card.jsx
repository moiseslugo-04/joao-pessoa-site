export function Card({ img, alt, eyebrow, title, description, idealFor }) {
  return (
    <article class='destination-card reveal'>
      <img src={img} alt={alt} />
      <div class='card-body'>
        <p class='eyebrow dark-eyebrow'>{eyebrow}</p>
        <h2>{title}</h2>
        <p>{description}</p>
        <strong>{idealFor}</strong>
      </div>
    </article>
  )
}
