import React from "react";
import NavBar from "../browse/NavBar/NavBar";
import SearchForm from "./SearchForm";
import Footer from "../browse/footer/footer";
//
const SearchLanguage = () => {
  return (
    <div className="app">
      <NavBar search={true} />
      <SearchForm lang={true} />
      <Footer />
    </div>
  );
};

export default SearchLanguage;
