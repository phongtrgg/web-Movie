import React from "react";
import NavBar from "../browse/NavBar/NavBar";
import SearchForm from "./SearchForm";
import Footer from "../browse/footer/footer";

//
const Search = () => {
  return (
    <div className="app">
      <NavBar search={true} />
      <SearchForm default={true} />
      <Footer />
    </div>
  );
};

export default Search;
