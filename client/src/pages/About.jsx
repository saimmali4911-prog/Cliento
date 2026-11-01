import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div>
      <header className="page-hero">
        <i className="blob" data-px=".15" style={{ width: 300, height: 300, background: 'var(--c1)', left: -80, top: -60 }}></i>
        <i className="blob" data-px="-.1" style={{ width: 260, height: 260, background: 'var(--c4)', right: -60, top: 40, animationDelay: '-4s' }}></i>
        <div className="w" style={{ position: 'relative', zIndex: 1 }}>
          <div className="crumb">Home / About Us</div>
          <h1>About <b>Us</b></h1>
          <p>Dummy intro: tell visitors who you are and what you stand for.</p>
        </div>
      </header>

      <section>
        <div className="w">
          <h2 className="rl">Our <b>story</b></h2>
          <p className="wr">
            Cliento helps companies turn cold prospects into signed clients through a disciplined, step by step acquisition system. Replace this paragraph with your own company story and watch each word light up as the visitor scrolls past it.
          </p>
        </div>
      </section>

      <section className="alt">
        <div className="w">
          <div className="stats" style={{ marginTop: 0 }}>
            <div className="stat"><b data-count="50" data-suffix="+">50</b><span>Clients</span></div>
            <div className="stat"><b data-count="97" data-suffix="%">97</b><span>Success rate</span></div>
            <div className="stat"><b data-count="100" data-suffix="+">100</b><span>Team members</span></div>
            <div className="stat"><b data-count="6" data-suffix="+">6</b><span>Years</span></div>
          </div>
        </div>
      </section>

      <section>
        <div className="w">
          <div className="two">
            <div className="card rl" style={{ '--pc': 'var(--c2)' }}>
              <span className="n">OUR MISSION</span>
              <h3>Mission headline</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="card rr" style={{ '--pc': 'var(--c4)' }}>
              <span className="n">OUR VISION</span>
              <h3>Vision headline</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="w">
          <h2>Meet the <b>team</b></h2>
          <p className="sub">Dummy team members.</p>
          <div className="grid" data-stagger>
            <div className="card zi" style={{ '--pc': 'var(--c1)' }}>
              <span className="n">CEO</span>
              <h3>Full Name</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="card zi" style={{ '--pc': 'var(--c2)' }}>
              <span className="n">CTO</span>
              <h3>Full Name</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="card zi" style={{ '--pc': 'var(--c3)' }}>
              <span className="n">HEAD OF SALES</span>
              <h3>Full Name</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="card zi" style={{ '--pc': 'var(--c4)' }}>
              <span className="n">DESIGN LEAD</span>
              <h3>Full Name</h3>
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
