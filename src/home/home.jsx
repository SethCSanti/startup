import React from 'react';

export function Home() {
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
  );
}