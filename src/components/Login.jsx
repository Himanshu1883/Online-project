import React, { useState } from 'react';
import Home from './Home';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const storedEmail = localStorage.getItem('emailData');
  const storedPassword = localStorage.getItem('passwordData');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === storedEmail && password === storedPassword) {
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/home');
    } else {
      setError('Invalid Credentials');
    }
  };

  return (
    <div className='container mt-5'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label className='form-label'>Email</label>
          <input type='email' className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Password</label>
          <input type='password' className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        {error && <p className='text-danger'>{error}</p>}
        <button className='btn btn-primary'>Login</button>
      </form>
      <p className='mt-3'>Don't have an account? <Link to='/registration'>Register</Link></p>
    </div>
  );
}

export default Login;
