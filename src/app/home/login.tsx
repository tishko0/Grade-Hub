import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
const [userName, setUserName] = useState('');
const [userType, setUserType] = useState('Admin');
const [password, setPassword] = useState('');
const [message, setMessage] = useState('');
const navigate = useNavigate();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', {
        userType,
        userName,
        password,
      });
      setMessage(response.data.message);
      if (response.data.success) {
        if(userType === 'Admin') {
          // Redirect to admin page
        } else if(userType === 'Student') {
          navigate('/student');
        } else if(userType === 'Teacher') {
          navigate('/teacher');
        }
      } else {
        setMessage('Invalid credentials');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setMessage('Server error');
    }

    // Clear the values
    setUserName('');
    setPassword('');

  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="userType">User Type:</label>
            <select
              id="userType"
              value={userType}
              onChange={(e) => {
                setUserType(e.target.value)
                setUserName('')
                setPassword('')
              }}
            >
              <option value="Admin">Admin</option>
              <option value="Student">Student</option>
              <option value="Teacher">Teacher</option>
            </select>
          </div>
          <div>
            <label htmlFor="userName">Username:</label>
            <input
              type="text"
              id="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className='form-button'>Login</button>
          <button type='button' className='form-button' onClick={()=> navigate('/register')}>Register</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default Login;
