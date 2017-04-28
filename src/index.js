import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import users from "./users";

let currentUser = users[0];
let filteredUsers = users;

function selectUser(user) {
  currentUser = user;
  render();
};

function filterUsers(name) {
  filteredUsers = users.filter((u)=>{
    return u.first_name === name;
  });
  render();
}

function render() {
  ReactDOM.render( <
    App
    filterUsers={filterUsers}
    users={filteredUsers}
    selectUser={selectUser}
    user={currentUser}/> ,
    document.getElementById("root")
  );
}
render();
