import React from "react";
import "./footer.css";
import IconFooter from "./iconFooter";
//tự làm thêm phần footer đơn giản để nhìn trang web cho đỡ trống trải
const Footer = () => {
  //click vào tile để điều hướng đến Browse
  const clickHome = () => {
    window.location.replace("/");
  };
  return (
    <React.Fragment>
      <div className="footer">
        <h1 className="titleFooter" onClick={clickHome}>
          Movie App
        </h1>
        <div className="flexFooter">
          {/* điều hướng trang search */}
          <IconFooter />
          {/* lên đầu trang */}
          <a href="#top"> Back To Top</a>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Footer;
