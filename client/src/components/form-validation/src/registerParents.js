import React, { Component } from "react";
import "./App.css";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);


const numberRegex = RegExp(
  /^[0-9]*$/
);


function formValid({ formErrors, ...rest }) {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: null,
      secondName: null,
      email: null,
      street:null,
      number:null,
      postalCode: null,
      city: null,
      phone: null,
      password: null,
      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        street:"",
        number:"",
        postalCode:"",
        city:"",
        phone:"",
        password: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        First Name: ${this.state.firstName}
        Last Name: ${this.state.lastName}
        Email: ${this.state.email}
        Street: ${this.state.street}
        Number: ${this.state.number}
        Postal Code: ${this.state.postalCode}
        City: ${this.state.city}
        Phone: ${this.state.city}
        Password: ${this.state.password}
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 2 ? "minimum 2 characters" : "";
        break;
      case "lastName":
        formErrors.lastName =
          value.length < 2 ? "minimum 2 characters" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
        case "street":
        formErrors.street =
          value.length < 5 ? "minimum 5 characters" : "";
        break;
        case "number":
        formErrors.number =
          value.length < 1 ? "minimum 1 character" : "";
        break;
        case "postalCode":
          formErrors.postalCode = "";
          if (!numberRegex.test(value)) {
            formErrors.postalCode = "only numbers";
          }
          if (value.length !== 5 ) {
            formErrors.postalCode += " must be 5 digits";
          }
        break;
        case "city":
        formErrors.city =
          value.length < 2 ? "minimum 2 characters" : "";
        break;
        case "phone":
        formErrors.phone =
          value.length < 10 ? "minimum 10 characters" : "";
        break;
      case "password":
        formErrors.password =
          value.length < 8 ? "minimum 8 characters" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Register</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="firstName">
              <label htmlFor="firstName">First Name</label>
              <input
                className={formErrors.firstName.length > 0 ? "error" : null}
                placeholder="First Name"
                type="text"
                name="firstName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.firstName.length > 0 && (
                <span className="errorMessage">{formErrors.firstName}</span>
              )}
            </div>
            <div className="lastName">
              <label htmlFor="lastName">Last Name</label>
              <input
                className={formErrors.lastName.length > 0 ? "error" : null}
                placeholder="Last Name"
                type="text"
                name="lastName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.lastName.length > 0 && (
                <span className="errorMessage">{formErrors.lastName}</span>
              )}
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                className={formErrors.email.length > 0 ? "error" : null}
                placeholder="Email"
                type="email"
                name="email"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>
            <div className="street">
              <label htmlFor="street">Street</label>
              <input
                className={formErrors.street.length > 0 ? "error" : null}
                placeholder="Street"
                type="text"
                name="street"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.street.length > 0 && (
                <span className="errorMessage">{formErrors.street}</span>
              )}
            </div>

            <div className="number">
              <label htmlFor="number">Number</label>
              <input
                className={formErrors.number.length > 0 ? "error" : null}
                placeholder="Number"
                type="text"
                name="number"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.number.length > 0 && (
                <span className="errorMessage">{formErrors.number}</span>
              )}
            </div>

            <div className="postalCode">
              <label htmlFor="postalCode">Postal Code</label>
              <input
                className={formErrors.postalCode.length > 0 ? "error" : null}
                placeholder="Postal Code"
                type="text"
                name="postalCode"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.postalCode.length > 0 && (
                <span className="errorMessage">{formErrors.postalCode}</span>
              )}
            </div>
            <div className="city">
              <label htmlFor="city">City</label>
              <input
                className={formErrors.city.length > 0 ? "error" : null}
                placeholder="City"
                type="text"
                name="city"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.city.length > 0 && (
                <span className="errorMessage">{formErrors.city}</span>
              )}
            </div>
            <div className="phone">
              <label htmlFor="phone">Phone</label>
              <input
                className={formErrors.phone.length > 0 ? "error" : null}
                placeholder="Phone"
                type="text"
                name="phone"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.phone.length > 0 && (
                <span className="errorMessage">{formErrors.phone}</span>
              )}
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                className={formErrors.password.length > 0 ? "error" : null}
                placeholder="Password"
                type="password"
                name="password"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </div>
            <div className="createAccount">
              <button type="submit">Create Account</button>
              <small>Already have an account?</small>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
