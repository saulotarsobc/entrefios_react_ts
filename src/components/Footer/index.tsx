import "./index.scss";
import { Galery, Home } from "../Icons";
import { Link } from "react-router-dom";

function index() {
  return (
    <footer id="footer">
      <div id="wrap">
        <div className="link-wrap">
          <Link to="/" className="link">
            <Home />
          </Link>
        </div>

        <div className="link-wrap">
          <Link to="/galery" className="link">
            <Galery />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default index;
