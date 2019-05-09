import React from "react";
import "./App.css";
import MainCP from './components/page/Main'
import BageCP from './components/page/Bage'
// import FunctionCP from "./components/example/FunctionComponent";
// import ClassCP from "./components/example/ClassComponent";

const App: React.FC = () => {
  return (
    <div className="app">
      <div className="col-7">
        <MainCP/>
      </div>
      <div className="col-3">
        <BageCP/>
      </div>
    </div>
  );
};

export default App;
