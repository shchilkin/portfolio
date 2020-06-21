import React from 'react';
import Logo from "./Logo";
import './App.css';

function App() {
  return (
      <div className="grid">
          <nav className="navbar">
              <div className="navbar-logo">
                  <Logo/>
              </div>
              <div className="navbar-items">
                  <a href="#work" className="navbar-item">Home</a>
                  <a href="#projects" className="navbar-item">Projects</a>
                  <a href="#skills" className="navbar-item">Skills</a>
                  <a href="#" className="navbar-item">Contact</a>
              </div>
          </nav>
          <section id="home" className="container">
              <h1 className="display-1">
                  Aleksandr <br/> <span className="accentText">Shchilkin</span>
              </h1>
              <h2 className="display-2">
                  Web development & UI/UX Design
              </h2>
          </section>
          <section id="work" className="container">
              <h3 className="display-3">My <span className="accentText">work</span></h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque imperdiet scelerisque erat, a
                  scelerisque eros sollicitudin cursus. Maecenas quis nunc ullamcorper, ultrices risus ac, efficitur
                  tellus. Nunc pulvinar lectus nunc, sed tincidunt arcu ornare ut. Phasellus in pellentesque tortor.
                  Morbi sed porta massa. Cras blandit vitae dolor non viverra. Nullam scelerisque sapien in eleifend
                  consequat. Proin lacus lacus, blandit a nisl ut, maximus vestibulum libero.
              </p>
          </section>
          <section id="skills" className="container">
              <h3 className="display-3 text-right">My <span className="accentText">skills</span></h3>
          </section>
          <section id="projects" className="container">
              <h3 className="display-3">My <span className="accentText">projects</span></h3>
          </section>
      </div>
  );
}

export default App;
