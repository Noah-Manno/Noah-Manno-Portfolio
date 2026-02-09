import React from 'react';
import '../styles/ActorHome.css';

const ActorHome = () => {
  return (
    <div className="actor-home">
      <section className="hero-section">
        <div className="hero-image-wrapper">
          {/* Replace with your headshot in /public/images/ */}
          <img 
            src="/images/noah-manno-headshot.jpg" 
            alt="Noah Manno Headshot" 
            className="main-headshot"
          />
        </div>
        
        <div className="hero-text">
          <h1 className="actor-name">Noah Manno</h1>
          <p className="actor-tagline">Tenor</p>
          
          <div className="actor-stats">
            <div className="stat"><span>Height:</span> 5'11"</div>
            <div className="stat"><span>Location:</span> NY / NJ Area</div>
            <div className="stat"><span>Vocal Range:</span> G2-B4</div>
          </div>

          <div className="cta-group">
            <button className="cta-primary">View Reel</button>
            <button className="cta-secondary">View Resume</button>
          </div>
        </div>
      </section>

      {/* Featured Current Credit */}
      <section className="featured-credits">
        <div className="status-badge">Current Production</div>
        <div className="credit-card">
          <div className="credit-info">
            <h2>Spring Awakening</h2>
            <h3>Role: Melchior Gabor</h3>
            <p>Ferrell Studios</p>
          </div>
          <div className="credit-link">
             <a href="https://ferrellstudios.ludus.com/index.php" className="ticket-link">Production Info →</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ActorHome;