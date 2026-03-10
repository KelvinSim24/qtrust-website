// src/pages/SignIn.jsx
import React, { useState } from 'react';
import './SignIn.css';
import { Link, useNavigate } from 'react-router-dom';
import QTrustlogo from "../lib/QTrustlogo.png";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../../src/lib/firebase'; // ensure firebase app is initialized correctly

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    const auth = getAuth(app);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('Signed in user:', user);
      alert('Sign-in successful!');
      navigate('/home');
    } catch (error) {
      console.error('Sign-in error:', error.message);
      alert(error.message); // or display in the UI
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-left">
        <img src={QTrustlogo} alt="QTrust Logo" className="logo" />
        <h1>QTrust</h1>
        <h2>Fake News detection powered by quantum AI</h2>
        <p>A fake news detection tool for X</p>
      </div>

      <div className="signin-right">
        <form onSubmit={handleSubmit} className="signin-form">
          <h2>Sign In</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="forgot-password">
            <Link to="/reset">Forgot password?</Link>
          </div>
          <button type="submit">Sign In</button>
          <p className="signup-link">
            Don’t have an account? <Link to="/signup">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
