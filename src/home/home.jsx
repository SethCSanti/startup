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
    <>
      {/* ---------- Utility Bar ---------- */}
      <section className="utility-bar">
        <div className="utility-left">
          <a
            href="https://github.com/SethCSanti/startup.git"
            target="_blank"
            rel="noreferrer"
          >
            Repository – Seth Conner
          </a>
        </div>

        <div className="utility-right">
          <span>
            Logged in as: <strong>{user}</strong>
          </span>

          <button
            type="button"
            className={`button ${user !== "Guest" ? "logout" : ""}`}
            onClick={handleLogin}
          >
            {user === "Guest" ? "Log In" : "Log Out"}
          </button>
        </div>
      </section>

      {/* ---------- Main Content ---------- */}
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

        {/* ---------- Image Gallery ---------- */}
        <section className="image-gallery">
          <h3>Application Gallery</h3>

          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="/app_sketch.png" alt="App sketch" />
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
    </>
  );
}