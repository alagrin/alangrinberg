import React, { Component, Fragment } from "react";
import * as contentful from "contentful";
import BlogItem from "./blog/BlogItem";
import PageHeader from "../components/PageHeader";
import PageContent from "../components/PageContent";

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
        <PageHeader color="is-info" title="Code Blog">
          A Computer Science student's <strong>Programming and UX</strong> blog,
          with hopefully some useful and entertaining pieces. This blog is a
          chronological mix of posts on React, Java, Python, exploration of
          machine learning topics as well as my{" "}
          <strong>project walkthroughs</strong>.
        </PageHeader>
        <br />
        <PageContent>
          {this.state.posts.map(({ fields }, i) => (
            <BlogItem key={i} {...fields} />
          ))}
        </PageContent>
      </Fragment>
    );
  }
}

export default Blog;
