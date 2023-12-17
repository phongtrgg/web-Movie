import React, { useEffect, useState } from "react";
import "./MovieDetail.css";
import YouTube from "react-youtube";
import { videoAction } from "../../../store/store";
import { useDispatch, useSelector } from "react-redux";
//
const MovieDetail = () => {
  const video = useSelector((state) => state.video.video);
  const open = useSelector((state) => state.video.show);
  const dispatch = useDispatch();
  const id = video.id;
  const [movie, setMovie] = useState();
  const [couter, setCouter] = useState(0);
  const [err, setErr] = useState("");
  const request = async () => {
    try {
      const response = await fetch(
        `https://test-app-movie-b80655592a55.herokuapp.com/movies/token=8qlOkxz4wq/video=${id}`
      );
      const resData = await response.json();
      setMovie(resData.results[0].videos);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (movie) {
      setMovie("");
    }
    if (video.id) {
      request();
    }
  }, [video]);

  const opts = {
    playerVars: {
      autoplay: 0,
    },
  };
  const prevVideo = () => {
    if (couter > 0) {
      setCouter((prev) => prev - 1);
      setErr("");
    }
    setErr("no have video");
    setTimeout(() => {
      offErr();
    }, 3000);
  };
  const nextVideo = () => {
    if (movie && couter < movie.length - 1) {
      setCouter((prev) => prev + 1);
      setErr("");
    } else {
      setErr("no have video");
      setTimeout(() => {
        offErr();
      }, 3000);
    }
  };
  const offErr = () => {
    setErr("");
  };
  const offVideo = () => {
    dispatch(videoAction.ON_OFF());
    dispatch(videoAction.ON_ADD([]));
  };
  return (
    <React.Fragment>
      {open && (
        <div className="detailAll">
          <div className="flexDetail">
            <h2>
              {video.title}
              {video.name}
            </h2>
            {video.releaseDate && (
              <p>Release Date : {video.releaseDate}</p>
            )}
            {video.firstDate && <p>Release Date : {video.firstDate}</p>}
            {!video.releaseDate && !video.firstDate && (
              <p>Release Date : Cập nhập sau</p>
            )}
            <p>Vote : {video.vote}/10</p>
            <p>{video.Overview} </p>
            {movie && (
              <div className="boxBtnVideo">
                <button onClick={prevVideo} className="btn-detail">
                  prev video
                </button>
                <button onClick={nextVideo} className="btn-detail">
                  next video
                </button>
              </div>
            )}
            {err && <p className="error errDetail">{err}</p>}
            {!movie && <p className="error errDetail">no have video</p>}
          </div>
          {movie && movie.length !== 0 && couter < movie.length && (
            <YouTube
              key={couter}
              videoId={movie[couter].key}
              opts={opts}
              className="youTube"
              type="Trailer"
              site="Youtube"
            />
          )}
          {!movie && video.img && (
            <div className="videoImg">
              <img className="imgDetail" src={video.img} alt="img"></img>
            </div>
          )}
          <button className="btnX" onClick={offVideo}>
            X
          </button>
        </div>
      )}
    </React.Fragment>
  );
};
export default MovieDetail;
