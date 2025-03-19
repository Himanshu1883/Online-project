import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Registration() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    
    localStorage.setItem('emailData', email);
    localStorage.setItem('passwordData', password);
    alert('Registration Successful');
    navigate('/');
  };

  return (
    <div className='container mt-5'>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div className='mb-3'>
          <label className='form-label'>Email</label>
          <input type='email' className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Password</label>
          <input type='password' className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button className='btn btn-success'>Register</button>
      </form>
      <p className='mt-3'>Already have an account? <a href='/'>Login</a></p>
    </div>
  );
}

export default Registration;
