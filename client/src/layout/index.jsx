import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Add from "../pages/Add";
import Wishlist from "../pages/Wishlist";
import Basket from "../pages/Basket";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <StyledWrapper>
      <Header />
      <StyledContent>
        <Routes>
          <Route path="*" element={<p>Not Found</p>} />
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/add" element={<Add />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </StyledContent>
      <Footer />
      <Toaster position="top-right" reverseOrder={false} />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div``;
const StyledContent = styled.div`
  min-height: 100vh;
`;

export default Layout;
