import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Home } from './home/home';
import { Tasks } from './tasks/tasks';
import { Notes } from './notes/notes';
import { Calendar } from './calendar/calendar';
import { About } from './about/about';

export default function App() {
  return (
    <BrowserRouter>
    <div className="body bg-dark text-light">

      {/* Navbar */}
      <nav className="navbar fixed-top navbar-dark custom-navbar">
        <div className="navbar-brand">
          LoadMap
        </div>

        <div className="navbar-nav flex-row">
          <NavLink className="nav-link" to="/">Home</NavLink>
          <NavLink className="nav-link" to="/tasks">Tasks</NavLink>
          <NavLink className="nav-link" to="/calendar">Calendar</NavLink>
          <NavLink className="nav-link" to="/notes">Notes</NavLink>
          <NavLink className="nav-link" to="/about">About</NavLink>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Main content */}
        <main className="container my-4">

          <div className="card mb-3">
            <div className="card-body">
              <h5>Live Tasks Overview</h5>
              <p>Data loaded from database (placeholder)</p>
              <p>
                Status: <strong>Realtime updates enabled (mock)</strong>
              </p>
            </div>
          </div>

          <div className="card mb-4">
            <div className="card-body">
              <h5>Live Notes Overview</h5>
              <p>Stored in database (placeholder)</p>
              <p>Synced across devices (placeholder WebSocket)</p>
            </div>
          </div>

          {/* Top banner */}
          <section className="top-banner mb-4">
            <div className="banner-item">
              <h4>Repository</h4>
              <a
                href="https://github.com/SethCSanti/startup.git"
                target="_blank"
                rel="noreferrer"
              >
                View on GitHub
              </a>
            </div>

            <div className="banner-item banner-login">
              <h4>Login</h4>
              <p>
                Logged in as: <strong>Guest (mock)</strong>
              </p>
              <button type="button" className="btn btn-success">
                Log In
              </button>
            </div>
          </section>

          {/* Image gallery */}
          <section className="image-gallery">
            <h3>Application Gallery</h3>

            <div className="gallery-grid">
              <img src="/images/app_sketch.png" alt="App sketch" />
              <div className="gallery-placeholder">Screenshot 2</div>
              <div className="gallery-placeholder">Screenshot 3</div>
            </div>
          </section>

        </main>

        {/* Footer */}
        <footer className="bg-dark text-white-50 mt-5">
          <div className="container-fluid d-flex justify-content-between">
            <span className="text-reset">Seth Conner</span>
            <a
              className="text-reset"
              href="https://github.com/SethCSanti/startup"
              target="_blank"
              rel="noreferrer"
            >
              Source
            </a>
          </div>
        </footer>

      </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return (
    <main className="container-fluid bg-secondary text-center py-5">
      404: Return to sender. Address unknown.
    </main>
  );
}