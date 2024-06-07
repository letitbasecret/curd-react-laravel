import { useState } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const [inputData, setInput] = useState({
    email: "",
    password: "",
  });
  const Navigate = useNavigate();
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  }
  async function handleSubmit(e) {
    e.preventDefault();
    console.warn(inputData);

    let result = await fetch("http://127.0.0.1:8000/api/login", {
      method: "post",
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(inputData),
    });

    result = await result.json();
    console.warn(result);
    localStorage.setItem("user-info", JSON.stringify(result));
    Navigate("/");
    alert("succesfull sign in");
  }
  return (
    <div>
      <Header />
      <div className=" col-lg-4 m-5 offset-lg-4">
        <form className="" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={inputData.email}
            onChange={handleChange}
            className="form-control m-3"
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={inputData.password}
            onChange={handleChange}
            className="form-control m-3"
          />
          <button type="submit" className="btn btn-dark m-3">
            submit
          </button>
        </form>
      </div>
    </div>
  );
}
