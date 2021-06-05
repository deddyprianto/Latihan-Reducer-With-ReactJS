import React from "react";
import { Container, Button } from "@material-ui/core";
import { Email } from "@material-ui/icons";
import { saveInfLogin } from "../action";
import { useDispatch } from "react-redux";
function Login(props) {
  const dispatch = useDispatch();
  const handlerLogin = async (e) => {
    e.preventDefault();
    dispatch(saveInfLogin());
    props.history.push("/shop");
  };
  return (
    <Container fixed>
      <div className="container__login">
        <h3>Haloo Selamat datang di dalam WEBSITE belanja Online</h3>

        <div className="container__gambar">
          <img src="./img/shop.png" alt="" />
        </div>
        <div className="container__button">
          <Email />
          <Button onClick={handlerLogin}>Login With Gmail</Button>
        </div>
      </div>
    </Container>
  );
}

export default Login;
