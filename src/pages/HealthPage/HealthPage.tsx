import { FC, useEffect } from "react";
import { Cards } from "../../components/Cards/Cards";
import { Container } from "../../components/Container/Container";
import { getNews } from "../../service/action/news";
import { useAppDispatch, useAppSelector } from "../../service/types";
import stylesHealth from "./HealthPage.module.css";
export const HealthPage: FC<{}> = () => {
  const state = useAppSelector((state) => state.news.news);
  const dispatch = useAppDispatch();
  const ru = "ru";
  useEffect(() => {
    dispatch(getNews(ru, "health"));
  }, [dispatch]);
  return (
    <Container title="Здоровье">
        <Cards list={state[0]} />
    </Container>
  );
};
