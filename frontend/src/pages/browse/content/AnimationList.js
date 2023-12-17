import "./content.css";
import useDetail from "../../../hooks/use-detail";

import React from "react";
const AnimationList = (props) => {
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
      <div className="divBox">
        {props.img && (
          <img
            onClick={showOff}
            alt="img"
            className="imgMovie"
            src={props.img}
            key={props.id}
          ></img>
        )}
      </div>
    </React.Fragment>
  );
};
export default AnimationList;
