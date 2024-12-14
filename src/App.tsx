import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Dashboard from './pages/Dashboard';
import './App.css';
import { User } from './types';

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <Router>
      <div className="app">
        <nav>
          <ul>
            {users.map(user => (
              <li key={user.id}>
                <Link to={`/users/${user.id}`}>User {user.id} </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Routes>
          <Route path="/users/:userId" element={<Dashboard />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App; 