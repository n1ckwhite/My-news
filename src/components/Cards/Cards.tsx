import { FC } from "react";
import { IList } from "../../service/types";
import { Card } from "../Card/Card";
import stylesCards from "./Cards.module.css";
export const Cards: FC<IList> = ({ list }) => {
  return (
    <ul className={stylesCards.list}>
      {list &&
        list.articles.map((i) => {
          return (
            <li key={i.publishedAt} className={stylesCards.item}>
              <Card card={i} />
            </li>
          );
        })}
    </ul>
  );
};
