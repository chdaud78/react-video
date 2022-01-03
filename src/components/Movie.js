import PropTypes from "prop-types";
import {Link} from "react-router-dom"

function Movie ({id, coverImg, title, summary, genres}) {
    return (
        <div>
            <img src={coverImg} alt={title}/>
            <h2>
                <Link to={`movie/${id}`}>{title}</Link>
            </h2>
            <p>{summary}</p>
            <ul>
                {genres ? genres.map((genre, idx) =>
                    <li key={idx}>{genre}</li>
                ) : null}
            </ul>
        </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
}

export default Movie;