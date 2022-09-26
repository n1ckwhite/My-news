import { FC } from "react";

export const Cards: FC<any> = ({ list }) => {
  return (
    <ul>
      <ul>
        {list &&
          list.articles.map((i: any) => {
            return (
              <li key={i.publishedAt}>
                <a href={i.url} target="_blank" rel="noreferrer">
                  <img
                    src={
                      i.urlToImage === null
                        ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMcX6h8SqNy2UK1wV1oW_GKd2UK3Kv1Ye6krvZCwB3AGnA4KA9MwemXfGHjY33xhuMPtU&usqp=CAU"
                        : i.urlToImage
                    }
                    alt={i.title}
                  />
                  <h3>{i.title}</h3>
                  <p>{i.description}</p>
                  <p>{i.publishedAt}</p>
                </a>
              </li>
            );
          })}
      </ul>
    </ul>
  );
};
