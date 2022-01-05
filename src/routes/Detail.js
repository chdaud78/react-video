import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

function Detail() {
    const {id} = useParams();

    const [movie, setMovie] = useState({});

    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json.data.movie);
    };

    console.log(movie);

    useEffect(() => {
        getMovie().then();
    }, []);

    return (
        <div>
            <img src={movie.large_cover_image} alt={movie.title}/>
            <h1>{movie.title}</h1>
            <div>
                <span>{movie.rating}</span>
                <span>{movie.runtime} minutes</span>
            </div>
            <ul>
                {movie.genres ? movie.genres.map((genre, idx) =>
                    <li key={idx}>{genre}</li>
                ) : null}
            </ul>
            <p>{movie.description_full}</p>
        </div>
    )
}

export default Detail;