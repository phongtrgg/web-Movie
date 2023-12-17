import "./NavBar.css";
import React, { useState, useEffect } from "react";
import IconSearch from "./IconSearch";
import { NavLink } from "react-router-dom";
//
const NavBar = (props) => {
  const clickHome = () => {
    window.location.replace("/");
  };
  /////////////////////////////////////////////////////////////////
  //code tham khảo từ link mentor Nguyễn Văn Duy gửi///////////////
  const [offset, setOffset] = useState(0); /////////////////////////
  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset); //////////
    // clean up code///////////////////////////////////////////////
    window.removeEventListener("scroll", onScroll); ////////////////
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll); ///
  }, []); //////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  //https://stackoverflow.com/questions/74482219/how-to-make-a-scroll-event-in-react
  //kéo xuống mục số 1
  const classScroll = offset > 100 ? "navBlack" : "";
  const classNav = "nav " + classScroll;
  //
  const search = props.search;
  return (
    <React.Fragment>
      <div className={classNav}>
        <button onClick={clickHome} className="titleNav">
          Movie App
        </button>
        <IconSearch />
      </div>
      {search && (
        <div className="navSearch">
          <NavLink
            to="/search/key"
            className={({ isActive }) => (isActive ? "active" : undefined)}
            end
          >
            Search Key
          </NavLink>

          <NavLink
            to="/search/year"
            className={({ isActive }) => (isActive ? "active" : undefined)}
            end
          >
            Search Year
          </NavLink>
          <NavLink
            to="/search/type"
            className={({ isActive }) => (isActive ? "active" : undefined)}
            end
          >
            Search Media Type
          </NavLink>
          <NavLink
            to="/search/language"
            className={({ isActive }) => (isActive ? "active" : undefined)}
            end
          >
            Search Language
          </NavLink>
          <NavLink
            to="/search/genre"
            className={({ isActive }) => (isActive ? "active" : undefined)}
            end
          >
            Search Genre
          </NavLink>
        </div>
      )}
    </React.Fragment>
  );
};
export default NavBar;
