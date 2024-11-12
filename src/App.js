import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UsersList from "./UsersList";
import UserDetails from "./UserDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UsersList />} />
        <Route path="/users/:id" element={<UserDetails />} />
      </Routes>
    </Router>
  );
}

export default App;

/////////
