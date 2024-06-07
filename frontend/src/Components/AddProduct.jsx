import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";

export default function AddProduct() {
  const [inputData, setInput] = useState({
    name: "",
    price: "",
    description: "",
    file: "",
  });
  const navigate = useNavigate();
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setInput((prev) => ({ ...prev, [name]: value }));
  }
  async function handleSubmit(e) {
    e.preventDefault();
    console.warn(inputData);
    let result = await fetch("http://127.0.0.1:8000/api/add", {
      method: "post",
      headers: {
        "content-type": "appliction/json",
        accept: "application/json",
      },
      body: JSON.stringify(inputData),
    });
    result = await result.json();
    console.warn(result);
    navigate("/");
    alert("add successfully");
  }
  return (
    <>
      <Header />
      <div className="col-lg-6 m-5 offset-lg-4">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={inputData.name}
            placeholder="name"
            onChange={handleChange}
            className="form-control m-3"
          />
          <input
            type="text"
            name="price"
            value={inputData.price}
            placeholder="price"
            onChange={handleChange}
            className="form-control m-3"
          />
          <input
            type="text"
            name="description"
            value={inputData.description}
            placeholder="description"
            onChange={handleChange}
            className="form-control m-3"
          />
          <input
            type="file"
            name="file"
            value={inputData.file}
            placeholder="file"
            onChange={handleChange}
            className="form-control m-3"
          />
          <button type="submit" className="btn btn-dark ">
            AddProduct
          </button>
        </form>
      </div>
    </>
  );
}
