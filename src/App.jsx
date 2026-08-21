import TravelEntry from './components/TravelEntry'

function App() {
  const travelData = [
    {
      id: 1,
      title: "Mount Fuji",
      location: "Japan",
      date: "12 Jan 2026 - 20 Jan 2026",
      description:
        "Japan is known for its beautiful mountains and rich culture."
    },
    {
      id: 2,
      title: "Goa",
      location: "India",
      date: "05 Feb 2026 - 10 Feb 2026",
      description:
        "Goa is famous for its beaches, food and relaxed atmosphere."
    },
    {
      id: 3,
      title: "Eiffel Tower",
      location: "France",
      date: "15 Mar 2026 - 20 Mar 2026",
      description:
        "Paris is famous for its landmarks, art and beautiful streets."
    }
  ]

  return (
    <>
      <h1>My Travel Journal</h1>

      {travelData.map((place) => (
        <TravelEntry
        key={place.id}
        {...place}
        />
      ))}
    </>
  )
}

export default App