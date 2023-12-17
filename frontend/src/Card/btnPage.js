import React, { useEffect, useState } from "react";
import "./Card.css";
import { useSelector, useDispatch } from "react-redux";
import { pageAction } from "../store/store";
function BtnPage(props) {
  /////////////////////////search/////////////////////////
  const dispatch = useDispatch();
  const couter = useSelector((state) => state.page.page);
  const submit = (couter) => {
    props.onReq(couter);
  };
  const prev = (event) => {
    event.preventDefault();
    if (couter > 1) {
      dispatch(pageAction.ON_DOWN());
      submit(couter - 1);
    }
  };
  useEffect(() => {
    dispatch(pageAction.ON_RS());
    if (props.setClear) {
      props.setClear(false);
    }
  }, [props.clear]);
  const next = (event) => {
    event.preventDefault();
    if (couter > props.max - 1) {
      return props.err("Max Page Size");
    }
    dispatch(pageAction.ON_UP());
    submit(couter + 1);
  };
  /////////////////////////HOME/////////////////////////
  const [pageNum, setPageNum] = useState(1);
  const down = (event) => {
    event.preventDefault();
    if (pageNum > 1) {
      setPageNum((prev) => prev - 1);
      submit(pageNum - 1);
    }
  };
  const up = (event) => {
    event.preventDefault();
    if (pageNum > props.max - 1) {
      return props.err("Max Page Size");
    }
    setPageNum((prev) => prev + 1);
    submit(pageNum + 1);
  };
  return (
    <React.Fragment>
      {props.search && (
        <form className="boxPage">
          <button className="prev btnPage" onClick={prev}>
            {"<< prev"}
          </button>
          <p className="couterP">{couter}</p>
          <input value={couter} type="hidden" />
          <button className="next btnPage" onClick={next}>
            {"next >>"}
          </button>
        </form>
      )}
      {!props.search && (
        <form className="boxPage">
          <button className="prev btnPage" onClick={down}>
            {"<< prev"}
          </button>
          <p className="couterP">{pageNum}</p>
          <input value={pageNum} type="hidden" />
          <button className="next btnPage" onClick={up}>
            {"next >>"}
          </button>
        </form>
      )}
    </React.Fragment>
  );
}
export default BtnPage;
