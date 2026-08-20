import Header from './components/Header'
import TopicList from './components/TopicList'
import StudentCard from './components/StudentCard'
import Footer from './components/Footer'
import './App.css'

function App() {
  const topics = ['JSX', 'Components', 'Props', 'Fragments']

  return (
    <>
      <Header />

      <StudentCard
        name="Gloriya"
        course="BSc IT"
      />

      <TopicList topics={topics} />

      <Footer />
    </>
  )
}

export default App