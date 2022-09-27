import { FC } from "react";
import { Link } from "react-router-dom";
import stylesNav from './Nav.module.css';
export const Nav: FC<{}> = () => {
    return (
        <nav className={stylesNav.nav}>
            <Link className={stylesNav.link} to="/">Главная</Link>
            <Link className={stylesNav.link} to="/business">Бизнес</Link>
            <Link className={stylesNav.link} to="/science">Наука</Link>
            <Link className={stylesNav.link} to="/technology">Технологии</Link>
            <Link className={stylesNav.link} to="/sports">Спорт</Link>
            <Link className={stylesNav.link} to="/health">Здоровье</Link>
        </nav>
    )
}