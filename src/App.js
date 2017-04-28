import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import UserDetail from "./components/UserDetail";
import ListOfUsers from "./components/ListOfUsers";
import CreateUser from "./components/CreateUser";

function App(props) {
  return (
    <div className="App">
      <ListOfUsers
        filterUsers={props.filterUsers}
        users={props.users}
        selectUser={props.selectUser} />
      <UserDetail user={props.user}/>
      <CreateUser />
    </div>
  );
}

export default App;
