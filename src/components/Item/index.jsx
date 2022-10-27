// import React from "react";

export default function Item(props) {
  return (
    <a href={props.link} target={props.target} rel="noreferrer">
      <li className="link_iten">
        <img className="icon" src="" alt="iten icon" />
        <span className="link_title">{props.title}</span>
      </li>
    </a>
  );
}
