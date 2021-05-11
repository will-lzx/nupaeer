import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

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
            <h3 className="title">产品介绍</h3>
            <h4 className="title">优点</h4>
            <h5 className="description">
              <p>不含尼古丁，对人体无任何伤害</p>
              <p>拥有4种口味：西瓜，巧克力，薄荷，葡萄</p>
              <p>可以替代口香糖</p>
              <p>一个烟弹可以吸300口左右</p>
            </h5>
          </div>
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default Index;
