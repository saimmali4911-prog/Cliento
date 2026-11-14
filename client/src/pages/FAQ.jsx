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
          <h1>Frequently Asked <b>Questions</b></h1>
          <p>Got Questions? We've Got Answers.</p>
        </div>
      </header>

      <section>
        <div className="w">
          <div className="prose">
            <details className="rv" open>
              <summary>1. What is Cliento?</summary>
              <p>Cliento is a business focused on understanding clients' priorities and providing the right solutions to support their business growth.</p>
            </details>
            <details className="rv">
              <summary>2. What services does Cliento provide?</summary>
              <p>Cliento focuses on business development, client solutions, identifying opportunities, and building valuable business connections.</p>
            </details>
            <details className="rv">
              <summary>3. What is the mission of Cliento?</summary>
              <p>Our mission is to understand our clients' priorities and provide the right solutions that drive business growth, create value, and deliver measurable results.</p>
            </details>
            <details className="rv">
              <summary>4. Who can work with Cliento?</summary>
              <p>Startups, small businesses, growing companies, and established organizations.</p>
            </details>
            <details className="rv">
              <summary>5. Why should clients choose Cliento?</summary>
              <p>Because we prioritize client needs, focus on quality solutions, and build long-term relationships.</p>
            </details>
            <details className="rv">
              <summary>6. Does Cliento support startups?</summary>
              <p>Yes, we aim to help startups identify opportunities and develop strategies for business growth.</p>
            </details>
            <details className="rv">
              <summary>7. How does Cliento create value?</summary>
              <p>By understanding business challenges and providing practical solutions.</p>
            </details>
            <details className="rv">
              <summary>8. Does Cliento believe in long-term partnerships?</summary>
              <p>Yes, we believe in trust, transparency, and long-term business relationships.</p>
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
