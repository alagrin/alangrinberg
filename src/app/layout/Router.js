import React from "react";
import { Switch, Route } from "react-router-dom";
import Blog from "./../Blog";
import BlogPost from "../blog/BlogPost";
import Contact from "./Contact";
import Home from "../Home";


const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/blog" component={Blog} />
    <Route exact path="/contact" component={Contact} />
    <Route path="/blog/:blogPost" component={BlogPost} />
  </Switch>
);

export default Router;
