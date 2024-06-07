import Table from "react-bootstrap/Table";
import Header from "./Header";
import { useState } from "react";

export default function Search() {
  const [data, setData] = useState([]);
  async function search(key) {
    // e.preventDefault();
    // console.log(key);
    if (key.length > 1) {
      let result = await fetch("http://127.0.0.1:8000/api/search" + key);
      result = await result.json();
      console.log(result);
      setData(result);
    }
  }
  return (
    <div>
      <Header />
      <div className="col-lg-6 offset-lg-6  m-5">
        <input
          type="text"
          name="search"
          // value={inputData.search}
          placeholder="Search"
          className="form-controle"
          onChange={(e) => search(e.target.value)}
        />
      </div>
      {data.length > 0 ? (
        <Table striped bordered>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>price</th>
              <th>description</th>
            </tr>
          </thead>
          <tbody>
            {data.map((index, item) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.description}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : null}
    </div>
  );
}
