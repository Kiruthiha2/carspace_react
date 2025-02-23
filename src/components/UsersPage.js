import React from "react";
import "./Userpage.css";  

const users = [
  { id: "#01", name: "Amelia Tuner", email: "amelia@gmail.com", testDrive: "Yes", phone: "(406) 555-0120", description: "", carSearched: "View" },
  { id: "#01", name: "Amelia Tuner", email: "amelia@gmail.com", testDrive: "", phone: "(406) 555-0120", description: "", carSearched: "View" },
  { id: "#01", name: "Amelia Tuner", email: "amelia@gmail.com", testDrive: "", phone: "(406) 555-0120", description: "", carSearched: "View" },
];

const UserPage = () => {
  return (
    <div className="user-container">
      <table className="user-table">
        <thead>
          <tr>
            <th>#ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Test Drive</th>
            <th>Phone Number</th>
            <th>Description</th>
            <th>Car Searched</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.testDrive}</td>
              <td>{user.phone}</td>
              <td>{user.description}</td>
              <td className="view-button">{user.carSearched}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserPage;
