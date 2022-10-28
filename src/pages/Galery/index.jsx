import "./index.scss";

import Images from "../../api/Images";
import Thumb from "../../components/Thumb";
import Modal from "../../components/Modal";
import SubTitle from "../../components/SubTitle";

function Galery() {
  return (
    <section id="galery">
      <Modal />
      <SubTitle subtitle="Galeria" />
      <div className="galery_wrap">
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

export default Galery;
