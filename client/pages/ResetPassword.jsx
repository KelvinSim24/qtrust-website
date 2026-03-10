import React, { useState } from 'react';
import './ResetPassword.css';
import { Link } from 'react-router-dom';
import QTrustlogo from "../lib/QTrustlogo.png";
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { app } from '../../src/lib/firebase';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleReset = async (e) => {
    e.preventDefault();
    const auth = getAuth(app);

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('✅ Password reset link sent. Please check your email.');
    } catch (error) {
      console.error('Reset error:', error.message);
      setMessage(`❌ ${error.message}`);
    }
  };

  return (
    <div className="reset-container">
      <div className="reset-left">
        <img src={QTrustlogo} alt="QTrust Logo" className="logo" />
        <h1>QTrust</h1>
        <h2>To Simplify Truths</h2>
        <p>A fake news detection tool for X</p>
      </div>

      <div className="reset-right">
        <form onSubmit={handleReset} className="reset-form">
          <h2>Reset Password</h2>
          <input
            type="email"
            placeholder="Enter your registered email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Send Reset Link</button>
          {message && <p className="reset-message">{message}</p>}
          <p className="back-to-login">
            Remember your password? <Link to="/signin">Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
