import TravelEntry from './components/TravelEntry'

function App() {
  const travelData = [
    {
      id: 1,
      title: "Mount Fuji",
      location: "Japan",
      date: "12 Jan 2026 - 20 Jan 2026",
      description: "Japan is known for its beautiful mountains and rich culture.",
      rating: 5,
      isFavorite: true
    },
    {
      id: 2,
      title: "Goa",
      location: "India",
      date: "05 Feb 2026 - 10 Feb 2026",
      description: "Goa is famous for its beaches, food and relaxed atmosphere.",
      rating: 4,
      isFavorite: false
    },
    {
      id: 3,
      title: "Eiffel Tower",
      location: "France",
      date: "15 Mar 2026 - 20 Mar 2026",
      description: "Paris is famous for its landmarks, art and beautiful streets.",
      rating: 5,
      isFavorite: true
    }
  ]

  return (
    <main>
      <h1>My Travel Journal</h1>

      {travelData.map((place) => (
        <TravelEntry
          key={place.id}
          {...place}
        />
      ))}
    </main>
  )
}

export default App