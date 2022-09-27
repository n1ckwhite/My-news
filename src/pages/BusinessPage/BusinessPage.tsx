import { FC, useEffect } from "react";
import { Cards } from "../../components/Cards/Cards";
import { Container } from "../../components/Container/Container";
import { getNews } from "../../service/action/news";
import { useAppDispatch, useAppSelector } from "../../service/types";
export const BusinessPage: FC<{}> = () => {
  const state = useAppSelector((state) => state.news.news)
  const dispatch = useAppDispatch()
  const ru = 'ru'
  useEffect(() => {
    dispatch(getNews(ru,'business'))
  },[dispatch])
  return (
    <Container title="Бизнес">
      <Cards list={state[0]}/>
    </Container>
  );
};
