import React from "react";

// reactstrap components
import {
  Row,
  Col
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import Carousel from './index-sections/Carousel.js';

function Index() {
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
  });
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <IndexHeader />
        <div className="section">
          <div className="container">
          <Row className="justify-content-md-center">
              <Col lg="8" md="12">
              <h3 className="title">产品介绍</h3>
              <h4 className="title">日本品牌：Leadsun</h4>
              <h5>0尼古丁电子口香糖</h5>
              <h5>Leadsun one系列</h5>
              <h5>套装零售价188元（一个烟杆+3个烟弹）</h5>
              <h5>单口味烟弹3个一套零售价88元</h5>
              <h5>6种不同口味烟弹一套零售价128元</h5>
              </Col>
          </Row>
          <Carousel></Carousel>
          </div>
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default Index;
