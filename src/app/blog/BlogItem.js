import React, { Fragment } from "react";

const BlogItem = (props) => (
  <Fragment>
    <h1>{props.title}</h1>
    <p>{props.content}</p>
  </Fragment>
);

export default BlogItem;
