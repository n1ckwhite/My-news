import stylesAppHeader from './AppHeader.module.css';
import { FC, useState } from 'react';


export const AppHeader: FC<{}> = () => {
    const [classes,setClasses] = useState('ru')
    return (
        <>
        <div className={stylesAppHeader.block}>
        <h1 className={stylesAppHeader.title}>News</h1>
        <menu className={stylesAppHeader.menu}>
        <button className={`${stylesAppHeader.button} ${classes === 'ru' ? stylesAppHeader.activeButton : ''}`} onClick={() => setClasses('ru')}>Ru</button>
        <button className={`${stylesAppHeader.button} ${classes === 'en' ? stylesAppHeader.activeButton : ''}`} onClick={() => setClasses('en')}>En</button>
        </menu>
        </div>
        <nav className={stylesAppHeader.menu}>
            <button className={stylesAppHeader.category}>Бизнес</button>
            <button className={stylesAppHeader.category}>Наука</button>
            <button className={stylesAppHeader.category}>Технологии</button>
            <button className={stylesAppHeader.category}>Спорт</button>
            <button className={stylesAppHeader.category}>Здоровье</button>
        </nav>
        </>
    )
}