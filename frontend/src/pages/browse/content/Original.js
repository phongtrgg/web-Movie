import React, { useState, useEffect } from "react";
import OriginalList from "./OriginalList";
import Card from "../../../Card/Card";
//
const Original = () => {
  const [movie, setMovie] = useState();

  const request = async (data) => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/discover/tv?api_key=c6e0a2eb0fab828f0d9b0347454ed094&with_network=123"
      );
      const resData = await response.json();
      setMovie(resData.results);
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    request();
  }, []);

  return (
    <div className="oriHidden">
      <Card>
        {movie &&
          movie.length > 0 &&
          movie.map((item) => (
            <OriginalList
              key={item.id}
              id={item.id}
              img={`http://image.tmdb.org/t/p/original${item.poster_path}`}
              imgVideo={`http://image.tmdb.org/t/p/original${item.backdrop_path}`}
              Overview={item.overview}
              vote={item.vote_average}
              releaseDate={item.first_air_date}
              title={item.title}
              name={item.name}
            />
          ))}
      </Card>
    </div>
  );
};
export default Original;
