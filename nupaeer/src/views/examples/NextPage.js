import React from "react";

// reactstrap components
import {
  Container,
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

function NextPage() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <IndexHeader />
        <div className="section">
          <Container>
            <h3 className="title">第二代产品</h3>
            <h4 className="title">特点升级</h4>
            <h5 className="description">
              <p>含量提升，更多口味</p>
              <p>即将推出</p>
            </h5>
          </Container>
        </div>
      </div>
      <DarkFooter />
    </>
  );
}

export default NextPage;
