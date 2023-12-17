import React from "react";
import "./content.css";
import useDetail from "../../../hooks/use-detail";
//
const OriginalList = (props) => {
  const { openVideo, checkId } = useDetail();
  const data = {
    id: props.id,
    img: props.img,
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
          className="imgOriginal"
          onClick={showOff}
          key={props.id}
          src={props.img}
          alt="img"
        ></img>
      )}
    </React.Fragment>
  );
};
export default OriginalList;
