import React from "react";

const Communities = () => {
  return (
    <div>
      <header>
        <nav className="navbar">
          <div className="logo">
            Canvas<span>Converge</span>
          </div>
          <div className="nav-links">
            <a href="/">Home</a>
            <a href="/communities" className="active">
              Communities
            </a>
            <a href="/events">Events</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1>Join a Community</h1>
          <p>Connect, collaborate, and create with people who share your passions.</p>
        </section>

        <section className="community-list">
          <div className="community-card">
            <img src="community1.jpg" alt="Community 1" />
            <h3>Art Enthusiasts</h3>
            <p>Share your creativity, showcase your art, and learn from others.</p>
            <button>Join Now</button>
          </div>

          <div className="community-card">
            <img src="community2.jpg" alt="Community 2" />
            <h3>Photography Lovers</h3>
            <p>Capture moments, improve your skills, and collaborate on projects.</p>
            <button>Join Now</button>
          </div>

          <div className="community-card">
            <img src="community3.jpg" alt="Community 3" />
            <h3>Music Makers</h3>
            <p>Compose, jam, and discover new sounds with fellow musicians.</p>
            <button>Join Now</button>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Canvas Converge. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Communities;
