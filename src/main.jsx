import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./error.jsx";
import {
  Navbar,
  Hero,
  Events,
  Guildelines,
  Set1,
  About,
  Verify,
  Login,
  Delegates,
  RegComplete,
  Register,
  Timings,
} from "./components";

import ReactGA from "react-ga";
ReactGA.initialize("K6F7N5MR4K");
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={
            <div className="bg-error">
              <Navbar /> <Error />
            </div>
          }
        />
        <Route
          path="/"
          element={
            <div className="bg">
              <Navbar />
              <Hero />
            </div>
          }
        />
        <Route
          path="/howtoregister"
          element={
            <div className="events-bg">
              <Navbar />
              <Events />
            </div>
          }
        />
        <Route
          path="/guidelines"
          element={
            <div className="guidelines-bg">
              <Navbar />
              <Guildelines />
            </div>
          }
        />

        <Route
          path="/events"
          element={
            <div className="set1-bg">
              <Navbar />
              <Set1 />
            </div>
          }
        />
        <Route
          path="/about"
          element={
            <div>
              <Navbar />
              <About />
            </div>
          }
        />
        <Route
          path="/delegates"
          element={
            <div>
              <Navbar />
              <Delegates />
            </div>
          }
        />
        <Route
          path="/register"
          element={
            <div>
              <Navbar />
              <Register />
            </div>
          }
        />
        <Route
          path="/timings"
          element={
            <div>
              <Navbar />
              <Timings />
            </div>
          }
        />
        <Route path="/reg-complete" element={<RegComplete />} />
        <Route path="/qr/verify/:id" element={<Verify />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
