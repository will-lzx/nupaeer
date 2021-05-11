import React from "react";

// reactstrap components
import {
  Button,
  Modal,
  Container, 
  Row, 
  Col } from "reactstrap";



// core components

function Order() {
  const [modalLive, setModalLive] = React.useState(false);
  return (
    <>
      <div className="section">
        <Container className="text-left">
          <p className="category">订单</p>
          <Row>
            <Col lg="8" md="12">
              <Button
                color="info"
                onClick={() => setModalLive(true)}
              >
                待收货
              </Button>
              <Button
                color="info"
                onClick={() => setModalLive(true)}
              >
                我的订单
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
                <h5>Order1</h5>
              </div>
              <div>
                <h5>Order2</h5>
              </div>
            </div>
          </Modal>
        </Container>
      </div>
    </>
  );
}

export default Order;
