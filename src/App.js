
import { useState, useEffect } from 'react'
import './App.css'
import Nav from './Components/Nav'
import Carousel from './Components/Carousel'
import Pagination from './Components/Pagination'
import Footer from './Components/Footer'
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

