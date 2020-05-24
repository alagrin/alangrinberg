import React from "react";
import { Switch, Route } from "react-router-dom";
import Blog from "./../Blog";
import BlogPost from "../blog/BlogPost";
import Contact from "./Contact";
import App from "../../App";


const Router = () => (
  <Switch>
    <Route exact path="/" component={App} />
    <Route exact path="/blog" component={Blog} />
    <Route exact path="/contact" component={Contact} />
    <Route path="/blog/:blogPost" component={BlogPost} />
  </Switch>
);

export default Router;
