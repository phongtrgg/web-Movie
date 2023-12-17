import React, { useEffect, useState } from "react";
import "./Search.css";
import SearchIcon from "./SearchIcon";
import ResultList from "./ResultList";
import CardSearch from "../../Card/CardSearch";
import { Link, useNavigate } from "react-router-dom";
import useValid from "./validSearch";
import NextPage from "./NextPage";
//
const SearchForm = (props) => {
  const navigate = useNavigate();

  const {
    list,
    clear,
    setClear,
    setCurrentOpen,
    curentOpen,
    searchForm,
    enterInput,
    setList,
    searchInput,
    setSearchInput,
    request,
    movie,
    maxPage,
    err,
    setErr,
    inputRef,
    searchFilm,
    setMovie,
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
    onWestern,
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
    onLangDe,
    onLangIt,
    onLangJa,
    onLangKo,
    onLangEs,
    onLangEn,
    onLangFr,
    onTypeMovie,
    onTypeTv,
    onYear,
    onKey,
  } = useValid();

  useEffect(() => {
    setErr("");
  }, [movie]);

  const showList = () => {
    setList((prev) => !prev);
  };

  const checkYear = (data) => {
    onYear(data, searchInput);
  };
  const checkKey = (data) => {
    onKey(data, searchInput);
  };
  const resetPage = (event) => {
    event.preventDefault();
    setSearchInput("");
    setMovie(null);
    setErr("");
    navigate("/search/key");
  };
  return (
    <React.Fragment>
      <div>&nbsp</div>
      <div className="boxForm">
        <form onSubmit={searchForm}>
          <div className="border">
            {props.default && (
              <input
                onChange={enterInput}
                type="text"
                placeholder="Search Film"
                value={searchInput}
              ></input>
            )}
            {props.default && (
              <input ref={inputRef} type="hidden" value="key="></input>
            )}
            {props.year && (
              <input
                onChange={enterInput}
                type="number"
                placeholder="Search Film"
                value={searchInput}
              ></input>
            )}
            {props.year && (
              <input ref={inputRef} type="hidden" value="year="></input>
            )}
            {props.type && (
              <input
                onChange={enterInput}
                type="text"
                placeholder="Search Film"
                value={searchInput}
              ></input>
            )}
            {props.type && (
              <input
                ref={inputRef}
                type="hidden"
                value="mediaType="
              ></input>
            )}
            {props.lang && (
              <input
                onChange={enterInput}
                type="text"
                placeholder="Search Film"
                value={searchInput}
              ></input>
            )}
            {props.lang && (
              <input
                ref={inputRef}
                type="hidden"
                value="language="
              ></input>
            )}
            {props.genre && (
              <input
                value={searchInput}
                onChange={enterInput}
                type="text"
                placeholder="Search Film"
              ></input>
            )}
            {props.genre && (
              <input ref={inputRef} type="hidden" value="genre="></input>
            )}
            <SearchIcon onClick={searchForm} />
          </div>
          <div className="boxBtn">
            {err && props.type && (
              <p className="note">hiện tại chỉ có 2 kiểu là movie và tv</p>
            )}
            {err && props.lang && (
              <p className="note">
                các ngôn ngữ en, es, ko, de, it, ja, fr
              </p>
            )}
            <div className="boxBtnForm">
              <button
                className="btn Search"
                onClick={searchForm}
                type="submit"
              >
                Search
              </button>
              <button className="btn Reset" onClick={resetPage}>
                Reset
              </button>
            </div>
          </div>
        </form>
      </div>
      {props.genre && (
        <div className="center">
          <button className="btn-search" onClick={showList}>
            {list ? "Hidden List" : "Show List"}
          </button>
        </div>
      )}
      {props.genre && list && (
        <ul className="boxGenre">
          <p>gợi ý thể loại</p>
          <Link onClick={submitAction}>Action</Link>
          <Link onClick={adventureAction}>Adventure</Link>
          <Link onClick={animationAction}>Animation</Link>
          <Link onClick={comedyAction}>Comedy</Link>
          <Link onClick={crimeAction}>Crime</Link>
          <Link onClick={documentaryAction}>Documentary</Link>
          <Link onClick={dramaAction}>Drama</Link>
          <Link onClick={familyAction}>Family</Link>
          <Link onClick={fantasyAction}>Fantasy</Link>
          <Link onClick={historyAction}>History</Link>
          <Link onClick={horrorAction}>Horror</Link>
          <Link onClick={musicAction}>Music</Link>
          <Link onClick={mysteryAction}>Mystery</Link>
          <Link onClick={romanceAction}>Romance</Link>
          <Link onClick={scienceFictionAction}>Science Fiction</Link>
          <Link onClick={tvMovieAction}>TV Movie</Link>
          <Link onClick={thrillerAction}>Thriller</Link>
          <Link onClick={warAction}>War</Link>
          <Link onClick={westernAction}>Western</Link>
        </ul>
      )}
      <h2 className="titleResult">Search Result</h2>
      {err && <h1 className="error">{err}</h1>}
      <div className="boxBtnSearch">
        {movie && (
          <NextPage
            search={true}
            onYear={checkYear}
            onKey={checkKey}
            onTypeMovie={onTypeMovie}
            onTypeTv={onTypeTv}
            onLangDe={onLangDe}
            onLangIt={onLangIt}
            onLangJa={onLangJa}
            onLangKo={onLangKo}
            onLangEs={onLangEs}
            onLangEn={onLangEn}
            onLangFr={onLangFr}
            year={props.year}
            type={props.type}
            default={props.default}
            lang={props.lang}
            genre={props.genre}
            curentOpen={curentOpen}
            maxPage={maxPage}
            setErr={setErr}
            movie={movie}
            onComedy={onComedy}
            onAnimation={onAnimation}
            onAction={onAction}
            onAdventure={onAdventure}
            onDrama={onDrama}
            onCrime={onCrime}
            onDocumentary={onDocumentary}
            onHistory={onHistory}
            onFamily={onFamily}
            onFantasy={onFantasy}
            onWestern={onWestern}
            onMystery={onMystery}
            onMusic={onMusic}
            onHorror={onHorror}
            onScienceFiction={onScienceFiction}
            onRomance={onRomance}
            onWar={onWar}
            onThriller={onThriller}
            onTVMovie={onTVMovie}
            clear={clear}
            setClear={setClear}
          />
        )}
      </div>
      <CardSearch>
        {movie &&
          movie.length > 0 &&
          movie.map((item) => (
            <ResultList
              key={item.id}
              id={item.id}
              img={`http://image.tmdb.org/t/p/original${item.poster_path}`}
              Overview={item.overview}
              vote={item.vote_average}
              releaseDate={item.release_date}
              title={item.title}
              name={item.name}
              imgW={`http://image.tmdb.org/t/p/original${item.backdrop_path}`}
              firtDate={item.first_air_date}
            />
          ))}
      </CardSearch>
      {movie && (
        <NextPage
          year={props.year}
          type={props.type}
          default={props.default}
          lang={props.lang}
          genre={props.genre}
          curentOpen={curentOpen}
          maxPage={maxPage}
          setErr={setErr}
          movie={movie}
          onComedy={onComedy}
          onAnimation={onAnimation}
          onAction={onAction}
          onAdventure={onAdventure}
          onDrama={onDrama}
          onCrime={onCrime}
          onDocumentary={onDocumentary}
          onHistory={onHistory}
          onFamily={onFamily}
          onFantasy={onFantasy}
          onWestern={onWestern}
          onMystery={onMystery}
          onMusic={onMusic}
          onHorror={onHorror}
          onScienceFiction={onScienceFiction}
          onRomance={onRomance}
          onWar={onWar}
          onThriller={onThriller}
          onTVMovie={onTVMovie}
          onLangDe={onLangDe}
          onLangIt={onLangIt}
          onLangJa={onLangJa}
          onLangKo={onLangKo}
          onLangEs={onLangEs}
          onLangEn={onLangEn}
          onLangFr={onLangFr}
          onTypeMovie={onTypeMovie}
          onTypeTv={onTypeTv}
          onYear={checkYear}
          onKey={checkKey}
          clear={clear}
          setClear={setClear}
          search={true}
        />
      )}
    </React.Fragment>
  );
};
export default SearchForm;
