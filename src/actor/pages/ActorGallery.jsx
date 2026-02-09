import React from 'react';
import '../styles/ActorGallery.css';

const ActorGallery = () => {
  const photos = [
    { id: 1, src: '/headshots/actingphoto1.jpg', alt: 'Noah Manno - Theatrical Headshot', category: 'Theatrical' },
    { id: 2, src: '/headshots/actingphoto2.jpg', alt: 'Noah Manno - Commercial Headshot', category: 'Commercial' },
    { id: 3, src: '/headshots/actingphoto3.jpg', alt: 'Noah Manno - Spring Awakening Still', category: 'Production' },
    { id: 4, src: '/headshots/actingphoto4.jpg', alt: 'Noah Manno - Character Look', category: 'Character' },
  ];

  return (
    <div className="actor-gallery-container">
      <header className="gallery-header">
        <h1 className="gallery-title">Gallery</h1>
        <p className="gallery-subtitle">Theatrical Headshots & Production Stills</p>
      </header>

      <div className="photo-grid">
        {photos.map((photo) => (
          <div key={photo.id} className="photo-item">
            <div className="image-wrapper">
              <img src={photo.src} alt={photo.alt} loading="lazy" />
              <div className="photo-overlay">
                <span className="category-tag">{photo.category}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActorGallery;