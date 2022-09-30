import React, { useState } from "react";
import { render } from "react-dom";
import Shop from "./Shop";
import "./output.css";

function App() {
  const [login, setLogin] = useState(false);

  if (login) {
    return (
      <>
        <div clasName="pt-1 w-screen"><Shop />
        <button className="m-2.5 bg-primary text-white border-0 py-4 px-5 min-w-[150]
         text-base rounded cursor-pointer transition-opacity duration-200 ease-out shadow-[1px_1px_1px_rgba(0,0,0,0.2)]
          hover:opacity-80 disabled:opacity-40 disabled:cursor-not-allowed
          active:shadow-[0_0px_rgba(0,0,0,0.2)] active:translate-y-px" onClick={() => setLogin(false)}>
          Выйти
        </button></div>
      </>
    );
  } else {
    return (
      <>
        <div clasName="pt-1 w-screen"><h2>Нужно залогиниться!</h2>
        <button className="m-2.5 bg-primary text-white border-0 py-4 px-5 min-w-[150]
         text-base rounded cursor-pointer transition-opacity duration-200 ease-out shadow-[1px_1px_1px_rgba(0,0,0,0.2)]
          hover:opacity-80 disabled:opacity-40 disabled:cursor-not-allowed
          active:shadow-[0_0px_rgba(0,0,0,0.2)] active:translate-y-px" onClick={() => setLogin(true)}>
          Войти
        </button></div>
      </>
    );
  }
}

render(<App />, document.querySelector("#root"));
