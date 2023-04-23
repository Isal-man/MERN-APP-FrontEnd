import React from "react";
import { Footer, Header } from "../../components";
import './MainApp.scss';
import { Outlet } from "react-router-dom";

const MainApp = () => {
  return (
    <div className="MainApp-Wrapper">
      <div className="Header-Wrapper">
        <Header />
      </div>
      <div className="Content-Wrapper">
        <Outlet />
      </div>
      <div className="Footer-Wrapper">
        <Footer />
      </div>
    </div>
  );
};

export default MainApp;
