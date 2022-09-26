import { FC, useEffect } from "react"
import { Cards } from "../../components/Cards/Cards";
import { Container } from "../../components/Container/Container";
import { getNews } from "../../service/action/news";
import { useAppDispatch, useAppSelector } from "../../service/types";

export const MainPage: FC<{}> = () => {
    const state = useAppSelector((state) => state.news.news)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getNews('ru','general'))
    },[dispatch])
    return (
        <Container title="Мир">
            <Cards list={state[0]}/>
        </Container>
    )
}