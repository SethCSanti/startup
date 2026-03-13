import React, { useState, useEffect } from "react";

export function Home({ user, login, logout }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [quote, setQuote] = useState("");

  useEffect(() => {
    async function loadQuote() {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      setQuote(data.slip.advice);
    }

    loadQuote();
  }, []);

  async function testRestricted() {
    const response = await fetch("/api/restricted", {
      credentials: "include"
    });

    const data = await response.json();
    alert(data.msg);
  }

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
            onClick={async () => {
              if (user === "Guest") {
                const email = prompt("Email:");
                const password = prompt("Password:");

                if (!email || !password) {
                  alert("Email and password required");
                  return;
                }

                const register = confirm(
                  "Press OK to register, Cancel to login"
                );

                if (register) {
                  const response = await fetch("/api/auth/create", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json"
                    },
                    credentials: "include",
                    body: JSON.stringify({ email, password })
                  });

                  if (response.ok) {
                    alert("Account created. Please log in.");
                  } else {
                    alert("Registration failed");
                  }
                } else {
                  const response = await fetch("/api/auth/login", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json"
                    },
                    credentials: "include",
                    body: JSON.stringify({ email, password })
                  });

                  if (response.ok) {
                    const data = await response.json();
                    login(email.split("@")[0]);
                  } else {
                    alert("Login failed");
                  }
                }
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

          {user !== "Guest" && (
            <>
              <div className="card mb-3">
                <div className="card-body">
                  <h5>Live Tasks Overview</h5>
                  <p>Data loaded from backend service</p>
                  <p>
                    Status: <strong>Realtime updates enabled (mock)</strong>
                  </p>

                  {/* Restricted Endpoint Demo */}
                  <button
                    className="btn btn-primary mt-2"
                    onClick={testRestricted}
                  >
                    Test Restricted Endpoint
                  </button>
                </div>
              </div>

              <div className="card mb-4">
                <div className="card-body">
                  <h5>Live Notes Overview</h5>
                  <p>Stored in database (placeholder)</p>
                  <p>Synced across devices (placeholder WebSocket)</p>
                </div>
              </div>
            </>
          )}

          <div className="card mb-4">
            <div className="card-body">
              <h5>Daily Motivation</h5>
              <p>{quote}</p>
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