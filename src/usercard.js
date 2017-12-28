import React from "react";
let text = {
  "font-size": "2em"
};
let pStyle = {
  "font-size": "1.7em"
};

export class UserCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="big-user-card">
        <div className="big-user-avatar">
          <a href={this.props.userDat.html_url} target="_blank">
            <img src={this.props.userDat.avatar_url} />
          </a>
        </div>
        <div className="big-user-card-bio">
          <p id="web-name">{this.props.userDat.name}</p>
          <div className="followers">
            <p style={text}> FOLLOWERS</p>
            <p style={pStyle}>{this.props.userDat.followers}</p>
          </div>
          <div className="following">
            <p style={text}> FOLLOWING</p>
            <p style={pStyle}>{this.props.userDat.following}</p>
          </div>
          <div className="repos">
            <p style={text}> REPOS </p>
            <p style={pStyle}>{this.props.userDat.public_repos}</p>
          </div>
        </div>
        <div className="Clear" />
      </div>
    );
  }
}
