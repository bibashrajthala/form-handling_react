import { Form, Button } from "react-bootstrap";
import { Component } from "react";

class LoginForm2 extends Component {
  state = {
    email: "",
    password: "",
    rememberMe: false,
  };

  handleChange = (e) => {
    // console.log("e.target :", e.target);

    /*

    if (e.target.name === "rememberMe") {
      this.setState({
        rememberMe: !this.state.rememberMe,
      });
    } else {
      const { value } = e.target; // value is a property in e.target object which is destructured
      // or, same
      // const value = e.target.value;

      const name = e.target.name;

      this.setState({
        [name]: value, // we put variable as key inside [] otherwise here, name will be taken as string instead of variable
        //or, directly do
        // [e.target.name]: e.target.value,
      });
    }

    */

    //OR,

    if (e.target.name === "email") {
      this.setState({
        email: e.target.value,
      });
    } else if (e.target.name === "password") {
      this.setState({
        password: e.target.value,
      });
    } else {
      this.setState({
        rememberMe: !this.state.rememberMe,
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();

    console.log(this.state);
  };

  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={this.handleChange}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Check me out"
              name="rememberMe"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </>
    );
  }
}
export default LoginForm2;
