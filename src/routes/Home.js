import {useEffect, useState} from "react";
import Movie from "../components/Movie.js";
import style from "../css/movie.module.css";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)
        ).json();
        setMovies(json.data.movies);
        setLoading(false);
    }

    useEffect(() => {
        /*fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)
            .then((res) => res.json())
            .then((json) => {
                setMovies(json.data.movies);
                setLoading(false);
            });*/
        getMovies().then();
    }, [])

    return (
        <div className={style.container}>
            {loading ? <h1>Loading...</h1> :
                <ul className={style['movie-list']}>
                    {movies.map((movie) => (
                        <Movie
                            key={movie.id}
                            id={movie.id}
                            coverImg={movie.medium_cover_image}
                            title={movie.title}
                            summary={movie.summary}
                            genres={movie.genres}
                        />
                    ))}
                </ul>
            }
        </div>
    );
}

export default Home;