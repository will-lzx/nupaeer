import React, {useRef} from "react";

import cloudbase from "@cloudbase/js-sdk";

// reactstrap components
import {
  Button,
  Input,
  InputGroup,
  InputGroupText,
  Container, 
  InputGroupAddon
  } from "reactstrap";



// core components

function Order() {

  let [disable, setDiableLive] = React.useState(false)

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

  const username = useRef("")
  const phone = useRef("")
  const delegate_phone = useRef("")

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
    setDiableLive(true)
    if(!username.current.value)
    {
      alert('姓名不能为空')
      setDiableLive(false)
      return
    }

    if(!phone.current.value){
      alert('电话号码不能为空')
      setDiableLive(false)
      return
    }

    // login first
    await login()

    // user query
    var query_result = await user_query()

    setDiableLive(false)
    
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
  }

  return (
    <>
      <div className="section">
        <Container className="text-left">
        <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLiveLabel">
              欢迎您加入代理
            </h5>
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
                  <i className="now-ui-icons users_single-02"></i>
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
              disabled={disable}
              toggle={() => setDiableLive(false)}
              href='/join-page'
            >
              返回
            </Button>
            <Button
              color="primary"
              type="submit"
              disabled={disable}
              toggle={() => setDiableLive(false)}
              onClick={() => submit()}
            >
              提交
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Order;
