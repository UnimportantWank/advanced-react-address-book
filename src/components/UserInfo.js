import React from "react";

function UserInfo(props) {
  const {user} = props;
  const {first_name, last_name, occupation, phone, address} = user;
  return (

    <div>
      <h3>{first_name} {last_name}</h3>
      <h4>{occupation}</h4>
      <p>{phone}</p>
      <p>{address}</p>
    </div>
  );
}

export default UserInfo;
