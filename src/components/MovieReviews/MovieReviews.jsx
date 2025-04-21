import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../services/moviesApi";
import css from "./MovieReviews.module.css";

function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId).then((data) => setReviews(data.results));
  }, [movieId]);

  return (
    <ul className={css.list}>
      {reviews.length > 0 ? (
        reviews.map(({ id, author, content }) => (
          <li key={id}>
            <p>
              <strong>{author}:</strong> {content}
            </p>
          </li>
        ))
      ) : (
        <li>No reviews available.</li>
      )}
    </ul>
  );
}

export default MovieReviews;
