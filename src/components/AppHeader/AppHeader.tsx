import stylesAppHeader from "./AppHeader.module.css";
import { FC, useState } from "react";
import { Link } from "react-router-dom";
export const AppHeader: FC<{}> = () => {
  const [classes, setClasses] = useState("ru");
  return (
    <div className={stylesAppHeader.block}>
      <h1 className={stylesAppHeader.title}><Link to="/">News</Link></h1>
      <menu className={stylesAppHeader.menu}>
        <button
          className={`${stylesAppHeader.button} ${
            classes === "ru" ? stylesAppHeader.activeButton : ""
          }`}
          onClick={() => setClasses("ru")}
        >
          Ru
        </button>
        <button
          className={`${stylesAppHeader.button} ${
            classes === "en" ? stylesAppHeader.activeButton : ""
          }`}
          onClick={() => setClasses("en")}
        >
          En
        </button>
      </menu>
    </div>
  );
};
