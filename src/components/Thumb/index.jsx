import logo from "../../img/avatar.png";

function Thumb(props) {
  function openModal(event) {
    const { alt } = event.target;
    const { src2 } = event.target.dataset;
    document.querySelector("#modal-title").innerHTML = alt;
    document.querySelector("#modal-img img").src = src2;
    document.querySelector("#modal-wrap").style.display = "flex";
    document.querySelector(
      "#modal-wrap-btn a"
    ).href = `https://wa.me/559374001359?text=Olá, gostei da peça *${alt}*`;
  }

  const { src = logo, alt = "Crochê Moderno", src2 = logo } = props;

  return (
    <div className="thumb">
      <img
        className="img_thumb"
        src={src}
        alt={alt}
        data-src2={src2}
        onClick={openModal}
      />
    </div>
  );
}

export default Thumb;
