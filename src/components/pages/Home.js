import React, { Fragment } from "react";
import Search from "../users/Search";
import Users from "../users/Users";
import HomeHero from "../layout/HomeHero";

const Home = () => {
  return (
    <Fragment>
      {/* <HomeHero /> */}
      <Search />
      <Users />
    </Fragment>
  );
};

export default Home;
