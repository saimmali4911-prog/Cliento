import React from 'react';

export default function Privacy() {
  return (
    <div>
      <header className="page-hero">
        <i className="blob" data-px=".15" style={{ width: 300, height: 300, background: 'var(--c1)', left: -80, top: -60 }}></i>
        <i className="blob" data-px="-.1" style={{ width: 260, height: 260, background: 'var(--c4)', right: -60, top: 40, animationDelay: '-4s' }}></i>
        <div className="w" style={{ position: 'relative', zIndex: 1 }}>
          <div className="crumb">Home / Privacy Policy</div>
          <h1>Privacy <b>Policy</b></h1>
          <p>Your Privacy Matters. Your Data Stays Protected.</p>
        </div>
      </header>

      <section>
        <div className="w">
          <div className="prose">
            <h3>1. Introduction</h3>
            <p>At Cliento, we value your privacy and are committed to protecting your personal and business information. This Privacy Policy explains how we collect, use, store, and protect information when you use our website and services.</p>

            <h3>2. Information We Collect</h3>
            <p>We may collect personal and business information, including names, email addresses, phone numbers, company details, and other information you voluntarily provide. We may also collect basic website usage data to improve our services and user experience.</p>

            <h3>3. How We Use Your Information</h3>
            <p>We use collected information to provide and improve our services, manage lead generation activities, create email sequences, execute marketing campaigns, communicate with clients, and support business growth. We do not sell personal information to third parties.</p>

            <h3>4. Contact Us</h3>
            <p>If you have any questions, concerns, or requests regarding this Privacy Policy or your personal information, please contact our team through our official communication channels (<a href="mailto:cliento366@gmail.com" style={{ color: 'var(--c4)' }}>cliento366@gmail.com</a> / <a href="tel:+923200209383" style={{ color: 'var(--c4)' }}>+92 320 0209383</a>). We are committed to addressing your privacy concerns transparently and responsibly.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
