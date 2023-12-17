import React, { useEffect } from "react";
import Card from "../../../Card/Card";
import AdventureList from "./AdventureList";
import useRequest from "../../../hooks/useRequest";
import BtnPage from "../../../Card/btnPage";
//
const XuHuong = () => {
  const { request, movie, err, setErr, maxPage } = useRequest();
  useEffect(() => {
    request("genre=12");
  }, []);
  useEffect(() => {
    setErr("");
  }, [movie]);
  const onReq = (data) => {
    request(`genre=12/page=${data}`);
  };
  return (
    <React.Fragment>
      <h2 className="titleMovie">Adventure</h2>
      {err && err.length > 0 && <h2 className="error">{err}</h2>}{" "}
      {movie && movie.length === 0 && (
        <h2 className="error">Fetch Not Found</h2>
      )}
      <Card>
        {movie &&
          movie.length > 0 &&
          movie.map((item) => (
            <AdventureList
              key={item.id}
              id={item.id}
              img={`http://image.tmdb.org/t/p/original${item.backdrop_path}`}
              Overview={item.overview}
              vote={item.vote_average}
              releaseDate={item.release_date}
              title={item.title}
              name={item.name}
            />
          ))}
      </Card>{" "}
      <BtnPage onReq={onReq} max={maxPage} err={setErr} />
    </React.Fragment>
  );
};
export default XuHuong;
