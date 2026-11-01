import React from 'react';
import { Link } from 'react-router-dom';

export default function Portfolio() {
  return (
    <div>
      <header className="page-hero">
        <i className="blob" data-px=".15" style={{ width: 300, height: 300, background: 'var(--c1)', left: -80, top: -60 }}></i>
        <i className="blob" data-px="-.1" style={{ width: 260, height: 260, background: 'var(--c4)', right: -60, top: 40, animationDelay: '-4s' }}></i>
        <div className="w" style={{ position: 'relative', zIndex: 1 }}>
          <div className="crumb">Home / Our Portfolio</div>
          <h1>Our <b>Portfolio</b></h1>
          <p>Dummy text: showcase your best case studies here.</p>
        </div>
      </header>

      <section>
        <div className="w">
          <div className="grid" data-stagger>
            <div className="card zi" style={{ '--pc': 'var(--c1)' }}>
              <div className="ph"></div>
              <span className="n">CASE STUDY</span>
              <h3>Project Name 1</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <span className="pill">Industry</span>
            </div>
            <div className="card zi" style={{ '--pc': 'var(--c2)' }}>
              <div className="ph"></div>
              <span className="n">CASE STUDY</span>
              <h3>Project Name 2</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <span className="pill">Industry</span>
            </div>
            <div className="card zi" style={{ '--pc': 'var(--c3)' }}>
              <div className="ph"></div>
              <span className="n">CASE STUDY</span>
              <h3>Project Name 3</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <span className="pill">Industry</span>
            </div>
            <div className="card zi" style={{ '--pc': 'var(--c4)' }}>
              <div className="ph"></div>
              <span className="n">CASE STUDY</span>
              <h3>Project Name 4</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <span className="pill">Industry</span>
            </div>
            <div className="card zi" style={{ '--pc': 'var(--c1)' }}>
              <div className="ph"></div>
              <span className="n">CASE STUDY</span>
              <h3>Project Name 5</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <span className="pill">Industry</span>
            </div>
            <div className="card zi" style={{ '--pc': 'var(--c2)' }}>
              <div className="ph"></div>
              <span className="n">CASE STUDY</span>
              <h3>Project Name 6</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <span className="pill">Industry</span>
            </div>
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="w">
          <div className="cta rv">
            <h2>Ready to <b>get started</b>?</h2>
            <p className="sub" style={{ margin: '0 auto 20px' }}>
              Dummy call-to-action text. Replace with your own.
            </p>
            <Link className="btn" to="/contact">Contact us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
