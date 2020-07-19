import React from "react";
import Directory from "../../components/directory/directory.component";
import "./homepage.styles.scss";

const Homepage = () => {
  return (
    <div classNam="homepage">
      <h1>Welcome to my shop page</h1>
      <Directory />
    </div>
  );
};

export default Homepage;
