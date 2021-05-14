/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <div className="contact">
          销售总监<br/>
          13761709038
          
        </div>
      </Container>
      <div>
        <img className="footer-img" src={ require("assets/img/WechatIMG84.jpeg") } alt="..."></img>
        <div className="copyright" id="copyright">
          沪ICP备2021012993号-1<br/>
          © {new Date().getFullYear()}  {" "}
          <a
            href="/"
          >
            上海努佩尔科技有限公司
          </a>
        </div>
      </div>
      
    </footer>
  );
}

export default DarkFooter;
