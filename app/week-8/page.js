"use client";
import React from "react";
import { useUserAuth } from "./_utils/auth-context.js";

const Page = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Error signing in with GitHub:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div style={{  backgroundColor: "black", color: "white", textAlign: "center", padding: "60px" }}>
      <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>Shopping List App</h1>
      {user ? (
        <>
          <p>Welcome, {user.displayName || "Guest"} ({user.email || "Unknown"})</p>
          <button style={{ backgroundColor: "white", color: "black", border: "none", padding: "10px 20px", borderRadius: "5px", cursor: "pointer" }} onClick={handleSignOut}>Sign Out</button>
          <button className="text-lg hover:underline" style={{ backgroundColor: "transparent", border: "none", cursor: "pointer" }}>Continue to your Shopping List</button>
          
        </>
      ) : (
        <button style={{ backgroundColor: "white", color: "black", border: "none", padding: "10px 20px", borderRadius: "5px", cursor: "pointer" }} onClick={handleSignIn}>Sign In with GitHub</button>
        
      )}
    </div>
  );
};

export default Page;
