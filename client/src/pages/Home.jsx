import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const PHASES = [
  {
    n: "Foundation",
    s: [
      ["01", "Start-up", "Define the ideal client profile, positioning and core service offer.", "Business & offer brief", "★★★ Top priority"],
      ["02", "Landing Page", "Design and build a conversion-focused landing page with a clear call to action.", "Live landing page"]
    ]
  },
  {
    n: "Lead Generation",
    s: [
      ["03", "Leads Find Out", "Source and list prospects who match the ideal client profile.", "Raw lead list"],
      ["04", "Enrichment on Leads", "Verify and enrich contact and company data on the sourced leads.", "Enriched, segmented database", "✓ Marked complete"]
    ]
  },
  {
    n: "Outreach & Engagement",
    s: [
      ["05", "Write E-mail Sequences", "Draft a multi-touch email sequence: intro, value, follow-up, call-to-action.", "Ready-to-send sequence"],
      ["06", "Run Campaigns on Qualified Leads", "Launch the outbound campaign to the enriched, qualified list.", "Live campaign"],
      ["07", "Replies on Emails", "Monitor the inbox, respond to replies, and qualify genuine interest.", "Qualified conversations"],
      ["08", "Cold Calling", "Call non-responders directly to lift engagement and book meetings.", "Booked calls / meetings"]
    ]
  },
  {
    n: "Conversion & Delivery",
    s: [
      ["09", "Deal's Close", "Present the proposal, negotiate terms, and get the contract signed.", "Signed client agreement", "✓ Marked complete"],
      ["10", "Start Working on Client Project", "Kick off the engagement and begin delivering the client's project.", "Project kickoff plan"]
    ]
  }
];

const WORDS = ["road-map", "framework", "funnel", "playbook"];

const MARQUEE_LABELS = [
  "See Start Ups", "Check Landing Page",
  "Leads Find Out", "Enrichment on Leads",
  "Write E-mail Sequences", "Run Campaigns on Qualified Leads",
  "Replies on Emails", "Cold Calling",
  "Deal's Close", "Start Working on Client Project"
];

export default function Home() {
  const [activePhase, setActivePhase] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [wordOut, setWordOut] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    startup: '',
    services: [],
    message: ''
  });

  const SERVICE_OPTIONS = [
    "Start-up",
    "Landing Page",
    "Leads Find Out",
    "Enrichment on Leads",
    "Write E-mail Sequences",
    "Run Campaigns on Qualified Leads",
    "Replies on Emails",
    "Cold Calling",
    "Deal's Close",
    "Start Working on Client Project"
  ];

  const handleCheckbox = (option) => {
    setFormData((prev) => {
      const selected = prev.services.includes(option)
        ? prev.services.filter((s) => s !== option)
        : [...prev.services, option];
      return { ...prev, services: selected };
    });
  };
  const [statusMsg, setStatusMsg] = useState('');
  const [submitting, setSubmitting] = useState(false);

  // Rotating words
  useEffect(() => {
    const interval = setInterval(() => {
      setWordOut(true);
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % WORDS.length);
        setWordOut(false);
      }, 400);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatusMsg('');

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, source: 'Home Walkthrough Form' })
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatusMsg(data.message || 'Thanks! We will be in touch shortly.');
        setFormData({ name: '', email: '', startup: '', services: [], message: '' });
      } else {
        setStatusMsg(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      // Local fallback
      try {
        const local = JSON.parse(localStorage.getItem('leads') || '[]');
        local.push({ ...formData, at: Date.now() });
        localStorage.setItem('leads', JSON.stringify(local));
      } catch (x) { }
      setStatusMsg("Thanks! Your message was saved locally.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      {/* Hero */}
      <header className="hero" id="top">
        <i className="blob" data-px=".15" style={{ width: 340, height: 340, background: 'var(--c1)', left: -80, top: -60 }}></i>
        <i className="blob" data-px="-.1" style={{ width: 300, height: 300, background: 'var(--c4)', right: -60, top: 80, animationDelay: '-4s' }}></i>
        <i className="blob" data-px=".08" style={{ width: 260, height: 260, background: 'var(--c2)', left: '40%', bottom: -120, animationDelay: '-8s' }}></i>
        <div className="w">
          <span className="tag">Road-Map v1.0 · Connect Client-to-Client</span>
          <h1>
            The ten-step client acquisition{' '}
            <b id="rw" className={wordOut ? 'o' : ''}>
              {WORDS[wordIndex]}
            </b>
          </h1>
          <p>
            From identifying potential customers to closing the deal, Cliento helps startups turn opportunities into revenue.
          </p>
          <a className="btn" href="#roadmap">Start the roadmap</a>{' '}
          <a className="btn o" href="#contact">Book a walkthrough</a>

          <div className="stats">
            <div className="stat"><b data-count="2">2</b><span>Foundation</span></div>
            <div className="stat"><b data-count="2">2</b><span>Lead Generation</span></div>
            <div className="stat"><b data-count="4">4</b><span>Outreach & Engagement</span></div>
            <div className="stat"><b data-count="2">2</b><span>Conversion & Delivery</span></div>
          </div>
        </div>
      </header>

      {/* Marquee ticker */}
      <div className="mq">
        <div>
          {[0, 1].map((setIdx) =>
            MARQUEE_LABELS.map((t, idx) => (
              <span key={`${setIdx}-${idx}`}>✦ {t}</span>
            ))
          )}
        </div>
      </div>

      {/* Why Cliento with word-by-word scroll reveal */}
      <section className="alt">
        <div className="w">
          <h2 className="rl">Why <b>Cliento</b></h2>
          <p className="wr">
            We empower startups to accelerate growth through strategic lead generation, personalized email outreach, targeted campaigns, and deal closing. We streamline customer acquisition, build meaningful connections, and turn prospects into customers allowing you to focus on growing your business while we drive results.
          </p>
        </div>
      </section>

      {/* What we do */}
      <section>
        <div className="w">
          <h2>What we <b>do</b></h2>
          <div className="stack">
            <div className="card sc" style={{ '--i': 0, '--pc': 'var(--c1)' }}>
              <span className="n">SERVICE 01</span>
              <h3>Lead Generation</h3>
              <p>Identifying and attracting potential customers who are interested in your services.</p>
            </div>
            <div className="card sc" style={{ '--i': 1, '--pc': 'var(--c2)' }}>
              <span className="n">SERVICE 02</span>
              <h3>Email Sequences</h3>
              <p>Creating personalized email sequences to engage prospects and build relationships.</p>
            </div>
            <div className="card sc" style={{ '--i': 2, '--pc': 'var(--c3)' }}>
              <span className="n">SERVICE 03</span>
              <h3>Campaign Run</h3>
              <p>Launching targeted marketing campaigns to reach the right audience and generate leads.</p>
            </div>
            <div className="card sc" style={{ '--i': 3, '--pc': 'var(--c4)' }}>
              <span className="n">SERVICE 04</span>
              <h3>Deal Closing</h3>
              <p>Turning qualified prospects into paying customers through effective communication and follow-ups.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap">
        <div className="w">
          <h2>The <b>road-map</b></h2>
          <p className="sub">10 steps across four phases. Pick a phase to see its steps and deliverables.</p>

          <div className="tabs">
            {PHASES.map((p, i) => (
              <button
                key={i}
                className={activePhase === i ? 'on' : ''}
                onClick={() => setActivePhase(i)}
              >
                {String(i + 1).padStart(2, '0')} {p.n}
              </button>
            ))}
          </div>

          <div className="grid">
            {PHASES[activePhase].s.map((step, idx) => (
              <div className="card" key={idx} style={{ '--pc': `var(--c${activePhase + 1})` }}>
                <span className="n">STEP {step[0]}</span>
                <h3>{step[1]}</h3>
                <p>{step[2]}</p>
                <div className="dl"><b>Deliverable:</b> {step[3]}</div>
                {step[4] && <span className="pill">{step[4]}</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Funnel */}
      <section className="alt" id="funnel">
        <div className="w">
          <h2>The funnel <b>view</b></h2>
          <p className="sub">
            Steps 3 through 9 read as a funnel: a wide pool of sourced leads is progressively enriched, contacted, engaged and followed up until a smaller set convert into closed deals.
          </p>
          <div className="funnel">
            {["Leads Sourced", "Enriched & Verified", "Email Sequence Sent", "Replies / Engaged", "Cold-Call Follow-up", "Deal's Closed"].map((t, i) => (
              <div
                key={i}
                style={{
                  width: `${100 - i * 12}%`,
                  background: `var(--c${(i % 4) + 1})`
                }}
              >
                {i + 1} · {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Priorities & Milestones */}
      <section id="priorities">
        <div className="w">
          <h2>Priorities & <b>milestones</b></h2>
          <p className="sub">The checkpoints that gate everything downstream.</p>
          <div className="two">
            <div className="card" style={{ '--pc': 'var(--c1)' }}>
              <span className="n">TOP PRIORITY ★</span>
              <h3>Start-up</h3>
              <ul>
                <li>Positioning must be locked first.</li>
                <li>Offer must be locked before scaling spend on later stages.</li>
                <li>Build a clear and differentiated value proposition.</li>
                <li>Validate the problem before investing heavily.</li>
              </ul>
            </div>
            <div className="card" style={{ '--pc': 'var(--c2)' }}>
              <span className="n">COMPLETE ✓</span>
              <h3>Enrichment on Leads</h3>
              <ul>
                <li>Data-quality checkpoint.</li>
                <li>Contact and company details verified before any outreach goes out.</li>
                <li>Segment leads based on fit and potential.</li>
                <li>Prioritize high-intent prospects for outreach.</li>
              </ul>
            </div>
            <div className="card" style={{ '--pc': 'var(--c3)' }}>
              <span className="n">COMPLETE ✓</span>
              <h3>Deal's Close</h3>
              <ul>
                <li>Revenue checkpoint.</li>
                <li>A qualified conversation becomes a signed, paying client.</li>
                <li>Confirm budget, decision process, and timeline.</li>
                <li>Align the solution with measurable business outcomes.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="alt" id="about">
        <div className="w">
          <div className="two">
            <div className="card">
              <span className="n">OUR MISSION</span>
              <h3>To understand our client's priorities and provide the right solutions</h3>
              <p>Solutions that drive business growth, create value, and deliver measurable results.</p>
            </div>
            <div className="card">
              <span className="n">OUR VISION</span>
              <h3>A trusted business and preferred partner for our clients</h3>
              <p>Consistently delivering the right solutions, creating long-term value, and contributing to their sustainable growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Walkthrough booking form connected to Node.js backend */}
      <section id="contact">
        <div className="w">
          <div className="cta">
            <h2>Next: run the <b>full build</b></h2>
            <p className="sub" style={{ margin: 'auto' }}>
              Confirm the Start-up positioning brief, it gates every step downstream. Then move Landing Page and Leads Find Out into active work.
            </p>
            <form onSubmit={handleSubmit}>
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
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '8px' }}>
                  {SERVICE_OPTIONS.map((option) => (
                    <label key={option} style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', fontSize: 14, color: 'var(--mu)' }}>
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
                {submitting ? 'Submitting...' : 'Book a walkthrough'}
              </button>
            </form>
            {statusMsg && <div id="msg">{statusMsg}</div>}
          </div>
        </div>
      </section>
    </div>
  );
}

