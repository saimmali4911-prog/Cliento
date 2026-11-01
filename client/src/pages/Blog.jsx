import React from 'react';
import { Link } from 'react-router-dom';

export default function Blog() {
  return (
    <div>
      <header className="page-hero">
        <i className="blob" data-px=".15" style={{ width: 300, height: 300, background: 'var(--c1)', left: -80, top: -60 }}></i>
        <i className="blob" data-px="-.1" style={{ width: 260, height: 260, background: 'var(--c4)', right: -60, top: 40, animationDelay: '-4s' }}></i>
        <div className="w" style={{ position: 'relative', zIndex: 1 }}>
          <div className="crumb">Home / Our Blog</div>
          <h1>Our <b>Blog</b></h1>
          <p>Dummy text: news, guides and updates.</p>
        </div>
      </header>

      <section>
        <div className="w">
          <div className="grid" data-stagger>
            <div className="card rv" style={{ '--pc': 'var(--c1)' }}>
              <div className="ph"></div>
              <span className="n">ARTICLE · 5 MIN READ</span>
              <h3>Blog post title 1</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="card rv" style={{ '--pc': 'var(--c2)' }}>
              <div className="ph"></div>
              <span className="n">ARTICLE · 5 MIN READ</span>
              <h3>Blog post title 2</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="card rv" style={{ '--pc': 'var(--c3)' }}>
              <div className="ph"></div>
              <span className="n">ARTICLE · 5 MIN READ</span>
              <h3>Blog post title 3</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="card rv" style={{ '--pc': 'var(--c4)' }}>
              <div className="ph"></div>
              <span className="n">ARTICLE · 5 MIN READ</span>
              <h3>Blog post title 4</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="card rv" style={{ '--pc': 'var(--c1)' }}>
              <div className="ph"></div>
              <span className="n">ARTICLE · 5 MIN READ</span>
              <h3>Blog post title 5</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="card rv" style={{ '--pc': 'var(--c2)' }}>
              <div className="ph"></div>
              <span className="n">ARTICLE · 5 MIN READ</span>
              <h3>Blog post title 6</h3>
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
