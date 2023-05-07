import React, { ReactElement } from "react";
import Menu from "../Menu/Menu";
import "./Main.scss";

function Main(): ReactElement {
  return (
    <main>
      <div className="wrapper">
        <Menu />
      </div>
    </main>
  );
}

export default Main;
