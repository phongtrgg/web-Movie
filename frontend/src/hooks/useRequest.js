import { useState } from "react";
const useRequest = () => {
  const [maxPage, setMaxPage] = useState();
  const [movie, setMovie] = useState();
  const [err, setErr] = useState();
  const request = async (data) => {
    try {
      const response = await fetch(
        `https://test-app-movie-b80655592a55.herokuapp.com/movies/token=8qlOkxz4wq/${data}`
      );
      const resData = await response.json();
      setMovie(resData[0].results);
      setMaxPage(resData[0].total_pages);
    } catch (err) {
      console.log(err.message);
      setErr("Fetch Not Found");
    }
  };
  return { request, movie, err, setErr, maxPage, setMovie };
};
export default useRequest;
