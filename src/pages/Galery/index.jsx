import "./index.scss";

import { Link } from "react-router-dom";
import Images from "../../api/Images";
import Thumb from "../../components/Thumb";
import Modal from "../../components/Modal";

function Galery() {
  return (
    <section id="galery">
      <Modal />

      <label htmlFor="link" id="link_wrap">
        <Link to="/" id="link">
          Início
        </Link>
      </label>

      <div className="galery_wrap">
        {Images.map((image, index) => (
          <Thumb key={index} src={image.src} alt={image.alt} />
        ))}
      </div>
    </section>
  );
}

export default Galery;
