import React, { useState, useEffect } from "react";
import "./App.css";

function FirstUserData() {
  const [table1, setTable1] = useState([]);
  const [loading, setloading] = useState(false);
  const [Data, setData] = useState([]);

  async function fetchData() {
    const res = await fetch("http://localhost:3001/data");
    console.log(res);
    const data = await res.json();
    console.log(data);
    setTable1(Object.keys(data[0]));

    setData(data);
    setloading(false);
  }
  useEffect(() => {
    setloading(true);
    fetchData();
  }, []);
  if (loading === true) {
    return <h1>loading</h1>;
  }

  return (
    <div className="data__wrapper">
      <h1>Hello There first user </h1>
      <table>
        <thead>
          <tr>
            {table1.map((item) => (
              <th>{item}</th>
            ))}
            {/* <th>Title</th>
            <th>Name</th>
            <th>Width</th>
            <th>Height</th> */}
          </tr>
        </thead>
        <tbody>
          {Data.map((user, key) => {
            return (
              <tr>
                <td>{user.title}</td>
                <td>{user.name}</td>
                <td>{user.width}</td>
                <td>{user.height}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default FirstUserData;
