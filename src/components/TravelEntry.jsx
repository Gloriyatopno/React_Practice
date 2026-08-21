function TravelEntry({
  title,
  location,
  date,
  description,
  rating,
  isFavorite
}) {
  return (
    <article className="travel-entry">
      <h2>{title}</h2>
      <p>{location}</p>
      <p>{date}</p>
      <p>{description}</p>
      <p>Rating: {rating}/5</p>
      <p>{isFavorite ? "Favorite" : "Not a favorite"}</p>
    </article>
  )
}

export default TravelEntry