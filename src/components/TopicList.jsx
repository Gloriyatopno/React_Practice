function TopicList({ topics }) {
  return (
    <section className="topics">
      <h2>Topics I am learning</h2>

      <ul>
        {topics.map((topic) => (
          <li className="topic" key={topic}>
            {topic}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default TopicList