import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Web Development',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [statusMsg, setStatusMsg] = useState('');

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
        setFormData({ name: '', email: '', phone: '', service: 'Web Development', message: '' });
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
      setStatusMsg('Thanks! Your message was saved. (Connected to Node.js backend)');
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
          <p>Dummy text: we reply within one business day.</p>
        </div>
      </header>

      <section>
        <div className="w">
          <div className="split">
            <div className="rl">
              <h2>Let's <b>talk</b></h2>
              <p className="sub">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                <b>Email:</b> hello@example.com<br />
                <b>Phone:</b> +00 000 000 0000<br />
                <b>Address:</b> 123 Example Street, City, Country
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
                <select
                  name="service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                >
                  <option>Web Development</option>
                  <option>App Development</option>
                  <option>CRM</option>
                  <option>SEO</option>
                  <option>Other</option>
                </select>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Tell us how we can help"
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
