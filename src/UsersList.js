import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [gender, setGender] = useState("all");
  const navigate = useNavigate();

  // Fetcovanje korisnika usera sa ili bez filtera za pol
  useEffect(() => {
    const endpoint =
      gender !== "all"
        ? `https://randomuser.me/api/?results=10&gender=${gender}`
        : `https://randomuser.me/api/?results=10`;

    const fetchData = async () => {
      try {
        const response = await fetch(endpoint);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        const filteredData = data.results.slice(0, 10);

        setUsers(filteredData);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [gender]);

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleUserClick = (user) => {
    localStorage.setItem("selectedUser", JSON.stringify(user));
    navigate(`/users/${user.login.uuid}`);
  };

  return (
    <div>
      <h1>User List</h1>
      <label>
        Filter by gender:
        <select value={gender} onChange={handleGenderChange}>
          <option value="all">All</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
      </label>

      {users.map((user) => (
        <div key={user.login.uuid}>
          <p>
            {user.name.first} {user.name.last}
          </p>
          <button onClick={() => handleUserClick(user)}>View Details</button>
        </div>
      ))}
    </div>
  );
};

export default UsersList;
