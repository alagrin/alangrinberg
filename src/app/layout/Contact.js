import React from "react";


const Contact = () => {
  return (
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
  );
};

export default Contact;