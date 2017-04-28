import React, {Component} from 'react';
import PropTypes from "prop-types";


class ListOfUsers extends React.Component {
  constructor(props) {
    super();
    this.state = {
      visible: true,
      searchText: "hello"
    };
  }
  render() {
    var buttonText = "Hide"
    var userDivs = "";

    if (this.state.visible) {
      userDivs = this.props.users.map((user) => {
        return <div>

          {user.first_name}
          - {user.last_name}
          <a href="#" onClick={
            (e) => {
              e.preventDefault();
            this.props.selectUser(user);
          }}>
            View
          </a>
        </div>
      });
    } else {
      buttonText = "Show"
      userDivs = "";
    }

    return (
      <div>
        <input onChange={(e) => {
          this.props.filterUsers(e.target.value);
        }}/>
        <button onClick={(e) => {
          this.setState({
            visible: !this.state.visible
          });
        }}>Hide</button>
        {userDivs}
      </div>
    )
  }
}

ListOfUsers.propTypes = {
  users: PropTypes.array.isRequired
};

export default ListOfUsers;
