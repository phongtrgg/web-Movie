import React, { useEffect } from "react";
import BtnPage from "../../../Card/btnPage";
import Card from "../../../Card/Card";
import TopRateList from "./TopRateList";
import useRequest from "../../../hooks/useRequest";

const TopRate = () => {
  const { request, movie, err, setErr, maxPage } = useRequest();
  useEffect(() => {
    request("top-rate");
  }, []);
  useEffect(() => {
    setErr("");
  }, [movie]);
  const onReq = (data) => {
    request(`top-rate/page=${data}`);
  };
  return (
    <React.Fragment>
      <h2 className="titleMovie">Top Rate</h2>
      {err && err.length > 0 && <h2 className="error">{err}</h2>}{" "}
      {movie && movie.length === 0 && (
        <h2 className="error">Fetch Not Found</h2>
      )}
      <Card>
        {movie &&
          movie.length > 0 &&
          movie.map((item) => (
            <TopRateList
              key={item.id}
              id={item.id}
              img={`http://image.tmdb.org/t/p/original${item.backdrop_path}`}
              Overview={item.overview}
              vote={item.vote_average}
              releaseDate={item.first_air_date}
              title={item.title}
              name={item.name}
            />
          ))}
      </Card>
      <BtnPage onReq={onReq} max={maxPage} err={setErr} />
    </React.Fragment>
  );
};

export default TopRate;
