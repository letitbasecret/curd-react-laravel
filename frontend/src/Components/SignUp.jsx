import { useState } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [inputData, setInput] = useState({
    name: "",
    password: "",
    email: "",
  });
  const Navigate = useNavigate();

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setInput((values) => ({
      ...values,
      [name]: value,
    }));
  }

  async function submit(e) {
    e.preventDefault();
    console.warn(inputData);
    let result = await fetch("http://127.0.0.1:8000/api/signup", {
      method: "post",
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(inputData),
    });
    result = await result.json();
    console.log("result", result);
    localStorage.setItem("user-data", JSON.stringify(result));
    alert("submit");
    Navigate("/");
    // e.preventDefault();
    // console.warn(inputData);
    // alert("all data inserted");
  }

  return (
    <div>
      <Header />
      <div>
        <form className="col-lg-4 m-4 offset-lg-4" onSubmit={submit}>
          <label htmlFor="name">User Name</label>
          <input
            type="text"
            name="name"
            placeholder="name"
            className="form-control m-3"
            value={inputData.name || ""}
            onChange={handleChange}
          ></input>

          <input
            type="email"
            name="email"
            placeholder="email"
            className="form-control m-3"
            value={inputData.email || ""}
            onChange={handleChange}
          ></input>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="form-control m-3"
            value={inputData.password || ""}
            onChange={handleChange}
          ></input>
          <button type="submit" className="btn btn-dark">
            submit
          </button>
        </form>
      </div>
    </div>
  );
}
