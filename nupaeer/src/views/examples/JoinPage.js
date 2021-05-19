import React from "react";

// reactstrap components
import {
  Button,
  Container,
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

function JoinPage() {  

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
            <div className="text-center">
              <h3 className="title">成为代理的权益</h3>
              <h4 className="title">模式一:一次性拿货</h4>
              <h5 className="description">
                <p>1~99套6折优惠;</p>
                <p>100~999件5折优惠;</p>
                <p>1000~9999件4折优惠;</p>
                <p>10000件以上3折优惠;</p>
                <p>经销商额外优惠：</p>
                <p>优惠一：一次性拿货大于100件，每件再优惠1元，上不封顶</p>
                <p>优惠二：经销商转介绍，根据二级经销商的拿货数量，每件再奖励1元给一级经销商</p>
              </h5>
              <h4 className="title">模式二:一件代发</h4>
              <h5 className="description">
                <p>零售价的40%作为奖励返还给经销商</p>
              </h5>
              <Button
                color="info"
                href='/join'
              >
                立即成为代理
              </Button>
            </div>
          </Container>
        </div>
      </div>
      <DarkFooter />
    </>
  );
}

export default JoinPage;
