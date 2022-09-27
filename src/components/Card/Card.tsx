import { FC } from "react";
import { ICard } from "../../service/types";
import stylesCard from "./Card.module.css";
interface IProps {
  card: ICard;
}
export const Card: FC<IProps> = ({ card }) => {
  return (
    <>
      <a
        className={stylesCard.link}
        href={card.url}
        target="_blank"
        rel="noreferrer"
      >
        <img
          className={stylesCard.img}
          src={
            card.urlToImage === null
              ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMcX6h8SqNy2UK1wV1oW_GKd2UK3Kv1Ye6krvZCwB3AGnA4KA9MwemXfGHjY33xhuMPtU&usqp=CAU"
              : card.urlToImage
          }
          alt={card.title}
        />
        <h3 className={stylesCard.title}>{card.title}</h3>
        <p className={stylesCard.description}>{card.description}</p>
        <p className={stylesCard.data}>{card.publishedAt}</p>
      </a>
    </>
  );
};
