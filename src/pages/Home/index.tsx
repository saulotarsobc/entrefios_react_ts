// import React from 'react';
import "./index.scss";
import imgAvatar from "../../img/avatar.png";
import Item from "../../components/Item";
import Title from "../../components/Title";
import { Link } from "react-router-dom";
import definitions from "../../api/definitions.json";

export default function Home() {
  return (
    <section id="home">
      <main>
        <div id="card">
          <img id="avatar" src={imgAvatar} alt="logo" />
          <Title title="Entre Fios" />
          <div id="links">
            <ul id="link_list">
              {definitions.list.map((item, index) => (
                <Item
                  key={index}
                  title={item.title}
                  link={item.link}
                  target={item.target}
                />
              ))}
            </ul>
          </div>
          <Link to="/galery" id="galery_btn">
            Galeria
          </Link>
        </div>
      </main>
    </section>
  );
}
