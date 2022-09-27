import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BusinessPage } from "../../pages/BusinessPage/BusinessPage";
import { HealthPage } from "../../pages/HealthPage/HealthPage";
import { MainPage } from "../../pages/MainPage/MainPage";
import { SciencePage } from "../../pages/SciencePage/SciencePage";
import { SportsPage } from "../../pages/SportsPage/SportsPage";
import { TechnologePage } from "../../pages/TechnologyPage/TechnologyPage";
import { AppHeader } from "../AppHeader/AppHeader";
import stylesApp from "./App.module.css";

export const App = () => {
  return (
    <div className={stylesApp.App}>
      <BrowserRouter>
        <AppHeader />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/business" element={<BusinessPage />} />
          <Route path="/science" element={<SciencePage />} />
          <Route path="/health" element={<HealthPage />} />
          <Route path="/sports" element={<SportsPage />} />
          <Route path="/technology" element={<TechnologePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
