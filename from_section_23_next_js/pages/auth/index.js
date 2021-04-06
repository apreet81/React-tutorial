import React from "react";
import User from "../../components/User.js";
const authIndexPage = (props) => {
  return (
    <div>
      <h1>The Auth Page {props.appName}</h1>
      <User name="amanpreet" age={28} />
    </div>
  );
};

authIndexPage.getInitialProps = (context) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ appName: "Super App (Auth)" });
    }, 1000);
  });
  return promise;
};

export default authIndexPage;
