import { FC, useEffect } from "react";
import { Cards } from "../../components/Cards/Cards";
import { Container } from "../../components/Container/Container";
import { getNews } from "../../service/action/news";
import { useAppDispatch, useAppSelector } from "../../service/types";

export const MainPage: FC<{}> = () => {
  const state = useAppSelector((state) => state.news.news);
  const language = useAppSelector((state) => state.language.language);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getNews("ru", "general"));
  }, [dispatch]);
  return (
    <Container title={language === "ru" ? "Мир" : "Main"}>
        <Cards list={state[0]} />
    </Container>
  );
};
