import React from "react";
import NavBar from "../browse/NavBar/NavBar";
import SearchForm from "./SearchForm";
import Footer from "../browse/footer/footer";
//
const SearchGenre = () => {
  return (
    <div className="app">
      <NavBar search={true} />
      <SearchForm genre={true} />
      <Footer />
    </div>
  );
};

export default SearchGenre;
