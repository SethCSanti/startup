import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Home } from './home/home';
import { Tasks } from './tasks/tasks';
import { Calendar } from './calendar/calendar';
import { Notes } from './notes/notes';
import { About } from './about/about';

export default function App() {
  return (
    <BrowserRouter>
    <div className="app-shell">

      {/* Navbar */}
      <nav className="navbar fixed-top navbar-dark custom-navbar">
        <div className="navbar-brand">LoadMap</div>

        <div className="navbar-nav flex-row">
          <NavLink className="nav-link" to="/">Home</NavLink>
          <NavLink className="nav-link" to="/tasks">Tasks</NavLink>
          <NavLink className="nav-link" to="/calendar">Calendar</NavLink>
          <NavLink className="nav-link" to="/notes">Notes</NavLink>
          <NavLink className="nav-link" to="/about">About</NavLink>
        </div>
      </nav>

      <main className="container-fluid">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Main content */}
        

        {/* Footer */}
        <footer className="footer">
          <a
            className="social-icon"
            title="GitHub"
            href="https://github.com/SethCSanti"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            className="social-icon"
            title="LinkedIn"
            href="https://www.linkedin.com/in/seth-conner-ba580b2a9"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            className="social-icon"
            title="Instagram"
            href="https://www.instagram.com/sethcsanti/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
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