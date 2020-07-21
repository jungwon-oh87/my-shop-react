import React from "react";
import Homepage from "./pages/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";

import "./App.css";

const HatsPage = (props) => {
  console.log("props: ", props);
  return <h1>HatsPage...</h1>;
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
