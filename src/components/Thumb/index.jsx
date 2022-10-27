// import React from "react";
import img0 from "../../img/avatar.png";

function Thumb(props) {
  function openModal(event) {
    const { alt, src } = event.target;
    document.querySelector("#modal-title").innerHTML = alt;
    document.querySelector("#modal-img img").src = src;
    document.querySelector("#modal-wrap").style.display = "flex";
    document.querySelector("#modal-wrap-btn a").href = `https://wa.me/559374001359?text=Olá, gostei da peça *${alt}*`;
  }

  const { src, alt = "Crochê Moderno", title = "😍" } = props;

  return (
    <div className="thumb">
      <img
        className="img_thumb"
        src={src || img0}
        alt={alt}
        data-title={title}
        onClick={openModal}
      />
    </div>
  );
}

export default Thumb;
