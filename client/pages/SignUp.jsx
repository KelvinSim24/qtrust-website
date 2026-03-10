// src/pages/SignUp.jsx
import React, { useState } from 'react';
import './SignUp.css';
import { Link, useNavigate } from 'react-router-dom';
import QTrustlogo from "../lib/QTrustlogo.png";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { app, db, rtdb } from "../../src/lib/firebase"; 
import { doc, setDoc, query, collection, where, getDocs } from 'firebase/firestore';
import { ref, set } from "firebase/database";


  

const SignUp = () => {
  const navigate = useNavigate(); 
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const auth = getAuth(app);

    try {
      // 🔍 Step 1: Check if username already exists
      const q = query(collection(db, "users"), where("username", "==", username));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        alert("Username is already taken. Please choose another one.");
        return;
      }

      // ✅ Step 2: Create new user
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Update display name
      await updateProfile(user, { displayName: username });

      // // Save user data to Firestore
      // const userRef = doc(db, "users", user.uid);
      // await setDoc(userRef, {
      //   uid: user.uid,
      //   username: username,
      //   email: user.email,
      //   createdAt: new Date()
      // });
      
      // Save user data to Realtime Database
      await set(ref(rtdb, "qtrust/user_login/" + user.uid), {
        uid: user.uid,
        username,
        email: user.email,
        password,
        registered_at: new Date().toISOString(),
        profile_image: ""
      });


      console.log("User signed up and stored:", user.uid);
      alert("Account created successfully!");
      navigate('/signin');
    } catch (error) {
      console.error("Error signing up:", error.message);
      alert(error.message);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-left">
        <img src={QTrustlogo} alt="QTrust Logo" className="logo" />
        <h1>QTrust</h1>
        <h2>Fake News detection powered by quantum AI</h2>
        <p>A fake news detection tool for X</p>
      </div>

      <div className="signup-right">
        <form onSubmit={handleSubmit} className="signup-form">
          <h2>Sign Up</h2>
          <input type="text" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} required />
          <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <input type="password" placeholder="Confirm your password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          <button type="submit">Next</button>
          <p className="signin-link">Already have an account? <Link to="/signin">Sign In</Link></p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
