import React from "react";
import BtnPage from "../../Card/btnPage";
function NextPage(props) {
  return (
    <React.Fragment>
      {props.genre && props.movie && props.curentOpen === "action" && (
        <BtnPage
          onReq={props.onAction}
          err={props.setErr}
          max={props.maxPage}
          clear={props.clear}
          setClear={props.setClear}
          search={props.search}
        />
      )}
      {props.movie && props.curentOpen === "adventure" && (
        <BtnPage
          onReq={props.onAdventure}
          err={props.setErr}
          max={props.maxPage}
          clear={props.clear}
          setClear={props.setClear}
          search={props.search}
        />
      )}
      {props.movie && props.curentOpen === "animation" && (
        <BtnPage
          onReq={props.onAnimation}
          err={props.setErr}
          max={props.maxPage}
          clear={props.clear}
          setClear={props.setClear}
          search={props.search}
        />
      )}
      {props.movie && props.curentOpen === "comedy" && (
        <BtnPage
          onReq={props.onComedy}
          err={props.setErr}
          max={props.maxPage}
          clear={props.clear}
          setClear={props.setClear}
          search={props.search}
        />
      )}
      {props.movie && props.curentOpen === "crime" && (
        <BtnPage
          onReq={props.onCrime}
          err={props.setErr}
          max={props.maxPage}
          clear={props.clear}
          setClear={props.setClear}
          search={props.search}
        />
      )}
      {props.movie && props.curentOpen === "documentary" && (
        <BtnPage
          onReq={props.onDocumentary}
          err={props.setErr}
          max={props.maxPage}
          clear={props.clear}
          setClear={props.setClear}
          search={props.search}
        />
      )}
      {props.movie && props.curentOpen === "drama" && (
        <BtnPage
          onReq={props.onDrama}
          err={props.setErr}
          max={props.maxPage}
          clear={props.clear}
          setClear={props.setClear}
          search={props.search}
        />
      )}
      {props.movie && props.curentOpen === "family" && (
        <BtnPage
          onReq={props.onFamily}
          err={props.setErr}
          max={props.maxPage}
          clear={props.clear}
          setClear={props.setClear}
          search={props.search}
        />
      )}
      {props.movie && props.curentOpen === "fantasy" && (
        <BtnPage
          onReq={props.onFantasy}
          err={props.setErr}
          max={props.maxPage}
          clear={props.clear}
          setClear={props.setClear}
          search={props.search}
        />
      )}
      {props.movie && props.curentOpen === "history" && (
        <BtnPage
          onReq={props.onHistory}
          err={props.setErr}
          max={props.maxPage}
          clear={props.clear}
          setClear={props.setClear}
          search={props.search}
        />
      )}
      {props.movie && props.curentOpen === "horror" && (
        <BtnPage
          onReq={props.onHorror}
          err={props.setErr}
          max={props.maxPage}
          clear={props.clear}
          setClear={props.setClear}
          search={props.search}
        />
      )}
      {props.movie && props.curentOpen === "music" && (
        <BtnPage
          onReq={props.onMusic}
          err={props.setErr}
          max={props.maxPage}
          clear={props.clear}
          setClear={props.setClear}
          search={props.search}
        />
      )}
      {props.movie && props.curentOpen === "Mystery" && (
        <BtnPage
          onReq={props.onMystery}
          err={props.setErr}
          max={props.maxPage}
          clear={props.clear}
          setClear={props.setClear}
          search={props.search}
        />
      )}
      {props.movie && props.curentOpen === "Romance" && (
        <BtnPage
          onReq={props.onRomance}
          err={props.setErr}
          max={props.maxPage}
          clear={props.clear}
          setClear={props.setClear}
          search={props.search}
        />
      )}
      {props.movie && props.curentOpen === "science fiction" && (
        <BtnPage
          onReq={props.onScienceFiction}
          err={props.setErr}
          max={props.maxPage}
          clear={props.clear}
          setClear={props.setClear}
          search={props.search}
        />
      )}
      {props.movie && props.curentOpen === "tv movie" && (
        <BtnPage
          onReq={props.onTVMovie}
          err={props.setErr}
          max={props.maxPage}
          clear={props.clear}
          setClear={props.setClear}
          search={props.search}
        />
      )}
      {props.movie && props.curentOpen === "thriller" && (
        <BtnPage
          onReq={props.onThriller}
          err={props.setErr}
          max={props.maxPage}
          clear={props.clear}
          setClear={props.setClear}
          search={props.search}
        />
      )}
      {props.movie && props.curentOpen === "war" && (
        <BtnPage
          onReq={props.onWar}
          err={props.setErr}
          max={props.maxPage}
          clear={props.clear}
          setClear={props.setClear}
          search={props.search}
        />
      )}
      {props.movie && props.curentOpen === "western" && (
        <BtnPage
          onReq={props.onWestern}
          err={props.setErr}
          max={props.maxPage}
          clear={props.clear}
          setClear={props.setClear}
          search={props.search}
        />
      )}
      {props.movie && props.lang && props.curentOpen === "es" && (
        <BtnPage
          onReq={props.onLangEs}
          err={props.setErr}
          max={props.maxPage}
          clear={props.clear}
          setClear={props.setClear}
          search={props.search}
        />
      )}
      {props.movie && props.lang && props.curentOpen === "it" && (
        <BtnPage
          onReq={props.onLangIt}
          err={props.setErr}
          max={props.maxPage}
          clear={props.clear}
          setClear={props.setClear}
          search={props.search}
        />
      )}
      {props.movie && props.lang && props.curentOpen === "fr" && (
        <BtnPage
          onReq={props.onLangEs}
          err={props.setErr}
          max={props.maxPage}
          clear={props.clear}
          setClear={props.setClear}
          search={props.search}
        />
      )}
      {props.movie && props.lang && props.curentOpen === "en" && (
        <BtnPage
          onReq={props.onLangEn}
          err={props.setErr}
          max={props.maxPage}
          clear={props.clear}
          setClear={props.setClear}
          search={props.search}
        />
      )}
      {props.movie && props.lang && props.curentOpen === "ko" && (
        <BtnPage
          onReq={props.onLangKo}
          err={props.setErr}
          max={props.maxPage}
          clear={props.clear}
          setClear={props.setClear}
          search={props.search}
        />
      )}
      {props.movie && props.lang && props.curentOpen === "de" && (
        <BtnPage
          onReq={props.onLangDe}
          err={props.setErr}
          max={props.maxPage}
          clear={props.clear}
          setClear={props.setClear}
          search={props.search}
        />
      )}
      {props.movie && props.lang && props.curentOpen === "ja" && (
        <BtnPage
          onReq={props.onLangJa}
          err={props.setErr}
          max={props.maxPage}
          clear={props.clear}
          setClear={props.setClear}
          search={props.search}
        />
      )}
      {props.movie && props.type && props.curentOpen === "tv" && (
        <BtnPage
          onReq={props.onTypeTv}
          err={props.setErr}
          max={props.maxPage}
          clear={props.clear}
          setClear={props.setClear}
          search={props.search}
        />
      )}
      {props.movie && props.type && props.curentOpen === "movie" && (
        <BtnPage
          onReq={props.onTypeMovie}
          err={props.setErr}
          max={props.maxPage}
          clear={props.clear}
          setClear={props.setClear}
          search={props.search}
        />
      )}
      {props.movie && props.year && (
        <BtnPage
          onReq={props.onYear}
          onYear={true}
          err={props.setErr}
          max={props.maxPage}
          clear={props.clear}
          setClear={props.setClear}
          search={props.search}
        />
      )}
      {props.movie && props.default && (
        <BtnPage
          onReq={props.onKey}
          onYear={true}
          err={props.setErr}
          max={props.maxPage}
          req={props.req}
          clear={props.clear}
          setClear={props.setClear}
          search={props.search}
        />
      )}
    </React.Fragment>
  );
}
export default NextPage;
