import React from "react";
import { useHistory } from "react-router-dom";
function User() {
  let history = useHistory();
  function handleClick() {
    history.push("/somepage");
  }

  return (
    <div>
      User ne
      <span onClick={() => handleClick()}>Go home</span>
    </div>
  );
}

export default User;
