import React from "react";
import UserInfo from "./UserInfo.js";

function UserDetail(props) {
  const {user} = props;
  const {avatar} = user;
  return (

    <div>
      <UserInfo user={props.user} />

      <img src={avatar} />
    </div>
  );
}


export default UserDetail;
