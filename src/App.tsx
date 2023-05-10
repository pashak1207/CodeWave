import React, { ReactElement } from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Menu from "./Components/Menu/Menu";
import Wall from "./Pages/Wall/Wall";

function App(): ReactElement {
  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <Menu />
        <Wall />
      </div>
      <Footer />
    </div>
  );
}

export default App;
