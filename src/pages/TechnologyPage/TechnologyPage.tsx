import { FC, useEffect } from "react";
import { Cards } from "../../components/Cards/Cards";
import { Container } from "../../components/Container/Container";
import { getNews } from "../../service/action/news";
import { useAppDispatch, useAppSelector } from "../../service/types";
export const TechnologePage: FC<{}> = () => {
    const state = useAppSelector((state) => state.news.news)
    const dispatch = useAppDispatch()
    const ru = 'ru'
    useEffect(() => {
      dispatch(getNews(ru,'technology'))
    },[dispatch])
    return (
        <Container title="Технологии">
        <Cards list={state[0]}/>
      </Container>
    )
}