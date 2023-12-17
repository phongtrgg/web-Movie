const useApi = () => {
  //cái này lấy từ đề bài chỉ để tiện gọi api hơn
  const requests = {
    fetchTrending: `/trending/all/week?api_key=c6e0a2eb0fab828f0d9b0347454ed094&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=c6e0a2eb0fab828f0d9b0347454ed094&with_network=123`,
    fetchTopRated: `/movie/top_rated?api_key=c6e0a2eb0fab828f0d9b0347454ed094&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=c6e0a2eb0fab828f0d9b0347454ed094&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=c6e0a2eb0fab828f0d9b0347454ed094&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=c6e0a2eb0fab828f0d9b0347454ed094&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=c6e0a2eb0fab828f0d9b0347454ed094&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=c6e0a2eb0fab828f0d9b0347454ed094&with_genres=99`,
    fetchSearch: `/search/movie?api_key=c6e0a2eb0fab828f0d9b0347454ed094&language=en-US`,
  };
  return { requests };
};
export default useApi;
