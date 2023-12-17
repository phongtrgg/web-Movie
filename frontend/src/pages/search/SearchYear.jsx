import React from "react";
import NavBar from "../browse/NavBar/NavBar";
import SearchForm from "./SearchForm";
import Footer from "../browse/footer/footer";
//
const SearchYaer = () => {
  return (
    <div className="app">
      <NavBar search={true} />
      <SearchForm year={true} />
      <Footer />
    </div>
  );
};

export default SearchYaer;
