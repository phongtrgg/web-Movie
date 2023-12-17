import React, { useEffect } from "react";
import useRequest from "../../../hooks/useRequest";
import Card from "../../../Card/Card";
import DocumentList from "./DocumentList";
import BtnPage from "../../../Card/btnPage";
//
const Document = () => {
  const { request, movie, err, setErr, maxPage } = useRequest();
  useEffect(() => {
    request("genre=99");
  }, []);
  useEffect(() => {
    setErr("");
  }, [movie]);
  const onReq = (data) => {
    request(`genre=99/page=${data}`);
  };
  //
  return (
    <React.Fragment>
      <h2 className="titleMovie">Document</h2>
      {err && err.length > 0 && <h2 className="error">{err}</h2>}{" "}
      {movie && movie.length === 0 && (
        <h2 className="error">Fetch Not Found</h2>
      )}
      <Card>
        {movie &&
          movie.length > 0 &&
          movie.map((item) => (
            <DocumentList
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
      <BtnPage onReq={onReq} err={setErr} max={maxPage} />
    </React.Fragment>
  );
};

export default Document;
