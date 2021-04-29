/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Designed by{" "}
          <a
            href="/"
          >
            上海安蕊国际贸易有限公司
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
