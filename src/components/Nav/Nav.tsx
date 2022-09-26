import { FC } from "react";
import { Link } from "react-router-dom";

export const Nav: FC<{}> = () => {
    return (
        <nav>
            <Link to="/">Главная</Link>
            <Link to="/business">Бизнес</Link>
            <Link to="/science">Наука</Link>
            <Link to="/technology">Технологии</Link>
            <Link to="/sports">Спорт</Link>
            <Link to="/health">Здоровье</Link>
        </nav>
    )
}