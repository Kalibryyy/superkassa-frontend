import React from "react";
import "./Button.css";
import socket from '../../socket';

function Button() {
  const [isBtnPressed, setIsBtnPressed] = React.useState(null);

  React.useEffect(() => {
    const cb = state => setIsBtnPressed(state);
    socket.on('button_state', cb)
    return () => socket.off('button_state', cb)
  }, []);

  console.log(isBtnPressed);

  function handlePressBtn() {
    setIsBtnPressed(!isBtnPressed);
    socket.emit('button_state', !isBtnPressed);
  }

  return (
    <main className="main">
      <button
        onClick={handlePressBtn}
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
