import React from 'react';
import { Link } from 'react-router-dom';

export default function FAQ() {
  return (
    <div>
      <header className="page-hero">
        <i className="blob" data-px=".15" style={{ width: 300, height: 300, background: 'var(--c1)', left: -80, top: -60 }}></i>
        <i className="blob" data-px="-.1" style={{ width: 260, height: 260, background: 'var(--c4)', right: -60, top: 40, animationDelay: '-4s' }}></i>
        <div className="w" style={{ position: 'relative', zIndex: 1 }}>
          <div className="crumb">Home / FAQ</div>
          <h1>FAQ <b>page</b></h1>
          <p>Dummy questions and answers.</p>
        </div>
      </header>

      <section>
        <div className="w">
          <div className="prose">
            <details className="rv">
              <summary>Frequently asked question 1?</summary>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </details>
            <details className="rv">
              <summary>Frequently asked question 2?</summary>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </details>
            <details className="rv">
              <summary>Frequently asked question 3?</summary>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </details>
            <details className="rv">
              <summary>Frequently asked question 4?</summary>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </details>
            <details className="rv">
              <summary>Frequently asked question 5?</summary>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </details>
            <details className="rv">
              <summary>Frequently asked question 6?</summary>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </details>
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
