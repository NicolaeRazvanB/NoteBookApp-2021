import React, { useState } from "react";
import axios from "axios";
export default function Register() {
  const [isRegistering, setRegistering] = useState(false);
  const [validateEmail, setValidateEmail] = useState(false);
  const [validateRegister, setValidateRegister] = useState(false);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    specialty: "",
    password: "",
  });

  const addUser = () => {
    if (
      user.firstName === "" ||
      user.lastName === "" ||
      user.email === "@stud.ase.ro" ||
      user.specialty === "" ||
      user.password === ""
    ) {
      setValidateRegister(true);
      console.log(validateRegister);
    } else {
      if (
        user.email.endsWith("@stud.ase.ro") === false ||
        user.email.endsWith("@stud.ase.ro") === undefined
      )
        setValidateEmail(true);
      else {
        console.log(user);
        axios.post("/api/users", user).then((response) => {
          console.log(response.status);
        });
      }
    }
  };

  return (
    <div>
      <form>
        <label>First Name </label>
        <br />
        <input
          type="text"
          name="firstName"
          id="firstName"
          onChange={(e) => (user.firstName = e.target.value)}
        />
        <br />
        <label>Last Name </label>
        <br />
        <input
          type="text"
          name="lastName"
          id="lastName"
          onChange={(e) => (user.lastName = e.target.value)}
        />{" "}
        <br />
        <label>Email</label>
        <br />
        <input
          type="text"
          name="email"
          id="email"
          onChange={(e) => (user.email = e.target.value)}
        />
        <br />
        {validateEmail && <h6>Email must contain "@stud.ase.ro" domain</h6>}
        <label>College profile </label>
        <br />
        <input
          type="text"
          name="specialty"
          id="specialty"
          onChange={(e) => (user.specialty = e.target.value)}
        />
        <br />
        <label>Password </label>
        <br />
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) => (user.password = e.target.value)}
        />{" "}
        <br />
        {validateRegister && (
          <h6>Please complete all fields for registering domain</h6>
        )}
        <br />
        <input type="submit" value="Register" onClick={addUser} />
        <br />
      </form>
    </div>
  );
}