import React from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <div>
      <header className="page-hero">
        <i className="blob" data-px=".15" style={{ width: 300, height: 300, background: 'var(--c1)', left: -80, top: -60 }}></i>
        <i className="blob" data-px="-.1" style={{ width: 260, height: 260, background: 'var(--c4)', right: -60, top: 40, animationDelay: '-4s' }}></i>
        <div className="w" style={{ position: 'relative', zIndex: 1 }}>
          <div className="crumb">Home / Our Services</div>
          <h1>Our <b>Services</b></h1>
          <p>Dummy text: describe what you offer and who it is for.</p>
        </div>
      </header>

      <section>
        <div className="w">
          <h2>Services we <b>offer</b></h2>
          <p className="sub">Scroll to stack the cards.</p>
          <div className="stack">
            <div className="card sc" style={{ '--i': 0, '--pc': 'var(--c1)' }}>
              <span className="n">SERVICE 01</span>
              <h3>Web Development</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <Link className="btn o" to="/contact">Learn more</Link>
            </div>
            <div className="card sc" style={{ '--i': 1, '--pc': 'var(--c2)' }}>
              <span className="n">SERVICE 02</span>
              <h3>App Development</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <Link className="btn o" to="/contact">Learn more</Link>
            </div>
            <div className="card sc" style={{ '--i': 2, '--pc': 'var(--c3)' }}>
              <span className="n">SERVICE 03</span>
              <h3>CRM Solutions</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <Link className="btn o" to="/contact">Learn more</Link>
            </div>
            <div className="card sc" style={{ '--i': 3, '--pc': 'var(--c4)' }}>
              <span className="n">SERVICE 04</span>
              <h3>SEO & Marketing</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <Link className="btn o" to="/contact">Learn more</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="w">
          <h2>More <b>capabilities</b></h2>
          <div className="grid" data-stagger>
            <div className="card zi" style={{ '--pc': 'var(--c1)' }}>
              <span className="n">A</span>
              <h3>Cold Email Outreach</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="card zi" style={{ '--pc': 'var(--c2)' }}>
              <span className="n">B</span>
              <h3>Lead Enrichment</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="card zi" style={{ '--pc': 'var(--c3)' }}>
              <span className="n">C</span>
              <h3>Cold Calling</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="card zi" style={{ '--pc': 'var(--c4)' }}>
              <span className="n">D</span>
              <h3>Landing Pages</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="card zi" style={{ '--pc': 'var(--c1)' }}>
              <span className="n">E</span>
              <h3>Automation</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="card zi" style={{ '--pc': 'var(--c2)' }}>
              <span className="n">F</span>
              <h3>Consulting</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w">
          <h2>How we <b>work</b></h2>
          <div className="grid" data-stagger>
            <div className="card rl" style={{ '--pc': 'var(--c1)' }}>
              <span className="n">STEP 1</span>
              <h3>Discovery Call</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="card rl" style={{ '--pc': 'var(--c2)' }}>
              <span className="n">STEP 2</span>
              <h3>Co-create the Plan</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="card rl" style={{ '--pc': 'var(--c3)' }}>
              <span className="n">STEP 3</span>
              <h3>Launch &amp; Scale</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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
