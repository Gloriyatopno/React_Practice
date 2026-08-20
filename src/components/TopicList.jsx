function TopicList({ topics }) {
  return (
    <section>
      <h2>Topics I am learning</h2>

      <ul>
        {topics.map((topic) => (
          <li key={topic}>{topic}</li>
        ))}
      </ul>
    </section>
  )
}

export default TopicList