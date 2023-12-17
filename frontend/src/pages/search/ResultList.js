import React from "react";
import "./Search.css";
import useDetail from "../../hooks/use-detail";
import MovieDetail from "../browse/MovieDetail/MovieDetail";
//
const ResultList = (props) => {
  const { openVideo, checkId } = useDetail();
  const data = {
    id: props.id,
    img: props.imgW,
    title: props.title,
    name: props.name,
    Overview: props.Overview,
    vote: props.vote,
    releaseDate: props.releaseDate,
  };
  const showOff = () => {
    openVideo(data);
    checkId(props.id);
  };
  return (
    <React.Fragment>
      {props.img && (
        <img
          onClick={showOff}
          alt="ImgMovie"
          className="imgMovie searchImg"
          src={props.img}
          id={props.id}
          releaseDate={props.releaseDate}
        ></img>
      )}
    </React.Fragment>
  );
};
export default ResultList;
