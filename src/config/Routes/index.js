import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home, Login, MainApp, Register } from '../../pages';
import CreateBlog from "../../pages/CreateBlog";
import DetailBlog from "../../pages/DetailBlog";

const Routing = () => {
  return (
    <Router>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<MainApp />}>
                <Route index element={<Home />} />
                <Route path="/createblog/:id?" element={<CreateBlog />} />
                <Route path="/detailblog/:id" element={<DetailBlog />} />
            </Route>
        </Routes>
    </Router>
  )
};

export default Routing;
