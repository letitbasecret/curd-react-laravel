import { useEffect, useState } from "react";
import Header from "./Header";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
// import React from 'react'

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    list();
  }, []);

  async function list() {
    let result = await fetch("http://127.0.0.1:8000/api/list");
    result = await result.json();
    console.warn(result);
    setData(result);
    alert(data);
  }
  async function deleteop(id) {
    let result = await fetch("http://127.0.0.1:8000/api/delete/" + id, {
      method: "delete",
    });
    result = await result.json();
    console.log(result);
    list();
    alert(id);
  }
  async function showData(id) {
    // let result = await fetch("http://127.0.0.1:8000/api/product/" + id);
    // result = await result.json();
    // console.lo/g(result);
    list();
    // alert(id);
  }
  showData();

  return (
    <div>
      <Header />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>File</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>
                <Link to={"/show" + item.id}> {item.name} </Link>
              </td>
              <td> {item.price} </td>
              <td> {item.description} </td>
              <td> {item.file} </td>
              <td>
                {" "}
                <button
                  onClick={() => {
                    deleteop(item.id);
                  }}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
              <td>
                <Link to={"/update/" + item.id}>
                  <button className="btn btn-warning">Edit</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
