import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

function NotFoundPage() {
  return (
    <div className={css.container}>
      <h2>Page not found</h2>
      <Link to="/">Go to Home</Link>
    </div>
  );
}

export default NotFoundPage;
