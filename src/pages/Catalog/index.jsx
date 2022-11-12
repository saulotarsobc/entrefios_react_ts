import "./index.scss";

import Images from "../../api/Images";
import Thumb from "../../components/Thumb";
import Modal from "../../components/Modal";
import SubTitle from "../../components/SubTitle";
import Bolsas from "../../api/Bolsas";

function Catalog() {
  return (
    <section id="catalog">
      <Modal />

      <SubTitle subtitle="Cestinhos" />
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

      <SubTitle subtitle="Bolsas" />
      <div className="catalog_wrap">
        {Bolsas.map((image, index) => (
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
