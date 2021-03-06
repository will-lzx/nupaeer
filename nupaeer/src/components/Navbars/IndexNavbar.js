import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              href="/index"
              // target="_blank"
              id="navbar-brand"
            >
              Leadsun
            </NavbarBrand>
            <UncontrolledTooltip target="#navbar-brand">
              一个创新科技的新型电子烟
            </UncontrolledTooltip>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#pablo"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="now-ui-icons design_app mr-1"></i>
                  <p>产品</p>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem to="/index" tag={Link}>
                    <i className="now-ui-icons business_chart-pie-36 mr-1"></i>
                    Leadsun一代
                  </DropdownItem>
                  <DropdownItem
                    href="/next-page"
                  >
                    <i className="now-ui-icons design_bullet-list-67 mr-1"></i>
                    Leadsun二代
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink
                  href="/join-page"
                >
                  <i className="now-ui-icons business_chart-pie-36 mr-1"></i>
                  <p>申请代理</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="/about-page"
                >
                  <i className="now-ui-icons business_bank mr-1"></i>
                  <p>关于我们</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="/login-page"
                >
                  <i className="now-ui-icons users_circle-08 mr-1"></i>
                  <p>登录</p>
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#pablo"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="now-ui-icons users_circle-08 mr-1"></i>
                  <p>我的</p>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem to="/my-page" tag={Link}>
                    <i className="now-ui-icons business_chart-pie-36 mr-1"></i>
                    个人中心
                  </DropdownItem>
                  <DropdownItem
                    href="/index"
                  >
                    <i className="now-ui-icons design_bullet-list-67 mr-1"></i>
                    退出登录
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
