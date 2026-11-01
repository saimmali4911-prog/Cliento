import React from 'react';
import { Link } from 'react-router-dom';

export default function Careers() {
  return (
    <div>
      <header className="page-hero">
        <i className="blob" data-px=".15" style={{ width: 300, height: 300, background: 'var(--c1)', left: -80, top: -60 }}></i>
        <i className="blob" data-px="-.1" style={{ width: 260, height: 260, background: 'var(--c4)', right: -60, top: 40, animationDelay: '-4s' }}></i>
        <div className="w" style={{ position: 'relative', zIndex: 1 }}>
          <div className="crumb">Home / Careers</div>
          <h1>Careers <b>page</b></h1>
          <p>Dummy text: join our team and grow with us.</p>
        </div>
      </header>

      <section>
        <div className="w">
          <h2>Open <b>positions</b></h2>
          <div className="card rl" style={{ marginBottom: 14 }}>
            <div className="row">
              <div>
                <h3>Frontend Developer</h3>
                <p>Remote · Full-time · Dummy description line.</p>
              </div>
              <Link className="btn" to="/contact">Apply</Link>
            </div>
          </div>
          <div className="card rl" style={{ marginBottom: 14 }}>
            <div className="row">
              <div>
                <h3>Sales Development Rep</h3>
                <p>Remote · Full-time · Dummy description line.</p>
              </div>
              <Link className="btn" to="/contact">Apply</Link>
            </div>
          </div>
          <div className="card rl" style={{ marginBottom: 14 }}>
            <div className="row">
              <div>
                <h3>Content Writer</h3>
                <p>Remote · Full-time · Dummy description line.</p>
              </div>
              <Link className="btn" to="/contact">Apply</Link>
            </div>
          </div>
          <div className="card rl" style={{ marginBottom: 14 }}>
            <div className="row">
              <div>
                <h3>Project Manager</h3>
                <p>Remote · Full-time · Dummy description line.</p>
              </div>
              <Link className="btn" to="/contact">Apply</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="w">
          <h2>Why <b>join us</b></h2>
          <div className="grid" data-stagger>
            <div className="card zi" style={{ '--pc': 'var(--c1)' }}>
              <span className="n">01</span>
              <h3>Perk One</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="card zi" style={{ '--pc': 'var(--c2)' }}>
              <span className="n">02</span>
              <h3>Perk Two</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="card zi" style={{ '--pc': 'var(--c3)' }}>
              <span className="n">03</span>
              <h3>Perk Three</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
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
