import './App.css'
import Header from './components/Header'
import Search from './components/Search'
import Movie from './components/Movie'
import {useState} from "react"

function App() {

  const [movies, setMovies] = useState([])

  const moviesListLength = movies.length

  function displayMovies(){
    return movies.filter(movie => movie.poster_path && movie.overview).map((movie) =>(
        <Movie
          key = {movie.id}
          id = {movie.id}
          movieImgUrl = {movie.poster_path}
          title = {movie.title}
          releaseDate = {movie.release_date}
          rating = {movie.vote_average}
          synopsis = {movie.overview}
        />
    ))
  
  }

  

  async function getSearch(formData){
    let searchInput = formData.get("search")
    
    const getMovieUrl =`https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US&query=${searchInput}&page=1&include_adult=false`

    try{
      const response = await fetch(getMovieUrl)
      const data = await response.json()

      setMovies(data.results)
    }
    catch(err){
      console.error(err)
    }

  }

  


  return (
    <>
      <Header/>
      <main>
        <Search
          getSearch = {getSearch}
        />
        {moviesListLength > 0 ?  displayMovies(): null}
      </main>
    </>
  )
}

export default App
