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
          <p>From identifying potential customers to closing the deal, we help startups turn opportunities into revenue.</p>
        </div>
      </header>

      <section>
        <div className="w">
          <h2>Services we <b>offer</b></h2>
          <p className="sub">Four core services designed to accelerate your startup's growth.</p>
          <div className="stack">
            <div className="card sc" style={{ '--i': 0, '--pc': 'var(--c1)' }}>
              <span className="n">SERVICE 01</span>
              <h3>Lead Generation</h3>
              <p>Identifying and attracting potential customers who are interested in your services. We build targeted prospect lists, research ideal client profiles, and source high-quality leads so your pipeline is always full of the right opportunities.</p>
              <Link className="btn o" to="/contact">Get Started</Link>
            </div>
            <div className="card sc" style={{ '--i': 1, '--pc': 'var(--c2)' }}>
              <span className="n">SERVICE 02</span>
              <h3>Email Sequences</h3>
              <p>Creating personalized email sequences to engage prospects and build relationships. Our multi-touch campaigns — intro, value, follow-up, and call-to-action — are crafted to spark genuine interest and drive replies from your ideal clients.</p>
              <Link className="btn o" to="/contact">Get Started</Link>
            </div>
            <div className="card sc" style={{ '--i': 2, '--pc': 'var(--c3)' }}>
              <span className="n">SERVICE 03</span>
              <h3>Campaign Run</h3>
              <p>Launching targeted marketing campaigns to reach the right audience and generate leads. We manage the full outbound cycle — from list selection and campaign setup through to inbox monitoring and engagement tracking — so you get qualified conversations.</p>
              <Link className="btn o" to="/contact">Get Started</Link>
            </div>
            <div className="card sc" style={{ '--i': 3, '--pc': 'var(--c4)' }}>
              <span className="n">SERVICE 04</span>
              <h3>Deal Closing</h3>
              <p>Turning qualified prospects into paying customers through effective communication and follow-ups. We handle proposals, negotiation support, and closing conversations so your startup converts more leads into signed, revenue-generating clients.</p>
              <Link className="btn o" to="/contact">Get Started</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="w">
          <h2>How we <b>work</b></h2>
          <div className="grid" data-stagger>
            <div className="card rl" style={{ '--pc': 'var(--c1)' }}>
              <span className="n">STEP 1</span>
              <h3>Discovery Call</h3>
              <p>We learn about your startup, target market, and goals to define the ideal client profile and positioning.</p>
            </div>
            <div className="card rl" style={{ '--pc': 'var(--c2)' }}>
              <span className="n">STEP 2</span>
              <h3>Build & Launch</h3>
              <p>We build your lead list, craft email sequences, and launch targeted outbound campaigns on your behalf.</p>
            </div>
            <div className="card rl" style={{ '--pc': 'var(--c3)' }}>
              <span className="n">STEP 3</span>
              <h3>Engage & Close</h3>
              <p>We manage replies, run follow-ups, and support deal closing until prospects become paying customers.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="w">
          <div className="cta rv">
            <h2>Ready to <b>get started</b>?</h2>
            <p className="sub" style={{ margin: '0 auto 20px' }}>
              Let Cliento handle your customer acquisition while you focus on building your product.
            </p>
            <Link className="btn" to="/contact">Book a Walkthrough</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
