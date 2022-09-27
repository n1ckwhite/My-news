import { FC, useEffect } from "react";
import { Cards } from "../../components/Cards/Cards";
import { Container } from "../../components/Container/Container";
import { getNews } from "../../service/action/news";
import { useAppDispatch, useAppSelector } from "../../service/types";
export const SportsPage: FC<{}> = () => {
    const state = useAppSelector((state) => state.news.news)
    const dispatch = useAppDispatch()
    const ru = 'ru'
    useEffect(() => {
      dispatch(getNews(ru,'sports'))
    },[dispatch])
    return (
        <Container title="Спорт">
        <Cards list={state[0]}/>
      </Container>
    )
}