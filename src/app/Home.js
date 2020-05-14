import React from "react";
import {Card, CardBody, CardImg, Container} from "reactstrap";

const Home = () => {
  return (
    <Container>
      <h1>Welcome to my Portfolio Site</h1>

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
        <Card>
            <CardImg src="./assets/template.jpg"></CardImg>
            <CardBody></CardBody>
        </Card>
          <div className="card">
            <img
              className="card-image"
              src="./assets/template.jpg"
              alt="trivia game"
            />
            <div className="card-content">
              <h5 className="card-title">Trivia App</h5>
              <p className="card-text">
                Coded with React as well as reactstrap for styling, this app
                works with an API and user interaction for a casual game
                experience
              </p>
              <a id="project-link" href="/" className="card-link">
                Card link
              </a>
            </div>

        </div>
      </div>
      <div className="card">
        <img
          className="card-img-top"
          src="./assets/template.jpg"
          alt="project preview"
        />
        <div className="card-body">
          <h5 className="card-title">NLP Project</h5>
          <p className="card-text">Pending...</p>
          <a id="project-link" href="/" className="card-link">
            Card link
          </a>
        </div>
      </div>
      <div className="card">
        <img
          className="card-img-top"
          src="./assets/template.jpg"
          alt="project preview"
        />
        <div className="card-body">
          <h5 className="card-title">Personal Site</h5>
          <p className="card-text">Pending...</p>
          <a id="project-link" href="/" className="card-link">
            Card link
          </a>
        </div>
      </div>
      <div className="card">
        <img
          className="card-img-top"
          src="./assets/template.jpg"
          alt="project preview"
        />
        <div className="card-body">
          <h5 className="card-title">COVID Portal</h5>
          <p className="card-text">Link pending...</p>
          <a id="project-link" href="/" className="card-link">
            Card link
          </a>
        </div>
      </div>

      <div id="resume-card" className="contact card">
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
                aria-describedby="emailHelp"
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

      <footer className="footer text-center">
        <div className="container">
          <span className="text-muted">
            &copy; Alan Grinberg - Seattle - 2020
          </span>
        </div>
      </footer>
    </Container>
  );
};
export default Home;
