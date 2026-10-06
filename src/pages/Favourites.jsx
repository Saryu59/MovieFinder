import "../css/Favourites.css"
import{useMovieContext} from"../contexts/MovieContext"
import MovieCard from "../components/MovieCard"
function Favourites(){
    const{favourites}=useMovieContext();
    if(favourites.length>0)
    {
        return( <div className="favourites">
        <div className="movies-grid">
        {favourites.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
      </div>
        );
    }
    return <div className="favourites-empty">
<h2> No favourite movies yet..</h2>
    </div>
}
export default Favourites