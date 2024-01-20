import React from "react";
import Hero from "./Hero";
import styled from "styled-components";
import NewArrivals from "./NewArrivals";
import PopularItems from "./PopularItems";
import { Helmet } from "react-helmet";
import WatchOfChoice from "./WatchOfChoice";

const Home = () => {
  return (
    <StyledWrapper>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Hero />
      <NewArrivals />
      <PopularItems />
      <WatchOfChoice />
    </StyledWrapper>
  );
};
const StyledWrapper = styled.div``;
export default Home;
