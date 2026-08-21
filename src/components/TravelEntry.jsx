function TravelEntry({ title, location, date, description }) {
  return (
    <article className="travel-entry">
      <h2>{title}</h2>
      <p>{location}</p>
      <p>{date}</p>
      <p>{description}</p>
    </article>
  )
}

export default TravelEntry