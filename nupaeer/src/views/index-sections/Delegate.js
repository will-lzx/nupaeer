import React from "react";

// reactstrap components
import { 
  Button,
  Modal,
  Container, 
  Row, 
  Col } from "reactstrap";

// core components

function Delegate() {
  const [modalLive, setModalLive] = React.useState(false);
  return (
    <>
      <div className="section">
        <Container className="text-left">
          <p className="category">代理</p>
          <Row>
            <Col lg="4" md="12">
              <h5 className="title">我的下级代理</h5>
              <Button
                color="info"
                onClick={() => setModalLive(true)}
              >
                15
              </Button>
            </Col>
            <Col lg="4" md="12">
              <h5 className="title">预计奖励</h5>
              <Button
                color="info"
                onClick={() => setModalLive(true)}
              >
                30000
              </Button>
            </Col>
          </Row>
          <Modal toggle={() => setModalLive(false)} isOpen={modalLive}>
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLiveLabel">
                待收货
              </h5>
            </div>
            <div className="modal-body">
              <div>
                <h5>代理1</h5>
              </div>
              <div>
                <h5>代理2</h5>
              </div>
            </div>
          </Modal>
        </Container>
      </div>
    </>
  );
}

export default Delegate;
