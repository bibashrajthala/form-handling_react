import { Form, Button } from "react-bootstrap";
import { useState } from "react";

const LoginForm = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    // console.log("event :", e);
    // console.log("e.target :", e.target);
    // console.dir("e.target :", e.target);

    if (e.target.name === "rememberMe") {
      setData((prevState) => ({
        ...prevState,
        rememberMe: !data.rememberMe,
      }));
    } else {
      const { value } = e.target; // value is a property in e.target object which is destructured
      // or, same
      // const value = e.target.value;
      // console.log("e.target.value :", value);

      const name = e.target.name;
      // console.log("e.target.name :", name);
      // console.log("type of e.target.name :", typeof name);

      setData((prevState) => ({
        ...prevState,
        [name]: value, // we put variable as key inside [] otherwise here, name will be taken as string instead of variable
        //or, directly do
        // [e.target.name]: e.target.value,
      }));
    }

    //OR,

    /*
    // here prevState (can name anything ) i.e parameter in callback of setData() is the state value(here object) previously.
    if (e.target.name === "email") {
      setData((prevState) => ({
        ...prevState,
        email: e.target.value,
      }));

      // dont do this this will put initial default values in other keys
      //   setData({
      //     email: e.target.value,
      //   });
    } else if (e.target.name === "password") {
      setData((prevState) => ({
        ...prevState,
        password: e.target.value,
      }));

      //   setData({
      //     password: e.target.value,
      //   });
    } else {
      setData((prevState) => ({
        ...prevState,
        rememberMe: !data.rememberMe,
      }));

      //   setData({
      //     rememberMe: !loginParameters.rememberMe,
      //   });
    }

    */
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(data);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={handleChange}
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
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Check me out"
            name="rememberMe"
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};
export default LoginForm;
