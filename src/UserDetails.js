import React from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();
  const user = JSON.parse(localStorage.getItem("selectedUser"));

  // Cekiranje da li user postoji i odgovara ID
  if (!user || user.login.uuid !== id) {
    return <p>User not found or data is missing.</p>;
  }

  return (
    <div>
      <h1>User Details</h1>
      <p>
        Name: {user.name.first} {user.name.last}
      </p>
      <p>Email: {user.email}</p>
      <p>Gender: {user.gender}</p>
      <img src={user.picture.large} alt="User profile" />
    </div>
  );
};

export default UserDetails;
