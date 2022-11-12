import "./index.scss";

import Images from "../../api/Images";
import Thumb from "../../components/Thumb";
import Modal from "../../components/Modal";
import SubTitle from "../../components/SubTitle";

function Catalog() {
  return (
    <section id="catalog">
      <Modal />
      <SubTitle subtitle="Catálogo" />
      <div className="catalog_wrap">
        {Images.map((image, index) => (
          <Thumb
            key={index}
            src={image.src}
            src2={image.src2}
            alt={image.alt}
          />
        ))}
      </div>
    </section>
  );
}

export default Catalog;
