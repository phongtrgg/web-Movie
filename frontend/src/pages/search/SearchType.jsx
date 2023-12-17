import React from "react";
import NavBar from "../browse/NavBar/NavBar";
import SearchForm from "./SearchForm";
import Footer from "../browse/footer/footer";
//
const SearchType = () => {
  return (
    <div className="app">
      <NavBar search={true} />
      <SearchForm type={true} />
      <Footer />
    </div>
  );
};

export default SearchType;
