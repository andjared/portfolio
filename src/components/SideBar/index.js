import React from "react";
import { GitHub, Linkedin, Mail, Phone } from "react-feather";
import style from "./SideBar.module.scss";

export default function SideBar() {
  return (
    <>
      <div className={`${style.sidebar} ${style.left}`}>
        <ul className={` ${style.wrapper} ${style.list}`}>
          <li>
            <a
              href={"https://github.com/andjared"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub size={25} />
            </a>
          </li>
          <li>
            <a
              href={"https://www.linkedin.com/in/andja-zelenbaba-464673134/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={25} />
            </a>
          </li>
          <li>
            <a href={"mailto:zelenbaba.andja@gmail.com"}>
              <Mail size={25} />
            </a>
          </li>
          <li>
            <a href={"tel:+381652040432"}>
              <Phone size={25} />
            </a>
          </li>
        </ul>
      </div>
      <div className={`${style.sidebar} ${style.right}`}>
        <div className={style.wrapper}>
          <a href="mailto:zelenbaba.andja@gmail.com">
            zelenbaba.andja@gmail.com
          </a>
        </div>
      </div>
    </>
  );
}
