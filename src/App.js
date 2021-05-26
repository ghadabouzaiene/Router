import "./App.css";
import TypeMe, { Delete } from 'react-typeme';
import React, { useState } from "react";
import MovieList from "./component/MovieList";
import { Navbar, Nav } from "react-bootstrap";
import Add from "./component/Add";
import Filter from "./Filter";

//App component that will be called later in the Router


 function App({movieList,setMovieList}) {
 



  const [search, setSearch] = useState("");
  const [rate, setRating] = useState(0);

  const handleTitleFilterChange = (value)=>setSearch(value)
  const handleRateFilterChange = (value)=>setRating(value)
  const movieAdd = (id,title,posterUrl,rating,year) =>
    setMovieList([...movieList, {id, title,posterUrl,rating,year }]);

  
  return (
    <div className="App">
      <div className='nav'>
        <Navbar bg="transparent" variant="dark">
    <Navbar.Brand href="#home"><span className="typewriter"><TypeMe strings={[
  'Home of Movies', 
  <Delete characters={6} />, 
  'fun.']} /></span>
  </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/latestmovies">Latest Movies</Nav.Link>
      <Nav.Link href="/recomondations">Recomondations</Nav.Link>
    </Nav>
    <div>
      <Filter handleTitleFilterChange={handleTitleFilterChange} handleRateFilterChange={handleRateFilterChange}></Filter>
    </div>

  </Navbar>
  </div>
<div className="add">
      <span className="adding">You Have Something to Add?</span> <Add movieAdd={movieAdd} /></div>
       
      <MovieList movieList={movieList.filter(movie=>movie.title.toUpperCase().trim().includes(search.trim().toUpperCase()) && movie.rating>=rate)} />
      
     {/*  <Carousel.Item interval={5000}>
      <Description movieList={movieList} ></Description>
</Carousel.Item> */}

    </div>
  )}


  export default App;