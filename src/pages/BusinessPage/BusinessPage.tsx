import { FC, useEffect } from "react";
import { Cards } from "../../components/Cards/Cards";
import { Container } from "../../components/Container/Container";
import { getNews } from "../../service/action/news";
import { useAppDispatch, useAppSelector } from "../../service/types";
export const BusinessPage: FC<{}> = () => {
  const state = useAppSelector((state) => state.news.news);
  const language = useAppSelector((state) => state.language.language);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getNews("ru", "business"));
  }, [dispatch]);
  return (
    <Container title={language === "ru" ? "Бизнес" : "Business"}>
      {state[0].articles.length !== 0 ? (
        <Cards list={state[0]} />
      ) : (
        <h2 style={{ textAlign: "center", marginTop: 40 }}>Loading...</h2>
      )}
    </Container>
  );
};
