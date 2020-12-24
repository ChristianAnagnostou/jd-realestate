import React, { useState } from "react";

function GetInTouch() {
  const initialState = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  const [formData, setFormData] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const onNameChange = (e) => {
    setFormData({ ...formData, name: e.target.value });
  };

  const onEmailChange = (e) => {
    setFormData({ ...formData, email: e.target.value });
  };
  const onSubjectChange = (e) => {
    setFormData({ ...formData, subject: e.target.value });
  };

  const onMessageChange = (e) => {
    setFormData({ ...formData, message: e.target.value });
  };

  return (
    <div className="GetInTouch">
      <div className="form-container">
        <h1>Contact Me</h1>
        <p>
          I'm happy to answer any questions you have or provide you with an estimate. Just send me a
          message in the form below.
        </p>
        <form id="contact-form" onSubmit={handleSubmit} method="POST">
          <div className="form-group">
            <label htmlFor="name">
              YOUR NAME <span>(required)</span>
            </label>
            <input
              type="text"
              className="form-input"
              required
              value={formData.name}
              onChange={onNameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputEmail">
              EMAIL ADDRESS <span>(required)</span>
            </label>
            <input
              type="email"
              className="form-input"
              aria-describedby="email"
              value={formData.email}
              onChange={onEmailChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">SUBJECT</label>
            <input
              type="text"
              className="form-input"
              value={formData.subject}
              onChange={onSubjectChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">MESSAGE</label>
            <textarea
              className="form-input"
              rows="10"
              cols="50"
              value={formData.message}
              onChange={onMessageChange}
            ></textarea>
          </div>
          <button type="submit" className="form-btn">
            SEND
          </button>
        </form>
      </div>
      {/* <div className="info">
        <p>My info</p>
        <p>650.704.5134</p>
        <p>jdsoldit@pacbell.net</p>
      </div> */}
    </div>
  );
}

export default GetInTouch;
