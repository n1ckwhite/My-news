import { FC, useEffect } from "react";
import { Container } from "../../components/Container/Container";
import { getNews } from "../../service/action/news";
import { useAppDispatch } from "../../service/types";
export const BusinessPage: FC<{}> = () => {
  const dispatch = useAppDispatch()
  const ru = 'ru'
  useEffect(() => {
    dispatch(getNews(ru,'business'))
  })
  return (
    <Container title="Бизнес">
      <ul>
        <li></li>
      </ul>
    </Container>
  );
};
