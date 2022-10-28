import logo from "../../img/avatar.png";

type ThumbType = {
  src: string;
  alt: string;
  src2: string;
};

type EventType = {
  target: any;
};

function Thumb(props: ThumbType) {
  function openModal(event: EventType) {
    const { alt } = event.target;
    const { src2 } = event.target.dataset;
    const modalTitle = document.querySelector("#modal-title") as HTMLElement;
    modalTitle.innerHTML = alt;
    const modalImg = document.querySelector(
      "#modal-img img"
    ) as HTMLImageElement;
    modalImg.src = src2;
    const modalWrap = document.querySelector("#modal-wrap") as HTMLElement;
    modalWrap.style.display = "flex";
    const modalWrapBtn = document.querySelector(
      "#modal-wrap-btn a"
    ) as HTMLLinkElement;
    modalWrapBtn.href = `https://wa.me/559374001359?text=Olá, gostei da peça *${alt}*`;
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
