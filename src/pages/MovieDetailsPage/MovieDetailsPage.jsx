import { useEffect, useState, Suspense } from "react";
import {
  useParams,
  Link,
  Outlet,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { getMovieDetails } from "../../services/moviesApi";
import css from "./MovieDetailsPage.module.css";

function MovieDetailsPage() {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) return <div>Loading...</div>;

  const { title, overview, genres, poster_path } = movie;
  const backLink = location.state?.from || "/movies";

  return (
    <div className={css.container}>
      <button onClick={() => navigate(backLink)}>Go back</button>
      <div className={css.movie}>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          width="300"
        />
        <div>
          <h2>{title}</h2>
          <p>
            <strong>Overview:</strong> {overview}
          </p>
          <p>
            <strong>Genres:</strong> {genres.map((g) => g.name).join(", ")}
          </p>
        </div>
      </div>

      <hr />

      <div>
        <Link to="cast" state={{ from: backLink }}>
          Cast
        </Link>
        <Link to="reviews" state={{ from: backLink }}>
          Reviews
        </Link>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default MovieDetailsPage;
