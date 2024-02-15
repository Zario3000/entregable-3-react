import { useEffect, useRef, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import LocationCard from './components/LocationCard'
import ResidentCard from './components/ResidentCard'
import Pagination from './components/Pagination'
import imgBanner from "/assets/image/banner-Rick-and-Morty.jpg"
function App() {
  const [location, getLocation, isLoading, hasError] = useFetch()
  const [finder, setFinder] = useState(Math.floor(Math.random()*126+ 1))
const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    
    const url = `https://rickandmortyapi.com/api/location/${finder}`
    getLocation(url)
  }, [finder])

  const textImput = useRef()

  const handleSubmit = event =>{
    event.preventDefault()
    setFinder(textImput.current.value.trim())
    event.target.reset()

  }

  //console.log(location)
  const quantity = 5;
  const second = currentPage * quantity;
  const first = second - quantity;

  const residentsPart = location && location.residents.slice(first, second);
  const totalPages = location && Math.floor(location.residents.length/quantity)+1
  return (
     <div className='app'>
      {
        isLoading?
        <h2>Loading...</h2>
        :
        
        <>
        <img src={imgBanner} alt="" />
      <form  className='app-form' action="" onSubmit={handleSubmit}>
        <input className='app-text' type="number" 
        ref={textImput} 
        placeholder='type a number (1 to 126)'
        />
        <button className='app-btn' >Search</button>
      </form>
      {
        hasError || finder === "0" ?
        <h2>this location do not exist</h2>
        :
        <>
        <LocationCard
        location = {location}
      />
       <Pagination
     
     currentPage={currentPage}
     setCurrentPage={setCurrentPage}
     totalPages = {totalPages}
     />
      <div className='app-container'>
      {
        residentsPart.map(resident => (
          <ResidentCard
           key = {resident}
           url = {resident}
          />
        ))
      }
      </div>
      <Pagination
     
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      totalPages = {totalPages}
      />
        </>
      }
    
      </>
      }
      
     
     </div>
  )
}

export default App
