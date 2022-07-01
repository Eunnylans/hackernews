import { useState, useEffect } from 'react'
import { Button, Carousel } from 'react-bootstrap'
import axios from 'axios'
 

function CarouselList({ inputTag }) {
  const [data, setData] = useState([])
  const [images, setImages] = useState([])
  const [tag, setTag] = useState(inputTag)
  


  // fetching background images from unsplash according to the tag from search bar
  const getBg = async tags => {
    const unsplashKey = 'jm92zs0Fpnc-r5en0j_ubISv-GCp43vY3ZnEkefPUNU'
    let arr = []
    try {
      const res = await fetch(
        `https://api.unsplash.com/search/photos?page=1&query=${tags}&client_id=${unsplashKey}`
      )
      const { results } = await res.json()
      results.forEach(r => {
        arr.push(r.urls.small)
      })

      console.log(arr)
      setImages([...arr, ...arr, ...arr])
    } catch (error) {
      console.error(error)
    }
  }

  // her some set of images in case our tag from search bar did'nt match categories in unsplash
  const someImg = [
    'https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1458&q=80',
    'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    'https://images.unsplash.com/photo-1599423300746-b62533397364?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
  ]
  const repeatImg = [...Array(10).fill(someImg).flat(1)]

  // data from hacker news API
  const getData = async tags => {
    if (tags === 'new') {
      // make fetch with `http://hn.algolia.com/api/v1/search_by_date?query=${tags}`
      
    } else {
      try {
        const res = await fetch(
          `http://hn.algolia.com/api/v1/search?query=${tags}`
        )
        const { hits } = await res.json()
        setData(hits)
      } catch (error) {
        console.error(error)
      }
    }
  }
  
  // useEffect will lessen to all changes coming from the nav bar and call functions to fetch data from hacker news and background imag from splash that matches the value in search bar
  useEffect(() => {
    setTag(inputTag)
    getData(tag)
    getBg(tag)
  }, [inputTag, tag])

  // cards start
  const carouselCards = () => {
    // loop throw the incoming data from hacker news and display them into a carousel

    // make if after  function return in case we wont to sort data in date order
    return data.map((i, ind) => (
      <Carousel.Item key={ind}>
        <div
          className='d-block img'
          style={{
            // adding the background from unsplash if available or from pre set array if not
            backgroundImage: `url(${
              images.length <= 1 ? repeatImg[ind] : images[ind]
            })`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            opacity: 0.9,
          }}
        ></div>
        <Carousel.Caption className='caption'>
          <p>{i.title}</p>
          <p>{i.created_at}</p>
          <h3>Author: {i.author}</h3>
          <a target={'#'} href={i.url}>
            <Button type='submit' variant='outline-info'>
              Go To
            </Button>
          </a>
        </Carousel.Caption>
      </Carousel.Item>
    ))
  }
  // cards end

  return <Carousel>{carouselCards()}</Carousel>
}

export default CarouselList
