import React from "react";
import "./App.css";
import data from "./data.json";
import User from "./components/User";

function App() {
  return (
    <div className="App">
      <h1>ALL USERS</h1>
      {data.users.map((user, index) => (
        <User key={index} name={user.first_name} email={user.email} />
      ))}
    </div>
  );
}

export default App;
