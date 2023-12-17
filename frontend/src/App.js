import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Browse from "./pages/browse/Browse";
import Search from "./pages/search/Search";
import SearchYear from "./pages/search/SearchYear";
import SearchType from "./pages/search/SearchType";
import SearchGenre from "./pages/search/SearchGenre";
import SearchLanguage from "./pages/search/SearchLanguage";
import SearchKey from "./pages/search/SearchKey";
import OpenVideo from "./pages/browse/MovieDetail/MovieDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Browse />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search/:keyId" element={<SearchKey />} />
        <Route path="/search/type" element={<SearchType />} />
        <Route path="/search/year" element={<SearchYear />} />
        <Route path="/search/language" element={<SearchLanguage />} />
        <Route path="/search/genre" element={<SearchGenre />} />
      </Routes>
      <OpenVideo />
    </BrowserRouter>
  );
}

export default App;
