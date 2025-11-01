

export default function Search(props){
    return(
        <form className="search-movie-form" action={props.getSearch}>
            <label>MOVIE NAME</label>
            <input type="text" id="search" name ="search" placeholder="e.g Jurassic Park"></input>
            <button>Search</button>
        </form>
    )
}