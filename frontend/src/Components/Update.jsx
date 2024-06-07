import { useState, useEffect } from "react";
import Header from "./Header";
import { useNavigate, useParams } from "react-router-dom";

export default function Update() {
  const [inputData, setInput] = useState([]);
  const [data, setData] = useState([]);

  const navigate = useNavigate();
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setData((prev) => ({ ...prev, [name]: value }));
  }
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(data);
    setData(data);
    let result = await fetch("http://127.0.0.1:8000/api/updateProd/" + id, {
      method: "put",
      body: JSON.stringify(data),
    });
    result = await result.json();
    console.log(result);
    navigate("/");
  }
  let { id } = useParams();
  useEffect(() => {
    async function updateData() {
      let result = await fetch("http://127.0.0.1:8000/api/update/" + id, {
        method: "post",
      });
      result = await result.json();
      console.log(result);
      setInput(result);
    }
    updateData();
  }, []);

  return (
    <>
      <Header />
      <div className="col-lg-6 m-5 offset-lg-4">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            defaultValue={inputData.name}
            placeholder="name"
            onChange={handleChange}
            className="form-control m-3"
          />
          <input
            type="text"
            name="price"
            defaultValue={inputData.price}
            placeholder="price"
            onChange={handleChange}
            className="form-control m-3"
          />
          <input
            type="text"
            name="description"
            defaultValue={inputData.description}
            placeholder="description"
            onChange={handleChange}
            className="form-control m-3"
          />
          <input
            type="file"
            name="file"
            defaultValue={inputData.file}
            placeholder="file"
            onChange={handleChange}
            className="form-control m-3"
          />
          <button type="submit" className="btn btn-dark ">
            Update
          </button>
        </form>
      </div>
    </>
  );
}
