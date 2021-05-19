import React from "react";

// reactstrap components
import {
  Row,
  Col,
  Container,
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexPageHeader from "components/Headers/IndexHeader";
import DarkFooter from "components/Footers/DarkFooter.js";

function AboutPage() {
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
        <IndexPageHeader />
        <div className="section">
          <Container>
            <div className="text-center">
              <h3 className="title">为什么要选择加盟代理电子烟？</h3>
              <Row className="justify-content-md-center">
                <Col lg="4" md="12">
                  <h5 className="title">投资小，回报大</h5>
                  <img className="rounded-circle introduce-img" src={ require("assets/img/money.jpeg") } alt="..."></img>
                </Col>
                <Col lg="4" md="12">
                  <h5 className="title">整个行业处于起步期，机会多</h5>
                  <img className="rounded-circle introduce-img" src={ require("assets/img/future.jpeg") } alt="..."></img>
                </Col>
                <Col lg="4" md="12">
                  <h5 className="title">国家对电子烟的法律法规越来越完善</h5>
                  <img className="rounded-circle introduce-img" src={ require("assets/img/lawyer.jpeg") } alt="..."></img>
                </Col>
              </Row>
            </div>
            <div className="text-center">
              <h3 className="title">为什么要选择LEADSUN？</h3>
              <Row className="justify-content-md-center">
                <Col lg="4" md="12">
                  <h5 className="title">品牌认可度高</h5>
                  <img className="introduce-img" src={ require("assets/img/WechatIMG83.jpeg") } alt="..."></img>
                </Col>
                <Col lg="4" md="12">
                  <h5 className="title">拥有完善的培训体系，提供一对一培训指导, 帮您快速售卖产品</h5>
                  <img className="introduce-img" src={ require("assets/img/training.jpeg") } alt="..."></img>
                </Col>
                <Col lg="4" md="12">
                  <h5 className="title">拥有完整的团队，从设计，生产，销售，到售后服务</h5>
                  <img className="introduce-img" src={ require("assets/img/produce.jpeg") } alt="..."></img>
                </Col>
              </Row>
            </div>
            <div className="text-center">
              <h3 className="title">关于我们</h3>
              <Row className="justify-content-md-center">
                <Col lg="4" md="12">
                  <img className="rounded-circle introduce-img" src={ require("assets/img/WechatIMG80.png") } alt="..."></img>
                  <h5 className="title">权威认证</h5>
                </Col>
                <Col lg="4" md="12">
                  <img className="rounded-circle introduce-img" src={ require("assets/img/WechatIMG81.png") } alt="..."></img>
                  <h5 className="title">技术创新</h5>
                </Col>
                <Col lg="4" md="12">
                  <img className="rounded-circle introduce-img" src={ require("assets/img/WechatIMG82.png") } alt="..."></img>
                  <h5 className="title">安全保障</h5>
                </Col>
              </Row>
            </div>
            <div className="title">
              <h3 className="title">联系我们</h3>
              <p>联系电话：13761709038</p>
              <p>微信：leadsun0401</p>
              <p>微信公众号：leadsun0401</p>
              <p>邮箱：liuzhixiang@nupaeer.com</p>
            </div>
          </Container>
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default AboutPage;
