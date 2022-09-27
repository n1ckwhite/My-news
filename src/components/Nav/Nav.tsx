import { FC } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../service/types";
import stylesNav from './Nav.module.css';
export const Nav: FC<{}> = () => {
    const state = useAppSelector(state => state.language.language)
    return (
        <nav className={stylesNav.nav}>
            <Link className={stylesNav.link} to="/">{state === 'ru' ? 'Главная': 'Main'}</Link>
            <Link className={stylesNav.link} to="/business">{state === 'ru' ? 'Бизнес': 'Bussiness'}</Link>
            <Link className={stylesNav.link} to="/science">{state === 'ru' ? 'Наука': 'Science'}</Link>
            <Link className={stylesNav.link} to="/technology">{state === 'ru' ? 'Технологии': 'Technology'}</Link>
            <Link className={stylesNav.link} to="/sports">{state === 'ru' ? 'Спорт': 'Sprots'}</Link>
            <Link className={stylesNav.link} to="/health">{state === 'ru' ? 'Здоровье': 'Health'}</Link>
        </nav>
    )
}