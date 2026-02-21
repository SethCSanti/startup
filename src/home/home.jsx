import React, { useState, useEffect } from 'react';

export function Home() {
  const [user, setUser] = useState(() => {
    return localStorage.getItem("user") || "Guest";
  });

  useEffect(() => {
    localStorage.setItem("user", user);
  }, [user]);

  const handleLogin = () => {
    if (user === "Guest") {
      const name = prompt("Enter your name:");
      if (name) setUser(name);
    } else {
      setUser("Guest");
    }
  };

  return (
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
              <h4>Repository - Seth Conner</h4>
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
                Logged in as: <strong>{user}</strong>
              </p>

              <button
                type="button"
                className="button"
                onClick={handleLogin}
              >
                {user === "Guest" ? "Log In" : "Log Out"}
              </button>
            </div>
          </section>

          {/* Image gallery */}
          <section className="image-gallery">
            <h3>Application Gallery</h3>

            <div className="gallery-grid">
              <div className="gallery-item">
                <img src="/public/app_sketch.png" alt="App sketch" />
              </div>

              <div className="gallery-item">
                <div className="gallery-placeholder">Mockup 2</div>
              </div>

              <div className="gallery-item">
                <div className="gallery-placeholder">Mockup 3</div>
              </div>

              <div className="gallery-item">
                <div className="gallery-placeholder">Mockup 4</div>
              </div>
            </div>
          </section>

        </main>
  );
}