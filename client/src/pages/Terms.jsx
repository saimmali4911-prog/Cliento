import React from 'react';

export default function Terms() {
  return (
    <div>
      <header className="page-hero">
        <i className="blob" data-px=".15" style={{ width: 300, height: 300, background: 'var(--c1)', left: -80, top: -60 }}></i>
        <i className="blob" data-px="-.1" style={{ width: 260, height: 260, background: 'var(--c4)', right: -60, top: 40, animationDelay: '-4s' }}></i>
        <div className="w" style={{ position: 'relative', zIndex: 1 }}>
          <div className="crumb">Home / Terms of Service</div>
          <h1>Terms of <b>Service</b></h1>
          <p>Clear Terms. Transparent Services. Stronger Partnerships.</p>
        </div>
      </header>

      <section>
        <div className="w">
          <div className="prose">
            <h3>1. Terms &amp; Conditions</h3>
            <p>By using Cliento's website or services, you agree to these Terms &amp; Conditions. Cliento provides lead generation, email outreach, marketing campaign management, and deal-closing support to eligible startups. We reserve the right to accept or decline service requests based on our eligibility criteria and business requirements.</p>

            <h3>2. Service Eligibility &amp; Payment Terms</h3>
            <p>Cliento primarily works with startups that have been operating for at least six months. Startups operating for less than six months are not eligible for our services. A 20% advance payment of the agreed project fee is required before work begins. The remaining payment will be made according to the mutually agreed payment schedule.</p>

            <h3>3. Disclaimer</h3>
            <p>Cliento is committed to delivering professional services and strategic support to help businesses grow. However, we do not guarantee a specific number of leads, sales, conversions, or revenue, as results depend on several factors, including market conditions, target audience, and client offerings. Clients are responsible for providing accurate information and necessary business materials.</p>

            <h3>4. Governing Law</h3>
            <p>These Terms &amp; Conditions shall be governed by the applicable laws of Pakistan. Any disputes arising from our services or these terms will be handled in accordance with the relevant legal procedures and applicable jurisdiction.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
