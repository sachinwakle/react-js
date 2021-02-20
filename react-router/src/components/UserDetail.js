import React, { useEffect, useState } from "react";
import "../App.css";
function UserDetail({ match }) {
  useEffect(() => {
    fetchItem();
  }, []);

  const [user, setUser] = useState({});

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://jsonplaceholder.typicode.com/users/${match.params.id}`
    );
    const item = await fetchItem.json();
    console.log(item);
    setUser(item);
  };
  return (
    <div>
      <h1 style={{ color: "crimson", minHeight: "9vh" }}>User Details</h1>
      <h2>{user.username}</h2>
      <table className="user-details">
        <tbody>
          <tr>
            <td>
              <strong>Name:</strong>
            </td>
            <td>{user.name}</td>
          </tr>
          <tr>
            <td>
              <strong>Email:</strong>
            </td>
            <td>{user.email}</td>
          </tr>
          <tr>
            <td>
              <strong>Website:</strong>
            </td>
            <td>{user.website}</td>
          </tr>
          <tr>
            <td>
              <strong>Phone:</strong>
            </td>
            <td>{user.phone}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default UserDetail;
