import React from "react";

// reactstrap components
import {
  Button,
  Modal,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

function JoinPage() {
  const [modalLive, setModalLive] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("index-page");
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
        <IndexHeader />
        <div className="main">
          <div className="section">
            <Container>
              <h3 className="title">成为代理的权益</h3>
              <h4 className="title">进货价立减优惠</h4>
              <h5 className="description">
                <p>初始进货价六折优惠;</p>
                <p>代理销售每增加5千，进货价再减5%;</p>
                <p>进货价在初始进货价基础上，最高再减30%.</p>
              </h5>
              <h4 className="title">代理转推荐有高额奖励</h4>
              <h5 className="description">
                <p>推荐代理季度总销售额的5%</p>
              </h5>
              <Button
                color="info"
                onClick={() => setModalLive(true)}
              >
                成为代理
              </Button>
              <Modal toggle={() => setModalLive(false)} isOpen={modalLive}>
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLiveLabel">
                    欢迎您加入代理
                  </h5>
                  <button
                    aria-label="Close"
                    className="close"
                    type="button"
                    onClick={() => setModalLive(false)}
                  >
                    <span aria-hidden={true}>×</span>
                  </button>
                </div>
                <div className="modal-body">
                <InputGroup
                    className="no-border input-lg"
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons users_circle-08"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="姓名..."
                      type="text"
                    ></Input>
                  </InputGroup>
                  <InputGroup
                    className="no-border input-lg"
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons users_circle-08"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="手机号码..."
                      type="phone"
                    ></Input>
                  </InputGroup>
                  <InputGroup
                    className="no-border input-lg"
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons users_circle-08"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="推荐人手机号码(可选)..."
                      type="text"
                    ></Input>
                  </InputGroup>
                </div>
                <div className="modal-footer">
                  <Button
                    color="secondary"
                    type="button"
                    onClick={() => setModalLive(false)}
                  >
                    取消
                  </Button>
                  <Button
                    color="primary"
                    type="submit"
                    onClick={() => setModalLive(false)}
                  >
                    提交
                  </Button>
                </div>
              </Modal>
            </Container>
          </div>
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default JoinPage;
