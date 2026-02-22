import React, { useState, useEffect } from 'react';

export function Home({ user, login, logout }) {
  const [selectedImage, setSelectedImage] = useState(null);

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
          Logged in as: <strong>{user}</strong>
          <button
            type="button"
            className={`button ${user !== "Guest" ? "logout" : ""}`}
            onClick={() => {
              if (user === "Guest") {
                const name = prompt("Enter your name:");
                if (name) login(name);
              } else {
                logout();
              }
            }}
          >
            {user === "Guest" ? "Log In" : "Log Out"}
          </button>
        </div>
      </section>

      {/* ---------- Main Content ---------- */}
      <main className="home-page">
        <div className="home-container">

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
              <img
                src="/app_sketch.png"
                alt="App sketch"
                onClick={() => setSelectedImage("/app_sketch.png")}
              />
            </div>

            <div className="gallery-item">
              <div className="gallery-placeholder">Optional Img</div>
            </div>

            <div className="gallery-item">
              <div className="gallery-placeholder">Optional Img</div>
            </div>

            <div className="gallery-item">
              <div className="gallery-placeholder">Optional Img</div>
            </div>
          </div>

          {/* Fullscreen Overlay */}
          {selectedImage && (
            <div
              className="fullscreen-overlay"
              onClick={() => setSelectedImage(null)}
            >
              <img
                src={selectedImage}
                alt="Full view"
                className="fullscreen-image"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          )}
        </section>

        </div>
    </main>
    </>
  );
}