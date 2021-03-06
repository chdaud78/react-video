import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import style from "../css/movie-details.module.css";
import Modal from "../components/Modal";

function Detail() {
    const {id} = useParams();

    const [movie, setMovie] = useState({});
    const [modalOpen, setModalOpen] = useState(false);

    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json.data.movie);
    };

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };

    useEffect(() => {
        getMovie().then();
    }, []);

    return (
        <div className={style["movie-detail"]}>
            <img src={movie.large_cover_image} alt={movie.title}/>
            <h1>{movie.title}</h1>
            <div className={style["rating-wrap"]}>
                <span className={style.rating}>{movie.rating} star</span>
                <span className={style.runtime}>{movie.runtime} minutes</span>
            </div>
            <ul className={style.genre}>
                {movie.genres ? movie.genres.map((genre, idx) =>
                    <li key={idx}>{genre}</li>
                ) : null}
            </ul>
            <p>{movie.description_full}</p>

            <button onClick={openModal}>더보기</button>

            <Modal open={modalOpen} close={closeModal}/>
        </div>
    )
}

export default Detail;