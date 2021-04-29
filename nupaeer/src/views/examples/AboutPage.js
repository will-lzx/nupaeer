import React from "react";

// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

function AboutPage() {
  const [pills, setPills] = React.useState("2");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <ProfilePageHeader />
        <div className="section">
          <Container>
            <h3 className="title">关于我们</h3>
            <h5 className="description">
              本公司致力于电子雾化器的设计，生产，销售全流程，拥有自己的专业团队。目前已上市第一代产品，深受广大爱好者的喜爱；第二代正在紧锣密鼓的推进中，相信很快就可以跟大家见面拉。
            </h5>
            <div className="title">
              <h3 className="title">联系我们</h3>
              <p>联系电话：13501981345</p>
              <p>微信：leadsun0401</p>
              <p>微信公众号：leadsun0401</p>
              <p>邮箱：hr@leadsun.com</p>
            </div>
          </Container>
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default AboutPage;
