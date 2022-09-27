import { FC, useEffect } from "react";
import { Cards } from "../../components/Cards/Cards";
import { Container } from "../../components/Container/Container";
import { getNews } from "../../service/action/news";
import { useAppDispatch, useAppSelector } from "../../service/types";

export const SciencePage: FC<{}> = () => {
  const language = useAppSelector((state) => state.language.language);
  const state = useAppSelector((state) => state.news.news);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getNews("ru", "science"));
  }, [dispatch]);
  return (
    <Container title={language === "ru" ? "Наука" : "Science"}>
      {state[0].articles.length !== 0 ? (
        <Cards list={state[0]} />
      ) : (
        <h2 style={{ textAlign: "center", marginTop: 40 }}>Loading...</h2>
      )}
    </Container>
  );
};
