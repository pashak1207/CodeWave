import React, { ReactElement } from "react";
import Menu from "./Components/Menu/Menu";
import Main from "./Components/Main/Main";
import Right from "./Components/Right/Right";

function App(): ReactElement {
  return (
    <div className="App">
      <Menu />
      <Main />
      <Right />
    </div>
  );
}

export default App;
