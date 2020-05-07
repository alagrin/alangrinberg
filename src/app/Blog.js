import React, { Component, Fragment } from "react";
import * as contentful from "contentful";
import BlogItem from "./blog/BlogItem";

class Blog extends Component {
  state = {
    posts: [],
  };

  client = contentful.createClient({
    space: "4iv3l7hmky4k",
    accessToken: "YIWfUNaGJPCxRyu8OxoTpivJRJ_NOPR-YviUjkGyvZs",
  });

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts = () => {
    this.client.getEntries().then((response) => {
      let items = response.items;
      this.setState({
        posts: items,
      });
    });
  };

  render() {
    return (
      <Fragment>
        <p>This is a blog page</p>
        <br />
        {this.state.posts.map(({ fields }, i) => (
          <BlogItem key={i} {...fields}/>
        ))}
      </Fragment>
    );
  }
}

export default Blog;
