import React from "react";
import PageHeader from "../components/PageHeader";
import PageContent from "../components/PageContent";
import axios from "axios";
import * as funcs from "rss-to-json";

class Medium extends React.Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts = () => 
    funcs.load("https://medium.com/feed/@alagrin", function(err, rss){
        console.log(JSON.stringify(rss, null, 3));
    })
    // axios.get(
    //   `https://cors.now.sh/https://medium.com/@alagrin/latest?format=json`
    // )
  .then(response => {
      this.setState({
          posts: response.data
      })
  });

  //   setPosts = (response) => {
  //     this.setState({
  //       posts: response,
  //     });
  //   };

  render() {
    return (
      <div>
        <PageHeader color="is-dark" title="Medium">
          Medium is where I tell stories. This site will retain a connection to
          the rest of my content. Exploration of my background and works is all
          on this site. Glad to connect via email or LinkedIn!
          <br />
          <br />
          <a
            className="button is-inverted is-outlined"
            href="https://medium.com/@alagrin"
            target="_blank"
            rel="noopener noreferrer"
          >
            View My Medium
            <span className="icon" style={{ marginLeft: 5 }}>
              <i className="fab fa-lg fa-medium"></i>
            </span>
          </a>
        </PageHeader>
        <PageContent>
          <pre>{JSON.stringify(this.state.posts, null, 2)}</pre>
        </PageContent>
      </div>
    );
  }
}

export default Medium;
