import { useState, useRef } from "react";
import useRequest from "../../hooks/useRequest";
const useValid = () => {
  const [list, setList] = useState(true);
  const [searchInput, setSearchInput] = useState([]);
  const [curentOpen, setCurrentOpen] = useState();
  const { request, movie, err, setErr, maxPage, setMovie } = useRequest();
  const [clear, setClear] = useState(false);
  const inputRef = useRef();
  const enterInput = (event) => {
    setSearchInput(event.target.value);
  };
  //search theo list thể loại gợi ý khi click vào từng mục
  const submit = (key) => {
    setSearchInput(key);
    setCurrentOpen(key);
    searchFilm(key);
  };
  const submitAction = () => {
    submit("action");
  };
  const adventureAction = () => {
    submit("adventure");
  };
  const westernAction = () => {
    submit("western");
  };
  const warAction = () => {
    submit("war");
  };
  const thrillerAction = () => {
    submit("thriller");
  };
  const tvMovieAction = () => {
    submit("tv movie");
  };
  const scienceFictionAction = () => {
    submit("science fiction");
  };
  const romanceAction = () => {
    submit("romance");
  };
  const mysteryAction = () => {
    submit("mystery");
  };
  const musicAction = () => {
    submit("music");
  };
  const horrorAction = () => {
    submit("horror");
  };
  const historyAction = () => {
    submit("history");
  };
  const familyAction = () => {
    submit("family");
  };
  const fantasyAction = () => {
    submit("fantasy");
  };
  const dramaAction = () => {
    submit("drama");
  };
  const documentaryAction = () => {
    submit("documentary");
  };
  const crimeAction = () => {
    submit("crime");
  };
  const comedyAction = () => {
    submit("comedy");
  };
  const animationAction = () => {
    submit("animation");
  };
  //check input hiện tại và search
  const searchForm = (event) => {
    event.preventDefault();
    //truyền vào input người dùng nhập ở form và check để search đúng đối tượng
    searchFilm(searchInput);
  };
  const searchFilm = (data) => {
    if (inputRef.current.value === "genre=") {
      if (data === "action" || data === "Action") {
        setList(false);
        setCurrentOpen("action");
        return request(`search/${inputRef.current.value}28`);
      }
      if (data === "adventure" || data === "Adventure") {
        setList(false);
        setCurrentOpen("adventure");
        return request(`search/${inputRef.current.value}12`);
      }
      if (data === "animation" || data === "Animation") {
        setList(false);
        setCurrentOpen("animation");
        return request(`search/${inputRef.current.value}16`);
      }
      if (data === "comedy" || data === "Comedy") {
        setList(false);
        setCurrentOpen("comedy");
        return request(`search/${inputRef.current.value}35`);
      }
      if (data === "crime" || data === "Crime") {
        setList(false);
        setCurrentOpen("crime");
        return request(`search/${inputRef.current.value}80`);
      }
      if (data === "documentary" || data === "Documentary") {
        setList(false);
        setCurrentOpen("documentary");
        return request(`search/${inputRef.current.value}99`);
      }
      if (data === "drama" || data === "Drama") {
        setList(false);
        setCurrentOpen("drama");
        return request(`search/${inputRef.current.value}18`);
      }
      if (data === "family" || data === "Family") {
        setList(false);
        setCurrentOpen("family");
        return request(`search/${inputRef.current.value}10751`);
      }
      if (data === "fantasy" || data === "Fantasy") {
        setList(false);
        setCurrentOpen("fantasy");
        return request(`search/${inputRef.current.value}14`);
      }
      if (data === "history" || data === "History") {
        setList(false);
        setCurrentOpen("history");
        return request(`search/${inputRef.current.value}36`);
      }
      if (data === "horror" || data === "Horror") {
        setList(false);
        setCurrentOpen("horror");
        return request(`search/${inputRef.current.value}27`);
      }
      if (data === "music" || data === "Music") {
        setList(false);
        setCurrentOpen("music");
        return request(`search/${inputRef.current.value}10402`);
      }
      if (data === "mystery" || data === "Mystery") {
        setList(false);
        setCurrentOpen("mystery");
        return request(`search/${inputRef.current.value}9648`);
      }
      if (data === "romance" || data === "Romance") {
        setList(false);
        setCurrentOpen("romance");
        return request(`search/${inputRef.current.value}10749`);
      }
      if (data === "science fiction" || data === "Science Fiction") {
        setList(false);
        setCurrentOpen("science fiction");
        return request(`search/${inputRef.current.value}878`);
      }
      if (
        data === "TV" ||
        data === "tv" ||
        data === "movie" ||
        data === "Movie" ||
        data === "tv movie" ||
        data === "Tv Movie"
      ) {
        setList(false);
        setCurrentOpen("tv movie");
        return request(`search/${inputRef.current.value}10770`);
      }
      if (data === "thriller" || data === "Thriller") {
        setList(false);
        setCurrentOpen("thriller");
        return request(`search/${inputRef.current.value}53`);
      }
      if (data === "War" || data === "war") {
        setList(false);
        setCurrentOpen("war");
        return request(`search/${inputRef.current.value}10752`);
      }
      if (data === "western" || data === "Western") {
        setList(false);
        setCurrentOpen("western");
        return request(`search/${inputRef.current.value}37`);
      }
    } else {
      if (searchInput && searchInput.length !== 0) {
        const fix = searchInput.toLocaleLowerCase();
        setCurrentOpen(fix);
      }
      setClear(true);
      return request(`search/${inputRef.current.value}${searchInput}`);
    }
  };
  //////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////call next page theo từng hạng mục//////////////////////////////////
  const onAction = (data) => {
    request(`genre=28/page=${data}`);
  };
  const onAdventure = (data) => {
    request(`genre=12/page=${data}`);
  };
  const onAnimation = (data) => {
    request(`genre=16/page=${data}`);
  };
  const onComedy = (data) => {
    request(`genre=15/page=${data}`);
  };
  const onCrime = (data) => {
    request(`genre=80/page=${data}`);
  };
  const onDocumentary = (data) => {
    request(`genre=99/page=${data}`);
  };
  const onDrama = (data) => {
    request(`genre=18/page=${data}`);
  };
  const onFamily = (data) => {
    request(`genre=10751/page=${data}`);
  };
  const onFantasy = (data) => {
    request(`genre=14/page=${data}`);
  };
  const onHistory = (data) => {
    request(`genre=36/page=${data}`);
  };
  const onHorror = (data) => {
    request(`genre=27/page=${data}`);
  };
  const onMusic = (data) => {
    request(`genre=10402/page=${data}`);
  };
  const onMystery = (data) => {
    request(`genre=9648/page=${data}`);
  };
  const onRomance = (data) => {
    request(`genre=10749/page=${data}`);
  };
  const onScienceFiction = (data) => {
    request(`genre=878/page=${data}`);
  };
  const onTVMovie = (data) => {
    request(`genre=10770/page=${data}`);
  };
  const onThriller = (data) => {
    request(`genre=53/page=${data}`);
  };
  const onWar = (data) => {
    request(`genre=10752/page=${data}`);
  };
  const onWestern = (data) => {
    request(`genre=37/page=${data}`);
  };
  const onLangEn = (data) => {
    request(`search/language=en/page=${data}`);
  };
  const onLangEs = (data) => {
    request(`search/language=es/page=${data}`);
  };
  const onLangKo = (data) => {
    request(`search/language=ko/page=${data}`);
  };
  const onLangJa = (data) => {
    request(`search/language=ja/page=${data}`);
  };
  const onLangIt = (data) => {
    request(`search/language=it/page=${data}`);
  };
  const onLangDe = (data) => {
    request(`search/language=de/page=${data}`);
  };
  const onLangFr = (data) => {
    request(`search/language=fr/page=${data}`);
  };
  const onTypeTv = (data) => {
    request(`search/mediaType=tv/page=${data}`);
  };
  const onTypeMovie = (data) => {
    request(`search/mediaType=movie/page=${data}`);
  };
  const onYear = (data, time) => {
    request(`search/year=${time}/page=${data}`);
  };
  const onKey = (data, key) => {
    request(`search/key=${key}/page=${data}`);
  };
  return {
    list,
    clear,
    setMovie,
    setClear,
    onTypeMovie,
    onKey,
    onYear,
    onTypeTv,
    onLangDe,
    onLangFr,
    onLangIt,
    onLangJa,
    onLangKo,
    onLangEs,
    onLangEn,
    onWestern,
    setCurrentOpen,
    curentOpen,
    onWar,
    onThriller,
    onTVMovie,
    onScienceFiction,
    onRomance,
    onMystery,
    onMusic,
    onHorror,
    onHistory,
    onFantasy,
    onFamily,
    onDrama,
    onDocumentary,
    onCrime,
    onAction,
    onComedy,
    onAdventure,
    onAnimation,
    maxPage,
    searchForm,
    enterInput,
    setList,
    searchInput,
    setSearchInput,
    request,
    movie,
    err,
    setErr,
    inputRef,
    searchFilm,
    submitAction,
    adventureAction,
    westernAction,
    warAction,
    thrillerAction,
    tvMovieAction,
    scienceFictionAction,
    romanceAction,
    mysteryAction,
    musicAction,
    horrorAction,
    historyAction,
    familyAction,
    fantasyAction,
    dramaAction,
    documentaryAction,
    crimeAction,
    comedyAction,
    animationAction,
  };
};
export default useValid;
