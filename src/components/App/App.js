import React from 'react';
import './App.css';
import Button from '../../components/Button/Button';
import * as api from '../../utils/Api';

function App() {
  const [isBtnPressed, setIsBtnPressed] = React.useState();

  React.useEffect(() => {
    setInterval(() => {
      api.getBtnState()
        .then((button) => {
          setIsBtnPressed(button.state);
        })
        .catch(err => console.log(`Error ${err}`))
    }, 2000);
  }, []);

  function handlePressBtn() {
    if (isBtnPressed) {
      api
        .getBtnStateOff()
        .then((button) => {
          setIsBtnPressed(button.state);
        })
        .catch(err => console.log(`Error ${err}`))
    } else {
      api
        .getBtnStateOn()
        .then((button) => {
          setIsBtnPressed(button.state);
        })
        .catch(err => console.log(`Error ${err}`))
    }
  }

  return ( <
    div className = "page" >
    <
    Button onPressBtn = {
      handlePressBtn
    }
    isBtnPressed = {
      isBtnPressed
    }
    />  <
    /div>
  );
}

export default App;