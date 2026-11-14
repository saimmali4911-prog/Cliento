import React from 'react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  return (
    <div>
      <header className="page-hero">
        <i className="blob" data-px=".15" style={{ width: 300, height: 300, background: 'var(--c1)', left: -80, top: -60 }}></i>
        <i className="blob" data-px="-.1" style={{ width: 260, height: 260, background: 'var(--c4)', right: -60, top: 40, animationDelay: '-4s' }}></i>
        <div className="w" style={{ position: 'relative', zIndex: 1 }}>
          <div className="crumb">Home / Pricing</div>
          <h1>Pricing <b>page</b></h1>
          <p>Dummy plans. Edit names, prices and features.</p>
        </div>
      </header>

      <section>
        <div className="w">
          <div className="grid" data-stagger>
            <div className="card zi" style={{ '--pc': 'var(--c1)' }}>
              <span className="n">STARTER</span>
              <div className="price">$99<small>/month</small></div>
              <ul>
                <li>Feature one</li>
                <li>Feature two</li>
                <li>Feature three</li>
              </ul>
              <Link className="btn" style={{ marginTop: 16 }} to="/contact">Choose plan</Link>
            </div>
            <div className="card zi" style={{ '--pc': 'var(--c2)' }}>
              <span className="n">GROWTH</span>
              <div className="price">$299<small>/month</small></div>
              <ul>
                <li>Feature one</li>
                <li>Feature two</li>
                <li>Feature three</li>
              </ul>
              <Link className="btn" style={{ marginTop: 16 }} to="/contact">Choose plan</Link>
            </div>
            <div className="card zi" style={{ '--pc': 'var(--c3)' }}>
              <span className="n">SCALE</span>
              <div className="price">$799<small>/month</small></div>
              <ul>
                <li>Feature one</li>
                <li>Feature two</li>
                <li>Feature three</li>
              </ul>
              <Link className="btn" style={{ marginTop: 16 }} to="/contact">Choose plan</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="w">
          <div className="cta rv">
            <h2>Ready to <b>get started</b>?</h2>
            <p className="sub" style={{ margin: '0 auto 20px' }}>
              Let's turn your prospects into customers and your opportunities into revenue. Your next stage of growth starts here.
            </p>
            <Link className="btn" to="/contact">Contact us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
