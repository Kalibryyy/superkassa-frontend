import React from "react";
import "./Button.css";

function Button({onPressBtn, isBtnPressed}) {

  return (
    <main className="main">
      <button
        onClick={onPressBtn}
        className={
          isBtnPressed ? `button button_pressed` : `button button_unpressed`
        }
      >
        {isBtnPressed ? `ON` : `OFF`}
      </button>
    </main>
  );
}

export default Button;
