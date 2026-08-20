import Header from './components/Header'
import TopicList from './components/TopicList'
import Footer from './components/Footer'
import './App.css'

function App() {
  const topics = ['JSX', 'Components', 'Props', 'Fragments']

  return (
    <>
      <Header />
      <TopicList topics={topics} />
      <Footer />
    </>
  )
}

export default App