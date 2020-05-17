import React from "react";
import "../styles/styles.css";

const Home = () => {
  return (
    <body className="container has-navbar-fixed-top">
      <h1 className="text-center">Welcome to my Portfolio Site</h1>

      <div className="text-left">
        <h2>My Bio</h2>
        <p id="intro">
          Currently, I'm at Computer Science Master's Student at Northeastern
          University, based in Seattle. Technology has been a passion of mine
          since my days tinkering around with hardware on my desktop Dell
          computer as a kid. Eventually, I decided to jump into computer science
          after years of work in sales and customer success. What you will see
          ahead are works that showcase my ongoing efforts to excel in full
          stack software engineering. Thanks for visiting!
          <br />
          <br />A proactive individual seeking a role as a Software Engineer,
          proficient in the building of modern apps with React, Java, and
          Python. Additional areas of experience include the creation of machine
          learning models and aesthetic/design principles. Passionate about
          modern applications of AI and data mining for a better life.
        </p>
      </div>
      <div>
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

      <div className="works">
        <h2>Recent Work</h2>
        <div className="columns">
          <div className="column">
            <div className="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img
                    src={require("./assets/template.jpg")}
                    alt="Placeholder"
                  />
                </figure>
              </div>
              <div class="card-content">
                <div class="content">
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
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img
                    src={require("./assets/template.jpg")}
                    alt="Placeholder"
                  />
                </figure>
              </div>
              <div class="card-content">
                <div class="content">
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
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img
                    src={require("./assets/template.jpg")}
                    alt="Placeholder"
                  />
                </figure>
              </div>
              <div class="card-content">
                <div class="content">
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
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img
                    src={require("./assets/template.jpg")}
                    alt="Placeholder"
                  />
                </figure>
              </div>
              <div class="card-content">
                <div class="content">
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

      <div className="contact container">
        <div className="card-body">
          <h5 className="card-title text-center">Contact</h5>
          <p className="card-text text-center">Feel free to reach out below!</p>
          <hr />
          <form>
            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter email"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="John Smith"
              />
            </div>
            <div className="form-group">
              <label>Tel:</label>
              <input
                type="tel"
                className="form-control"
                id="telephone"
                placeholder="4158157775"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </body>
  );
};

export default Home;
