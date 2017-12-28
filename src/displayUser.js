import React from "react";
import { UserCard } from "./usercard";
export class Display extends React.Component {
  constructor(props) {
    super(props);
    this.handleDivClick = this.handleDivClick.bind(this);
    this.state = {
      loaded: false,
      specificUser: []
    };
  }
  handleDivClick(user_login){
    let url = "https://api.github.com/users/" + user_login;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({ specificUser: data, loaded: true });
      });
  };
  render() {
    // If the Api fails to respond display default results
    let user = this.props.users.initialState.items;
    let userCounter = this.props.users.users1;
    let apiUpdateCheck = user.map((attr, index) => {
      return (
        <div
          className="user-card"
          key={attr.id}
          onClick={() => {
            this.handleDivClick(attr.login);
          }}
        >
          <div className="user-card-avatar">
            <a href={attr.html_url} target="_blank">
              <img src={attr.avatar_url} />
            </a>
          </div>
          <div className="user-card-bio">
            <p>{attr.login}</p>
          </div>
        </div>
      );
    });
    if (userCounter !== undefined) {
      apiUpdateCheck = userCounter.map((users2, index) => {
        return (
          <div
            className="user-card"
            key={users2.id}
            onClick={() => {
              this.handleDivClick(users2.login);
            }}
          >
            <div className="user-card-avatar">
              <img src={users2.avatar_url} />
            </div>
            <div className="user-card-bio" >
              <p>{users2.login.toUpperCase()}</p>
            </div>
          </div>
        );
      });
    }
    if (this.state.loaded) {
      return (
        <div className="wrap">
          {apiUpdateCheck}
          <div className="big-card-container">
            <UserCard userDat={this.state.specificUser} />
          </div>
        </div>
      );
    } else {
      return <div className="wrap">{apiUpdateCheck}</div>;
    }
  }
}
