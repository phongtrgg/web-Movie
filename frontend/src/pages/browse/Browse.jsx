import React from "react";
import NavBar from "./NavBar/NavBar";
import Banner from "./banner/Banner";
import Original from "./content/Original";
import Trending from "./content/Trending";
import TopRate from "./content/TopRate";
import Comedy from "./content/Comedy";
import Horror from "./content/Horror";
import Romance from "./content/Romance";
import Document from "./content/Document";
import Footer from "./footer/footer";
import Adventure from "./content/Adventure";
import Animation from "./content/Animation";
import Drama from "./content/Drama";
import Family from "./content/Family";
import Mystery from "./content/Mystery";
import ScienceFiction from "./content/ScienceFiction";
import War from "./content/War";
import Music from "./content/Music";
import Action from "./content/Action";
//
function Browse() {
  return (
    <div className="app">
      <NavBar />
      <Banner />
      <Original />
      <Trending />
      <TopRate />
      <Action />
      <Family />
      <Comedy />
      <Mystery />
      <Music />
      <ScienceFiction />
      <War />
      <Animation />
      <Horror />
      <Romance />
      <Adventure />
      <Drama />
      <Document />
      <Footer />
    </div>
  );
}

export default Browse;
