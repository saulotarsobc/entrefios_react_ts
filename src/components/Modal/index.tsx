// import React from 'react';
import "./index.scss";
import img0 from "../../img/avatar.png";

import { Close } from "../Icons";
import { Whatsapp } from "../Icons/index";

function index() {
  function closeModal() {
    const modalWrap = document.querySelector("#modal-wrap") as HTMLDivElement;
    modalWrap.style.display = "none";
  }

  return (
    <div id="modal-wrap">
      <div id="modal">
        <div id="close-modal" onClick={closeModal}>
          <Close />
        </div>
        <div id="modal-title">Entre Fios - STM</div>
        <div id="modal-img">
          <img src={img0} alt="Logo Oficial da Ente Fios" />
        </div>
        <div id="modal-wrap-btn">
          <a href="/" rel="noreferrer" target="_blank">
            <Whatsapp />
            Chamar no Zap
          </a>
        </div>
      </div>
    </div>
  );
}

export default index;
