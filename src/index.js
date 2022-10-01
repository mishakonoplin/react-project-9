import React, { useState } from "react";
import { render } from "react-dom";
import Shop from "./Shop";
import LoginButton from "./LoginButton";
import "./output.css";

function App() {
  const [login, setLogin] = useState(false);

  function handleSetLogin() {
    setLogin(!login)
  }

  if (login) {
    return (
      <>
        <div clasName="pt-1 w-screen"><Shop />
        <LoginButton onSetLogin={handleSetLogin}>Выйти</LoginButton></div>
      </>
    );
  } else {
    return (
      <>
        <div clasName="pt-1 w-screen"><h2>Нужно залогиниться!</h2>
        <LoginButton onSetLogin={handleSetLogin}>Войти</LoginButton></div>
      </>
    );
  }
}

render(<App />, document.querySelector("#root"));
