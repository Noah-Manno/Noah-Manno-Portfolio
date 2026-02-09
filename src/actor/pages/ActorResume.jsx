import React from 'react';
import '../styles/ActorResume.css';

const ActorResume = () => {
  return (
    <div className="resume-container">
      <header className="resume-header">
        <h1>Noah Manno</h1>
        <p className="resume-contact">
          609-235-8826 | noahmanno19@gmail.com | Parsippany, NJ
        </p>
        <div className="resume-stats">
          <span>Height: 5'11"</span>
          <span>Hair: Brown</span>
          <span>Eyes: Brown</span>
          <span>Range: G2-B4</span>
        </div>
      </header>

      <section className="resume-section">
        <h2 className="section-title">Theater (Selected)</h2>
        <table className="resume-table">
          <thead>
            <tr>
              <th>Production</th>
              <th>Role</th>
              <th>Venue / Company</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ride the Cyclone</td>
              <td>Mischa Bachinski</td>
              <td>Brundage Park Playhouse</td>
            </tr>
            <tr>
              <td>25th Annual... Spelling Bee</td>
              <td>Chip Tolentino</td>
              <td>Brundage Park Playhouse</td>
            </tr>
            <tr>
              <td>Footloose</td>
              <td>Ren McCormack</td>
              <td>Brundage Park Playhouse</td>
            </tr>
            <tr>
              <td>Crazy For You</td>
              <td>Bela Zangler</td>
              <td>Riverfront Players Inc.</td>
            </tr>
            <tr>
              <td>Seussical</td>
              <td>Mr. Mayor</td>
              <td>Riverfront Players Inc.</td>
            </tr>
            <tr>
              <td>Spamalot (2019)</td>
              <td>Prince Herbert</td>
              <td>Riverfront Community Players</td>
            </tr>
            <tr>
              <td>Anything Goes</td>
              <td>Moonface Martin</td>
              <td>BTHS</td>
            </tr>
            <tr>
              <td>Rent (2018)</td>
              <td>Angel</td>
              <td>BTHS</td>
            </tr>
            <tr>
              <td>In the Heights</td>
              <td>Usnavi</td>
              <td>Riverfront Community Players</td>
            </tr>
          </tbody>
        </table>
      </section>

      <div className="resume-grid">
        <section className="resume-section">
          <h2 className="section-title">Education</h2>
          <div className="education-item">
            <strong>Millersville University of Pennsylvania</strong>
            <p>B.S. Music Education | B.A. Vocal Performance</p>
            <p><em>Summa Cum Laude (GPA: 3.98)</em></p>
          </div>
        </section>

        <section className="resume-section">
          <h2 className="section-title">Training</h2>
          <ul className="resume-list">
            <li>Vocal Lessons (2018-2024): Dr. Holland-Garcia and Professor Kristin Sims</li>
            <li>Multi-Instrumental: Drums, Piano, Guitar</li>
            <li>Theater I-IV: Joseph Farina</li>
          </ul>
        </section>
      </div>

    </div>
  );
};

export default ActorResume;