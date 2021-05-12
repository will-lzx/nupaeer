/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <div className="copyright" id="copyright">
          沪ICP备2021012993号-1<br/>
          © {new Date().getFullYear()}  {" "}
          <a
            href="/"
          >
            上海努佩尔科技有限公司
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
