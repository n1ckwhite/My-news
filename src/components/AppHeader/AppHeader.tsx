import stylesAppHeader from "./AppHeader.module.css";
import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../service/types";
import { SET_LANGUAGE_EN, SET_LANGUAGE_RU } from "../../service/action";
export const AppHeader: FC<{}> = () => {
  const dispatch = useAppDispatch();
  const [classes, setClasses] = useState("ru");
  const setLanguageRu = () => {
    setClasses("ru");
    dispatch({
      type: SET_LANGUAGE_RU,
    });
  };

  const setLanguageEn = () => {
    setClasses("en");
    dispatch({
      type: SET_LANGUAGE_EN,
    });
  };
  return (
    <div className={stylesAppHeader.block}>
      <h1 className={stylesAppHeader.title}>
        <Link to="/">News</Link>
      </h1>
      <menu className={stylesAppHeader.menu}>
        <button
          className={`${stylesAppHeader.button} ${
            classes === "ru" ? stylesAppHeader.activeButton : ""
          }`}
          onClick={setLanguageRu}
        >
          Ru
        </button>
        <button
          className={`${stylesAppHeader.button} ${
            classes === "en" ? stylesAppHeader.activeButton : ""
          }`}
          onClick={setLanguageEn}
        >
          En
        </button>
      </menu>
    </div>
  );
};
