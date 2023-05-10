import React, { ReactElement } from "react";
import "./Main.scss";
import Menu from "../Menu/Menu";
import Recommendations from "../Recommendations/Recommendations";
import Wall from "../../Pages/Wall/Wall";

function Main(): ReactElement {
  return (
    <main>
      <div className="wrapper">
        <Menu />
        <Wall />
        <Recommendations />
      </div>
    </main>
  );
}

export default Main;
