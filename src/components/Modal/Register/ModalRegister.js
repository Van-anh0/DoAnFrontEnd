import React, { useState } from "react";
import "./ModalRegister.scss";
import "../Modal.scss";
import { authApi } from "actions";

const ModalRegister = ({ handleClickRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleCloseModal = () => {
    handleClickRegister();
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleLogin = () => {
    if (password !== confirmPassword) {
      alert("Mật khẩu không khớp");
      return;
    }
    let data = {
      email: email,
      password: password,
    };
    authApi.register(data).then(() => {
      alert("Đăng ký thành công");
    });
    handleCloseModal();
  };

  return (
    <div className="modal">
      <div className="modal_container">
        <div className="modal_close" onClick={() => handleCloseModal()}>
          X
        </div>
        <h1>Đăng ký</h1>
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
            <input
              type="password"
              className="login__form__input"
              placeholder="confirm_password"
              onChange={(e) => handleConfirmPassword(e)}
            />
            <button onClick={() => handleLogin()}>Đăng ký</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModalRegister;
