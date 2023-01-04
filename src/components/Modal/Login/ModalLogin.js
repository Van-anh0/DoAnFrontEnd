import React, { useState } from "react";
import "./ModalLogin.scss";
import "../Modal.scss";
import { useDispatch } from "react-redux";
import { loginAPI } from "redux/user/userSlice";

const ModalLogin = ({ handleClickLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    handleClickLogin();
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    let data = {
      email: email,
      password: password,
    };
    dispatch(loginAPI(data));
    handleCloseModal();
  };
  return (
    <div className="modal">
      <div className="modal_container">
        <div className="modal_close" onClick={() => handleCloseModal()}>
          X
        </div>
        <h1>Đăng nhập</h1>
        <div className="login__form">
          <div className="login__form__group">
            <input
              type="email"
              className="login__form__input"
              placeholder="Email"
              onChange={(e) => handleEmail(e)}
            />
            <input
              type="password"
              className="login__form__input"
              placeholder="Password"
              onChange={(e) => handlePassword(e)}
            />
            <button onClick={() => handleLogin()}>Đăng nhập</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModalLogin;
