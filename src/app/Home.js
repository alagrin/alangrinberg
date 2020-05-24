import React from "react";
import "../styles/styles.css";
import IntroView from "../components/IntroView";
import FadeInSection from "../components/FadeInSection";

const Home = () => {
  return (
    <div className="">
      <h1 className="text-center">Welcome to my Portfolio Site</h1>
      <div className="jumbotron" style={{ height: "25vh" }}>
        <IntroView />
      </div>
      <FadeInSection>
        <div className="text-left" style={{height: "100vh"}}>
          <h2>My Bio</h2>
          <p id="intro">
            Currently, I'm at Computer Science Master's Student at Northeastern
            University, based in Seattle. Technology has been a passion of mine
            since my days tinkering around with hardware on my desktop Dell
            computer as a kid. Eventually, I decided to jump into computer
            science after years of work in sales and customer success. What you
            will see ahead are works that showcase my ongoing efforts to excel
            in full stack software engineering. Thanks for visiting!
            <br />
            <br />A proactive individual seeking a role as a Software Engineer,
            proficient in the building of modern apps with React, Java, and
            Python. Additional areas of experience include the creation of
            machine learning models and aesthetic/design principles. Passionate
            about modern applications of AI and data mining for a better life.
          </p>
        </div>
      </FadeInSection>
      <FadeInSection>
      <div style={{height: "100vh"}}>
        <h2>Technology Summary</h2>
        <div className="list-group list-group-flush">
          <div className="row">
            <div className="col">
              <ul>
                <li className="list-group-item">Javascript</li>
                <li className="list-group-item">Python</li>
                <li className="list-group-item">C</li>
                <li className="list-group-item">Java</li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li className="list-group-item">Flask</li>
                <li className="list-group-item">SQL</li>
                <li className="list-group-item">AWS</li>
                <li className="list-group-item">Git</li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li className="list-group-item">Tensorflow</li>
                <li className="list-group-item">UNIX/Linux</li>
                <li className="list-group-item">Sklearn</li>
                <li className="list-group-item">Restful API</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </FadeInSection>
      <FadeInSection>
      <div className="works">
        <h2>Recent Work</h2>
        <div className="columns">
          <div className="column">
            <div className="card">
              <header className="card-header text-center">
                <p className="card-header-title">Covid App</p>
              </header>
              <div className="card-image">
                <figure className="image is-4by3">
                  <img
                    src={require("./assets/template.jpg")}
                    alt="Placeholder"
                  />
                </figure>
              </div>
              <div className="card-content">
                <div className="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                  <a href="#">#css</a> <a href="#">#responsive</a>
                  <br />
                  <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img
                    src={require("./assets/template.jpg")}
                    alt="Placeholder"
                  />
                </figure>
              </div>
              <div className="card-content">
                <div className="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                  <a href="#">#css</a> <a href="#">#responsive</a>
                  <br />
                  <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img
                    src={require("./assets/template.jpg")}
                    alt="Placeholder"
                  />
                </figure>
              </div>
              <div className="card-content">
                <div className="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                  <a href="#">#css</a> <a href="#">#responsive</a>
                  <br />
                  <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img
                    src={require("./assets/template.jpg")}
                    alt="Placeholder"
                  />
                </figure>
              </div>
              <div className="card-content">
                <div className="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                  <a href="#">#css</a> <a href="#">#responsive</a>
                  <br />
                  <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </FadeInSection>
    </div>
  );
};

export default Home;
