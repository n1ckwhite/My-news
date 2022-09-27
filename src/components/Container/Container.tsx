import { FC } from "react";
import { Nav } from "../Nav/Nav";
import stylesContainer from './Container.module.css';

interface IProps {
    children?: JSX.Element,
    title: string,
}

export const Container: FC<IProps> = ({children,title}) => {
    return (
        <main className={stylesContainer.main}>
            <Nav/>
            <h2 className={stylesContainer.title}>{title}</h2>
            {children}
        </main>
    )
}