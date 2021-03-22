import React from "react";
import User from "../../components/User.js";
const authIndexPage = () => {
  return (
    <div>
      <h1>The Auth Page</h1>
      <User name="amanpreet" age={28} />
    </div>
  );
};

export default authIndexPage;
