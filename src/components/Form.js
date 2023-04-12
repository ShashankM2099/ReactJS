import React, { useState } from "react";
import TextInput from "./common/TextInput";
function Form() {
  //implement a form component here
  /**
   * hook with default variables and
   * values need to match the textInput fields as well
   */
  const [values, setValues] = useState({
    firstName: " ",
    lastName: " ",
    email: " ",
    phoneNumber: " ",
    concerns: " ",
  });

  /*
  OnChange takes what values needs to go in there
  value takes what type of value: what are you typing in there
  */
  // single handler to input all user input values
  //implement a name field with the same in the state
  //target must equal value ==> ditto name and syntax
  const handleChange = ({ target }) => {
    setValues({ ...values, [target.name]: target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };
  // starting with false
  const [submitted, setSubmitted] = useState(false);

  return (
    <html className="form">
      <div className="form-container">
        <h1 className="h1tag">Ask us for any questions or concerns</h1>
        <form className="register-form" onSubmit={handleSubmit}>
          {submitted ? (
            <div className="success-msg">
              Success-Thanks for submitting {values.firstName}
              <div className="success-msg">
                We will get back to you shortly...⌚
              </div>
            </div>
          ) : null}

          <TextInput
            disabled={submitted}
            onChange={handleChange}
            name="firstName"
            value={values.firstName}
            className="form-field"
            placeholder="First Name"
            required
          />
          <TextInput
            disabled={submitted}
            value={values.lastName}
            name="lastName"
            onChange={handleChange}
            className="form-field"
            placeholder="Last Name"
          />
          <TextInput
            disabled={submitted}
            value={values.email}
            name="email"
            onChange={handleChange}
            className="form-field"
            placeholder="E-Mail"
          />
          <TextInput
            type="number"
            disabled={submitted}
            name="phoneNumber"
            value={values.phoneNumber}
            onChange={handleChange}
            className="form-field"
            placeholder="Phone Number: +1 "
          />
          <button className="button-89" type="submit">
            Submit
          </button>
        </form>
      </div>
    </html>
  );
}

export default Form;
