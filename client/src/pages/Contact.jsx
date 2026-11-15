import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    startup: '',
    services: [],
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [statusMsg, setStatusMsg] = useState('');

  const SERVICE_OPTIONS = [
    "Leads Find Out",
    "Enrichment on Leads",
    "Write E-mail Sequences",
    "Run Campaigns on Qualified Leads",
    "Replies on Emails",
    "Cold Calling"
  ];

  const handleCheckbox = (option) => {
    setFormData((prev) => {
      const selected = prev.services.includes(option)
        ? prev.services.filter((s) => s !== option)
        : [...prev.services, option];
      return { ...prev, services: selected };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatusMsg('');

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, source: 'Contact Form' })
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatusMsg(data.message || 'Thanks! Your message was received.');
        setFormData({ name: '', email: '', phone: '', startup: '', services: [], message: '' });
      } else {
        setStatusMsg(data.error || 'Failed to submit. Please try again.');
      }
    } catch (err) {
      // Local fallback
      try {
        const local = JSON.parse(localStorage.getItem('leads') || '[]');
        local.push({ ...formData, at: Date.now() });
        localStorage.setItem('leads', JSON.stringify(local));
      } catch (x) {}
      setStatusMsg('Thanks! Your message was saved.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <header className="page-hero">
        <i className="blob" data-px=".15" style={{ width: 300, height: 300, background: 'var(--c1)', left: -80, top: -60 }}></i>
        <i className="blob" data-px="-.1" style={{ width: 260, height: 260, background: 'var(--c4)', right: -60, top: 40, animationDelay: '-4s' }}></i>
        <div className="w" style={{ position: 'relative', zIndex: 1 }}>
          <div className="crumb">Home / Contact Us</div>
          <h1>Contact <b>Us</b></h1>
          <p>We are ready to help your startup accelerate customer acquisition.</p>
        </div>
      </header>

      <section>
        <div className="w">
          <div className="split">
            <div className="rl">
              <h2>Let's <b>talk</b></h2>
              <p className="sub">
                Connect with our team to discuss your startup, target prospects, and custom acquisition roadmap.
              </p>
              <p>
                <b>Email:</b> <a href="mailto:cliento366@gmail.com" style={{ color: 'var(--c4)' }}>cliento366@gmail.com</a><br />
                <b>Phone:</b> <a href="tel:+923200209383" style={{ color: 'var(--c4)' }}>+92 320 0209383</a>
              </p>
            </div>

            <div className="card rr">
              <form id="cf" onSubmit={handleSubmit} style={{ margin: 0, maxWidth: 'none' }}>
                <input
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
                <input
                  name="phone"
                  placeholder="Contact number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
                <textarea
                  name="startup"
                  rows="1"
                  placeholder="About your Startup"
                  value={formData.startup}
                  onChange={(e) => setFormData({ ...formData, startup: e.target.value })}
                  style={{ resize: 'none', height: '46px', lineHeight: '1.6', overflowY: 'hidden' }}
                ></textarea>
                <div style={{ textAlign: 'left' }}>
                  <p style={{ margin: '0 0 10px', fontWeight: 600, fontSize: 14 }}>Select Services</p>
                  <div className="services-checkbox-grid">
                    {SERVICE_OPTIONS.map((option) => (
                      <label key={option} style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', fontSize: 13, color: 'var(--mu)' }}>
                        <input
                          type="checkbox"
                          checked={formData.services.includes(option)}
                          onChange={() => handleCheckbox(option)}
                          style={{ width: 'auto', accentColor: 'var(--c1)', cursor: 'pointer' }}
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                </div>
                <textarea
                  name="message"
                  rows="3"
                  placeholder="Tell us about your goals"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
                <button className="btn" type="submit" disabled={submitting}>
                  {submitting ? 'Sending...' : 'Send message'}
                </button>
              </form>
              {statusMsg && <div id="msg">{statusMsg}</div>}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
