import PropTypes from "prop-types";
import {Link} from "react-router-dom"
import style from "../css/movie.module.css";

function Movie({id, coverImg, title, summary, genres}) {
    return (
        <li className={style['movie-card']}>
            <img src={coverImg} alt={title}/>
            <div className={style['movie-description']}>
                <h2>
                    <Link to={`movie/${id}`}>{title}</Link>
                </h2>
                <ul>
                    {genres ? genres.map((genre, idx) =>
                        <li key={idx}>
                            <span>{genre}</span>
                        </li>
                    ) : null}
                </ul>
                <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
            </div>
        </li>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
}

export default Movie;