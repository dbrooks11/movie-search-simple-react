

export default function Movie(props){
    return(
        <section className="movie-container" >
            <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${props.movieImgUrl}`} alt={`${props.title} poster`}></img>
            <div className="movie-info-container">
                <h2>{props.title}</h2>
                <span>Release Date: {props.releaseDate}</span>
                <span>Rating: {props.rating}/10</span>
                <p>{props.synopsis}</p>
            </div>
        </section>
    )
}