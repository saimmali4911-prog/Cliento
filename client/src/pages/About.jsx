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
          <p>We bring the entire customer acquisition journey under one roof to help startups grow.</p>
        </div>
      </header>

      <section>
        <div className="w">
          <h2 className="rl">Our <b>story</b></h2>
          <p className="wr">
            Cliento was founded with a simple vision: to make business growth easier for startups. We recognized that finding the right customers, building connections, and converting leads into sales can be challenging. That's why we bring the entire customer acquisition journey under one roof, from lead generation and personalized email outreach to targeted campaigns and deal closing. Our mission is to help startups grow smarter, connect better, and turn opportunities into lasting business success.
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
              <h3>To understand our client's priorities and provide the right solutions</h3>
              <p>Solutions that drive business growth, create value, and deliver measurable results.</p>
            </div>
            <div className="card rr" style={{ '--pc': 'var(--c4)' }}>
              <span className="n">OUR VISION</span>
              <h3>A trusted business and preferred partner for our clients</h3>
              <p>Consistently delivering the right solutions, creating long-term value, and contributing to their sustainable growth.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="w">
          <h2 className="rl">Meet our <b>Founder & CEO</b></h2>
          <p className="sub">The vision and leadership driving Cliento forward.</p>

          <div className="founder-card rl">
            <div className="founder-media">
              <img
                src="/founder.jpg"
                alt="Founder & CEO"
                className="founder-img"
              />
              <div className="founder-media-overlay"></div>
              <span className="founder-badge">FOUNDER & CEO</span>
            </div>

            <div className="founder-content">
              <span className="n">LEADERSHIP SPOTLIGHT</span>
              <h3>Syed Hashir Ali</h3>
              <span className="founder-role">Founder & Chief Executive Officer</span>

              <p className="founder-bio">
                A serial entrepreneur with over new ideas and 1 year of excellent experience, Syed Hashir Ali helps businesses scale efficiently, embrace innovation, and build impactful digital identities. He has led ventures and advised leading organizations worldwide. He blends business development expertise with strategic vision to drive sustainable growth.
              </p>

              <div className="founder-tags">
                <span className="founder-tag">Strategic Growth</span>
                <span className="founder-tag">Outbound Systems</span>
                <span className="founder-tag">Lead Acquisition</span>
                <span className="founder-tag">Deal Execution</span>
              </div>

              <div>
                <Link className="btn" to="/contact">Get in touch with Syed Hashir Ali</Link>
              </div>
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
