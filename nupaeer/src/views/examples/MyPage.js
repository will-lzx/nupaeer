import React from "react";

// reactstrap components
import {
  Container,
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import Order from "../index-sections/Order";
import Delegate from "../index-sections/Delegate";

function MyPage() {
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
        <div color="section">
          <Container>
            <Order></Order>
            <Delegate></Delegate>
          </Container>
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default MyPage;
