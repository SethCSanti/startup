import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (
    <div className="body bg-dark text-light">

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container-fluid">
          <span className="navbar-brand text-light">LoadMap</span>

          <div className="navbar-nav">
            <a className="nav-link active">Home</a>
            <a className="nav-link">Tasks</a>
            <a className="nav-link">Calendar</a>
            <a className="nav-link">Notes</a>
            <a className="nav-link">About</a>
          </div>
        </div>
      </nav>

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
          <span className="text-reset">Seth Santi</span>
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
  );
}
