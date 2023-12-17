import "./Banner.css";
import React, { useState, useEffect } from "react";
import useDetail from "../../../hooks/use-detail";
import { videoAction } from "../../../store/store";
import { useDispatch, useSelector } from "react-redux";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  const { openVideo, checkId } = useDetail();
  const dispatch = useDispatch();
  const show = useSelector((state) => state.video.show);

  const request = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/tv?api_key=c6e0a2eb0fab828f0d9b0347454ed094&with_network=123`
      );
      const resData = await response.json();
      const rd =
        resData.results[
          Math.floor(Math.random() * resData.results.length - 1)
        ];
      setMovie(rd);
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    request();
  }, []);

  const openDetail = () => {
    openVideo(movie);
    checkId(movie.id);
  };
  const close = () => {
    if (show) {
      dispatch(videoAction.ON_OFF());
      dispatch(videoAction.ON_ADD([]));
    }
  };
  return (
    <React.Fragment>
      {movie && movie.backdrop_path && (
        <div onClick={close} className="banner">
          <img
            className="imgBanner"
            src={`http://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt="Img-Banner"
          ></img>
          <div className="contenBanner">
            <div className="titleBanner">
              {movie.title}
              {movie.name}
            </div>
            <button onClick={openDetail} className="btnBanner btnBanner-1">
              Play
            </button>
            <button className="btnBanner btnBanner-2" href="#top">
              My List
            </button>
            {movie.overview && <p>{movie.overview}</p>}
            {!movie.overview && (
              <p>Tạm thời chưa có nội dung. Nội dung sẽ cập nhật sau</p>
            )}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};
export default Banner;
