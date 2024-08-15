import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserList.css'; // Optional: If you want to add custom styles

const UserList = () => {
  const [listOfUser, setListOfUser] = useState([]);

  useEffect(() => {
    // Fetching data from JSONPlaceholder API
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setListOfUser(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="user-list-container">
      <h1>List of Users</h1>
      <ul>
        {listOfUser.map(user => (
          <li key={user.id} className="user-item">
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;