import "./index.scss";
import { Catalog, Home } from "../Icons";
import { Link } from "react-router-dom";

function index() {
  return (
    <footer id="footer">
      <div id="wrap">
        <div className="link-wrap">
          <Link to="/" className="link">
            <Home />
          </Link>
          <div className="link-label">Início</div>
        </div>

        <div className="link-wrap">
          <Link to="/catalogo" className="link">
            <Catalog />
          </Link>
          <div className="link-label">Catálogo</div>
        </div>
      </div>
    </footer>
  );
}

export default index;
