import { useState } from "react";
import { videoAction } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
const useDetail = () => {
  const [detail, setDetail] = useState(false);
  const video = useSelector((state) => state.video.video);
  const dispatch = useDispatch();

  const openVideo = (props) => {
    dispatch(videoAction.ON_ADD(props));
  };
  function checkId(id) {
    if (id === video.id) {
      dispatch(videoAction.ON_OFF());
      dispatch(videoAction.ON_ADD([]));
    } else {
      dispatch(videoAction.ON_SHOW());
    }
  }
  return {
    detail,
    setDetail,
    video,
    openVideo,
    checkId,
  };
};
export default useDetail;
