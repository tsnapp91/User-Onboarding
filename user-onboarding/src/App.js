import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import Form from "./Form";
import schema from "./Validation/formSchema";
import * as yup from "yup";

const intialFormValues = {
  username: "",
  email: "",
  password: "",
  tos: false,
};

const intialFormErrors = {
  username: "",
  email: "",
  password: "",
  tos: "",
};

function App() {
  const [formValues, setFormValues] = useState(intialFormValues);
  const [formErrors, setFormErrors] = useState(intialFormErrors);
  const [user, setUser] = useState([]);

  const handleSubmit = () => {
    axios
      .post(`https://reqres.in/api/users`, formValues)
      .then((res) => {
        setUser([res.data, ...user]);
      })
      .catch((err) => console.log.error(err));
  };

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

  const handleChange = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div className="App">
      <Form
        values={formValues}
        change={handleChange}
        errors={formErrors}
        submit={handleSubmit}
      />
      {user.map((user) => {
        <div key={user.id}>
          <p>{user.createdAt}</p>
          <p>{user.email}</p>
        </div>;
      })}
    </div>
  );
}

export default App;
