import { useState, useEffect } from 'react'
import './App.css'
import Nav from './components/Nav'
import Carousel from './components/Carousel'
import Pagination from './components/Pagination'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [newTag, setNewTag] = useState('story')
  const [outPut, setOutPut] = useState(newTag)

  //to get value from search bar 
  const pull_data = data => {
    setNewTag(data)
    return
  }

  useEffect(() => {
    setOutPut(newTag)
  }, [newTag])

  return (
    <div className='App'>
      <Nav func={pull_data} />
      <Carousel inputTag={outPut} />
      <Pagination />
      <Footer />
    </div>
  )
}

export default App
