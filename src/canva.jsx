import React, { useState } from "react";
import "./CanvasConverge.css"; // Move your CSS here
import { Link } from "react-router-dom";

const CanvasConverge = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Header */}
      <header>
        <nav className="navbar">
          <div className="logo">
            Canvas<span>Converge</span>
          </div>
          <div className="nav-links">
            <Link to="/communit">Community</Link>
            <a href="community.html">Communities</a>
            <a href="#events">Events</a>
            <a href="#learn">Learn</a>
            <a href="#about">About</a>
          </div>
          <div className="auth-buttons">
            <button
              className="btn btn-outline"
              onClick={() => setShowModal(true)}
            >
              Log In
            </button>
            <a href="#signup" className="btn btn-primary">
              Sign Up Free
            </a>
          </div>
        </nav>
      </header>

      {/* Modal */}
      {showModal && (
        <div className="modal" onClick={(e) => e.target.className === "modal" && setShowModal(false)}>
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>
              &times;
            </span>
            <h2>Login</h2>
            <input type="text" placeholder="Username" /><br /><br />
            <input type="password" placeholder="Password" /><br /><br />
            <button onClick={() => alert("Login Submitted!")}>Submit</button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Connect through <span>creativity</span> across borders
          </h1>
          <p className="lead">
            Join a global community of artists and art enthusiasts. Share your
            work, discover amazing art from around the world, and collaborate
            with creators from different cultures and backgrounds.
          </p>
          <div className="auth-buttons">
            <a href="#signup" className="btn btn-primary">
              Start Creating
            </a>
            <a href="#explore" className="btn btn-outline">
              Explore Art
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="https://i.pinimg.com/736x/e4/ce/19/e4ce197f122c2ff21693c61401f7581d.jpg"
            alt="Artists from around the world sharing their work"
          />
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <div className="features-container">
          <div className="section-title">
            <h2>How CanvasConverge Works</h2>
            <p>A platform built for artists, by artists</p>
          </div>
          <div className="feature-grid">
            {[
              { icon: "🎨", title: "Share Your Art", text: "Upload your creations to your personal gallery and share them with a global audience. Support for all art forms including digital, traditional, photography, sculpture, and more." },
              { icon: "🌏", title: "Connect Globally", text: "Find artists and art lovers from around the world. Break down language barriers with our built-in translation tools and cultural context features." },
              { icon: "👥", title: "Join Communities", text: "Become part of specialized art communities based on styles, mediums, cultures, or themes. Share techniques, get feedback, and grow together." },
              { icon: "🚀", title: "Collaborative Projects", text: "Find collaborators for cross-cultural art projects. Create art that bridges perspectives and celebrates diversity through creative expression." },
              { icon: "🎓", title: "Learn & Teach", text: "Exchange techniques and styles from different artistic traditions. Host or join virtual workshops and skill-sharing sessions." },
              { icon: "💼", title: "Showcase & Sell", text: "Optional marketplace features to help artists monetize their work globally while retaining full control of their intellectual property." }
            ].map((item, idx) => (
              <div key={idx} className="feature-card">
                <div className="feature-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="gallery">
        <div className="gallery-container">
          <div className="section-title">
            <h2>Featured Artwork</h2>
            <p>Discover art from around the world</p>
          </div>
          <div className="art-grid">
            {[
              { img: "https://ih1.redbubble.net/image.5198273485.0879/flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg", title: "Japanese ink art", location: "Japan" },
              { img: "https://i.pinimg.com/736x/88/6c/2d/886c2dd9632df00ec675fdcf6d2fac92.jpg", title: "Painting", location: "Mexico City, Mexico" },
              { img: "https://i.pinimg.com/736x/4e/5a/70/4e5a708bb807b651d5bc52d74155f22a.jpg", title: "Digital Art", location: "Emma K. • Berlin, Germany" },
              { img: "https://static.vecteezy.com/system/resources/previews/001/834/497/non_2x/colorful-african-textile-design-kente-fabric-print-design-african-culture-free-vector.jpg", title: "Pattern Heritage", location: "Kwame O. • Accra, Ghana" },
              { img: "https://i.pinimg.com/736x/dc/75/7c/dc757c9402f6fe3fc5f2c04645e4442b.jpg", title: "Urban Perspectives", location: "Bulgaria" },
              { img: "https://i.pinimg.com/736x/18/d8/a8/18d8a8826c0f175ba4e1c42099c7de95.jpg", title: "Sketch art", location: "Argentina" },
              { img: "https://i.pinimg.com/736x/4a/5f/ae/4a5fae2add193ace27600572f5e25f67.jpg", title: "Sculptures", location: "Italy" },
              { img: "https://i.pinimg.com/736x/d7/3b/af/d73baf0de3d751bf5ad4d3aa8cd4e733.jpg", title: "Traditional Art", location: "India" }
            ].map((art, idx) => (
              <div key={idx} className="art-item">
                <img src={art.img} alt={art.title} />
                <div className="art-info">
                  <h4>{art.title}</h4>
                  <p>{art.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="cta-container">
          <h2>Ready to Connect Through Art?</h2>
          <p>
            Join thousands of artists and art enthusiasts from over 150 countries. Create your free account and start sharing your creativity with the world.
          </p>
          <div className="cta-buttons">
            <a href="#signup" className="btn btn-primary">Create Free Account</a>
            <a href="#learn-more" className="btn btn-outline">Learn More</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-container">
          <div className="footer-about">
            <div className="footer-logo">
              Canvas<span>Converge</span>
            </div>
            <p>Bridging cultures through creative expression. A global platform for artists to share, learn, and collaborate across borders.</p>
          </div>
          <div className="footer-links">
            <h3>Platform</h3>
            <ul>
              <li><a href="#">How it Works</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Communities</a></li>
              <li><a href="#">Events</a></li>
              <li><a href="#">Marketplace</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h3>Resources</h3>
            <ul>
              <li><a href="#">Artist Guides</a></li>
              <li><a href="#">Tutorials</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Success Stories</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h3>Company</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Mission</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Canvas Converge. All rights reserved. | <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
        </div>
      </footer>
    </>
  );
};

export default CanvasConverge;
