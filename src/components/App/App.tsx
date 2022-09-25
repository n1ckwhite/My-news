import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { MainPage } from "../../pages/MainPage/MainPage";
import { AppHeader } from "../AppHeader/AppHeader";
import stylesApp from "./App.module.css";

export const App = () => {
  return (
    <div className={stylesApp.App}>
      <BrowserRouter>
      <AppHeader/>
        <Routes>
        <Route path="/" element={<MainPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
