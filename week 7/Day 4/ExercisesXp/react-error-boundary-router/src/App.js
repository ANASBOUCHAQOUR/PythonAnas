import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import HomeScreen from "./components/HomeScreen";
import ProfileScreen from "./components/ProfileScreen";
import ShopScreen from "./components/ShopScreen";
import ErrorBoundary from "./components/ErrorBoundary";

import PostList from "./components/PostList";
import Example1 from "./components/Example1";
import Example2 from "./components/Example2";
import Example3 from "./components/Example3";

function App() {
  const handlePostData = async () => {
    const data = {
      key1: 'myusername',
      email: 'mymail@gmail.com',
      name: 'Isaac',
      lastname: 'Doe',
      age: 27
    };

    try {
      const response = await fetch("https://webhook.site/your-unique-url", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      const result = await response.json();
      console.log("Response:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <BrowserRouter>
      <div className="container mt-3">
        <nav className="navbar navbar-light bg-light mb-4">
          <NavLink className="nav-link" to="/">Home</NavLink>
          <NavLink className="nav-link" to="/profile">Profile</NavLink>
          <NavLink className="nav-link" to="/shop">Shop</NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<ErrorBoundary><HomeScreen /></ErrorBoundary>} />
          <Route path="/profile" element={<ErrorBoundary><ProfileScreen /></ErrorBoundary>} />
          <Route path="/shop" element={<ErrorBoundary><ShopScreen /></ErrorBoundary>} />
        </Routes>

        <hr />
        <PostList />
        <Example1 />
        <Example2 />
        <Example3 />
        <button className="btn btn-primary" onClick={handlePostData}>Send JSON to Webhook</button>
      </div>
    </BrowserRouter>
  );
}

export default App;
