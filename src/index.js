import React from "react";
import ReactDOM from "react-dom";
import { Display } from "./displayUser";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.getApi = this.getApi.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      query: null,
      users1: [],
      initialState: {
        items: [
          {
            login: "tom",
            id: 748,
            avatar_url: "https://avatars1.githubusercontent.com/u/748?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/tom",
            html_url: "https://github.com/tom",
            followers_url: "https://api.github.com/users/tom/followers",
            following_url:
              "https://api.github.com/users/tom/following{/other_user}",
            gists_url: "https://api.github.com/users/tom/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/tom/starred{/owner}{/repo}",
            subscriptions_url: "https://api.github.com/users/tom/subscriptions",
            organizations_url: "https://api.github.com/users/tom/orgs",
            repos_url: "https://api.github.com/users/tom/repos",
            events_url: "https://api.github.com/users/tom/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/tom/received_events",
            type: "User",
            site_admin: false,
            score: 61.322227
          },
          {
            login: "mojombo",
            id: 1,
            avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/mojombo",
            html_url: "https://github.com/mojombo",
            followers_url: "https://api.github.com/users/mojombo/followers",
            following_url:
              "https://api.github.com/users/mojombo/following{/other_user}",
            gists_url: "https://api.github.com/users/mojombo/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/mojombo/subscriptions",
            organizations_url: "https://api.github.com/users/mojombo/orgs",
            repos_url: "https://api.github.com/users/mojombo/repos",
            events_url: "https://api.github.com/users/mojombo/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/mojombo/received_events",
            type: "User",
            site_admin: false,
            score: 57.22769
          },
          {
            login: "tmcw",
            id: 32314,
            avatar_url: "https://avatars2.githubusercontent.com/u/32314?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/tmcw",
            html_url: "https://github.com/tmcw",
            followers_url: "https://api.github.com/users/tmcw/followers",
            following_url:
              "https://api.github.com/users/tmcw/following{/other_user}",
            gists_url: "https://api.github.com/users/tmcw/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/tmcw/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/tmcw/subscriptions",
            organizations_url: "https://api.github.com/users/tmcw/orgs",
            repos_url: "https://api.github.com/users/tmcw/repos",
            events_url: "https://api.github.com/users/tmcw/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/tmcw/received_events",
            type: "User",
            site_admin: false,
            score: 42.37203
          },
          {
            login: "twilson63",
            id: 21292,
            avatar_url: "https://avatars3.githubusercontent.com/u/21292?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/twilson63",
            html_url: "https://github.com/twilson63",
            followers_url: "https://api.github.com/users/twilson63/followers",
            following_url:
              "https://api.github.com/users/twilson63/following{/other_user}",
            gists_url: "https://api.github.com/users/twilson63/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/twilson63/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/twilson63/subscriptions",
            organizations_url: "https://api.github.com/users/twilson63/orgs",
            repos_url: "https://api.github.com/users/twilson63/repos",
            events_url:
              "https://api.github.com/users/twilson63/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/twilson63/received_events",
            type: "User",
            site_admin: false,
            score: 40.103058
          },
          {
            login: "tomdale",
            id: 90888,
            avatar_url: "https://avatars2.githubusercontent.com/u/90888?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/tomdale",
            html_url: "https://github.com/tomdale",
            followers_url: "https://api.github.com/users/tomdale/followers",
            following_url:
              "https://api.github.com/users/tomdale/following{/other_user}",
            gists_url: "https://api.github.com/users/tomdale/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/tomdale/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/tomdale/subscriptions",
            organizations_url: "https://api.github.com/users/tomdale/orgs",
            repos_url: "https://api.github.com/users/tomdale/repos",
            events_url: "https://api.github.com/users/tomdale/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/tomdale/received_events",
            type: "User",
            site_admin: false,
            score: 39.998817
          }
        ]
      }
    };
  }
  getApi(e) {
    e.preventDefault();
    let url = "https://api.github.com/search/users?q=" + this.state.query;
    if (this.state.query !== null) {
      fetch(url)
        .then(res => res.json())
        .then(data => {
          this.setState({ users1: data.items.slice(0, 5) });
        });
    } else {
      url = "https://api.github.com/search/users?q=tom";
      fetch(url)
        .then(res => res.json())
        .then(data => {
          this.setState({ users1: data.items.slice(0, 5) });
        });
    }
  }
  handleChange(e) {
    this.setState({ query: e.target.value });
  }
  render() {
    return (
      <div className="container">
        <div className="search-bar">
          <form className="user-submit" onSubmit={e => this.getApi(e)}>
            <input
              type="text"
              onChange={this.handleChange}
              value={this.state.query}
            />
            <input type="submit" value="Search" />
          </form>
        </div>
        <Display users={this.state} callUser={this.getApi} />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
