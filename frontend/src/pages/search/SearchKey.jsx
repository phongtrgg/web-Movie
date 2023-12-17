import React from "react";
import NavBar from "../browse/NavBar/NavBar";
import SearchForm from "./SearchForm";
import Footer from "../browse/footer/footer";

//
const SearchKey = () => {
  return (
    <div className="app">
      <NavBar search={true} />
      <SearchForm default={true} />
      <Footer />
    </div>
  );
};

export default SearchKey;
