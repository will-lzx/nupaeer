import React, { useRef } from "react";

// reactstrap components
import {
  Row,
  Col,
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
import cloudbase from "@cloudbase/js-sdk";

function JoinPage() {
  const [modalLive, setModalLive] = React.useState(false);   

  const username = useRef("")
  const phone = useRef("")
  const delegate_phone = useRef("")

  const app = cloudbase.init({
    env: "leadsun-3gdsjeyzd3c7c324"
  });

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

  function inputChange(key, event) {
    switch(key) {
      case "username":
        username.current.value = event.target.value
        break
      case "phone":
        phone.current.value = event.target.value
        break
      case "delegate_phone":
        delegate_phone.current.value = event.target.value
        break
      default:
        console.log("set wrong value")
    }
  }

  function login() {
    const auth = app.auth();
    
    const loginState = auth.getLoginState();
    console.log(loginState)
    
    // 1. 建议登录前检查当前是否已经登录
    
      // 2. 请求开发者自有服务接口获取ticket
    app
    .callFunction({
      // 云函数名称
      name: "refresh_ticket",
      // 传给云函数的参数
      data: {
      }
    })
    .then((res) => {
      console.log(res)
      // 3. signin with ticket
      auth.customAuthProvider().signIn(res.result);
    })
    .catch(console.error);
  }

  async function user_insert() {
    var rest = ""
    await app
    .callFunction({
      // 云函数名称
      name: "user_insert",
      // 传给云函数的参数
      data: {
        username: username.current.value,
        phone: phone.current.value,
        delegate_phone: delegate_phone.current.value
      }
    })
    .then((res) => {
      rest = res.result
    })
    return rest
  }

  async function user_query() {
    var rest = ""
    await app
    .callFunction({
      // 云函数名称
      name: "user_query",
      // 传给云函数的参数
      data: {
        phone: phone.current.value
      }
    })
    .then((res) => {
      rest =  res.result
    })
    .catch(console.error);
    return rest
  }

  async function submit() {
    console.log(username.current.value)

    if(!username.current.value)
    {
      alert('姓名不能为空')
      return
    }

    if(!phone.current.value){
      alert('电话号码不能为空')
      return
    }

    // login first
    await login()

    // user query
    var query_result = await user_query()
    
    if (query_result.data.length > 0) {
      alert("您已经申请过代理了，请勿重复申请，直接联系销售总监下单吧")
    } else {
      // user insert
      var insert_result = await user_insert()

      if(insert_result === null) {
        alert("申请代理成功，快去联系销售总监，享受代理商福利吧")
      } else {
        alert(insert_result)
      }
    }
    // set modal live false
    setModalLive(false)
  }
  
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <IndexHeader />
        <div className="section">
          <Container>
            <div className="text-center">
              <h3 className="title">为什么要选择加盟代理电子烟？</h3>
              <Row className="justify-content-md-center">
                <Col lg="4" md="12">
                  <h5 className="title">投资小，回报大</h5>
                  <img className="rounded-circle introduce-img" src={ require("assets/img/money.jpeg") } alt="..."></img>
                </Col>
                <Col lg="4" md="12">
                  <h5 className="title">整个行业处于起步期，机会多</h5>
                  <img className="rounded-circle introduce-img" src={ require("assets/img/future.jpeg") } alt="..."></img>
                </Col>
                <Col lg="4" md="12">
                  <h5 className="title">国家对电子烟的法律法规越来越完善</h5>
                  <img className="rounded-circle introduce-img" src={ require("assets/img/lawyer.jpeg") } alt="..."></img>
                </Col>
              </Row>
            </div>
            <div className="text-center">
              <h3 className="title">为什么要选择LEADSUN？</h3>
              <Row className="justify-content-md-center">
                <Col lg="4" md="12">
                  <h5 className="title">品牌认可度高</h5>
                  <img className="introduce-img" src={ require("assets/img/WechatIMG83.jpeg") } alt="..."></img>
                </Col>
                <Col lg="4" md="12">
                  <h5 className="title">拥有完善的培训体系，提供一对一培训指导, 帮您快速售卖产品</h5>
                  <img className="introduce-img" src={ require("assets/img/training.jpeg") } alt="..."></img>
                </Col>
                <Col lg="4" md="12">
                  <h5 className="title">拥有完整的团队，从设计，生产，销售，到售后服务</h5>
                  <img className="introduce-img" src={ require("assets/img/produce.jpeg") } alt="..."></img>
                </Col>
              </Row>
            </div>
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
                onClick={() => setModalLive(true)}
              >
                立即成为代理
              </Button>
            </div>
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
                    mustwrite="true"
                    onChange={inputChange.bind(this, "username")}
                    ref={username}
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
                    mustwrite="true"
                    onChange={inputChange.bind(this, "phone")}
                    ref={phone}
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
                    onChange={inputChange.bind(this, "delegate_phone")}
                    ref={delegate_phone}
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
                  onClick={() => submit()}
                >
                  提交
                </Button>
              </div>
            </Modal>
          </Container>
        </div>
      </div>
      <DarkFooter />
    </>
  );
}

export default JoinPage;
