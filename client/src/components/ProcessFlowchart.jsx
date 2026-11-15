import React, { useState } from 'react';

export default function ProcessFlowchart() {
  const [activeStep, setActiveStep] = useState(null);

  const stepDetails = {
    client: { title: "Client Onboarding", desc: "Initiating engagement, defining target persona, and establishing project goals." },
    checkAssets: { title: "Check Assets", desc: "Reviewing client assets (collateral, decks, positioning, case studies) for outbound readiness." },
    approved: { title: "Approved / Change", desc: "Existing client assets verified or refined for high-converting outbound outreach." },
    createAsset: { title: "Create Asset Landing Page", desc: "Designing and building a dedicated high-converting landing page to showcase the offer." },
    requireCountry: { title: "Require Country", desc: "Target geography and territory selection based on total addressable market." },
    findLeads: { title: "Find Leads", desc: "Sourcing prospect databases tailored to the ideal client profile (ICP)." },
    qualifiedLeads: { title: "Qualified Leads", desc: "Verification and enrichment of contact details to ensure 98%+ deliverability." },
    writeEmails: { title: "Write Emails", desc: "Crafting personalized multi-touch copy: hook, value proposition, and frictionless CTA." },
    checkSequence: { title: "Check Sequence", desc: "Reviewing email schedule, pacing, fallback triggers, and deliverability checks." },
    emailWarmup: { title: "Email Warm-up", desc: "Configuring SPF, DKIM, DMARC records and warming secondary domains to maintain high sender reputation." },
    runCampaign: { title: "Run Campaign", desc: "Launching targeted outbound campaigns to enriched decision-makers." },
    replyOnEmail: { title: "Reply on Email", desc: "Monitoring inboxes, handling objections, answering questions, and scheduling calls." },
    coldCalling: { title: "Cold Calling", desc: "Phone outreach to non-responders and high-intent leads to maximize meeting booking rates." },
    dealClose: { title: "Deal Close", desc: "Conducting sales meetings, presenting proposals, negotiating terms, and securing agreements." },
    startWork: { title: "Start Work", desc: "Formal onboarding and kicking off delivery with project roadmaps and milestones." },
    deliverWork: { title: "Deliver Work", desc: "Executing client deliverables with ongoing reporting and measurable ROI." }
  };

  return (
    <div className="process-flow-container">
      <div className="process-flow-header">
        <span className="n">END-TO-END METHODOLOGY</span>
        <h3>CLIENTO (Connect Client-to-Client): Sales &amp; Lead Generation Process</h3>
        <p className="sub" style={{ margin: '0 auto 18px', maxWidth: 700 }}>
          Hover or tap any step in the flowchart to view operational details of our acquisition engine.
        </p>
        <div className="mobile-scroll-hint">
          <span>⇄ Swipe horizontally to explore full workflow</span>
        </div>
      </div>

      <div className="flowchart-scroll-wrapper">
        <svg
          viewBox="0 0 940 760"
          className="process-flowchart-svg"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="gradPill" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00d9ff" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#2ee83e" stopOpacity="0.25" />
            </linearGradient>
            <linearGradient id="gradBox" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff5a00" />
              <stop offset="50%" stopColor="#2ee83e" />
              <stop offset="100%" stopColor="#00d9ff" />
            </linearGradient>
            <filter id="glowEffect" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            {/* Marker definitions */}
            <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#00d9ff" />
            </marker>
            <marker id="arrowMuted" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#3a5a54" />
            </marker>
            <marker id="arrowGreen" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#2ee83e" />
            </marker>
            <marker id="arrowOrange" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#ff7a00" />
            </marker>
          </defs>

          {/* Connectors & Arrows */}

          {/* Client -> Check Assets */}
          <line x1="470" y1="52" x2="470" y2="92" stroke="#00d9ff" strokeWidth="2" markerEnd="url(#arrow)" />

          {/* Check Assets -> YES -> Approved / Change */}
          <path d="M 370 115 L 210 115 L 210 162" fill="none" stroke="#2ee83e" strokeWidth="2" markerEnd="url(#arrowGreen)" />
          {/* YES Label */}
          <rect x="270" y="96" width="46" height="20" rx="10" fill="#03070a" stroke="#2ee83e" strokeWidth="1" />
          <text x="293" y="110" fill="#2ee83e" fontSize="11" fontWeight="700" textAnchor="middle">YES</text>

          {/* Check Assets -> NO -> Create Asset Landing Page */}
          <path d="M 570 115 L 730 115 L 730 162" fill="none" stroke="#ff7a00" strokeWidth="2" markerEnd="url(#arrowOrange)" />
          {/* NO Label */}
          <rect x="626" y="96" width="42" height="20" rx="10" fill="#03070a" stroke="#ff7a00" strokeWidth="1" />
          <text x="647" y="110" fill="#ff7a00" fontSize="11" fontWeight="700" textAnchor="middle">NO</text>

          {/* Approved / Change & Create Asset -> Require Country */}
          <path d="M 210 215 L 210 240 L 470 240 L 470 258" fill="none" stroke="#3a5a54" strokeWidth="2" />
          <path d="M 730 215 L 730 240 L 470 240 L 470 258" fill="none" stroke="#3a5a54" strokeWidth="2" markerEnd="url(#arrow)" />

          {/* Require Country -> Find Leads */}
          <line x1="470" y1="310" x2="470" y2="340" stroke="#00d9ff" strokeWidth="2" markerEnd="url(#arrow)" />

          {/* Find Leads -> Qualified Leads (pointing left) */}
          <line x1="370" y1="365" x2="300" y2="365" stroke="#00d9ff" strokeWidth="2" markerEnd="url(#arrow)" />

          {/* Qualified Leads -> Write Emails */}
          <line x1="210" y1="388" x2="210" y2="420" stroke="#00d9ff" strokeWidth="2" markerEnd="url(#arrow)" />

          {/* Write Emails -> Check Sequence */}
          <line x1="300" y1="445" x2="370" y2="445" stroke="#00d9ff" strokeWidth="2" markerEnd="url(#arrow)" />

          {/* Check Sequence -> Email Warm-up */}
          <line x1="570" y1="445" x2="635" y2="445" stroke="#00d9ff" strokeWidth="2" markerEnd="url(#arrow)" />

          {/* Email Warm-up -> Run Campaign */}
          <line x1="730" y1="470" x2="730" y2="500" stroke="#00d9ff" strokeWidth="2" markerEnd="url(#arrow)" />

          {/* Run Campaign -> Reply on Email (pointing left) */}
          <line x1="635" y1="525" x2="570" y2="525" stroke="#00d9ff" strokeWidth="2" markerEnd="url(#arrow)" />

          {/* Reply on Email -> Cold Calling (pointing left) */}
          <line x1="370" y1="525" x2="300" y2="525" stroke="#00d9ff" strokeWidth="2" markerEnd="url(#arrow)" />

          {/* Cold Calling -> Deal Close */}
          <line x1="210" y1="550" x2="210" y2="580" stroke="#00d9ff" strokeWidth="2" markerEnd="url(#arrow)" />

          {/* Deal Close -> Start Work */}
          <line x1="300" y1="605" x2="370" y2="605" stroke="#00d9ff" strokeWidth="2" markerEnd="url(#arrow)" />

          {/* Start Work -> Deliver Work */}
          <line x1="470" y1="630" x2="470" y2="668" stroke="#2ee83e" strokeWidth="2" markerEnd="url(#arrowGreen)" />


          {/* NODES / BOXES */}

          {/* Node 1: CLIENT (Pill) */}
          <g
            className={`flow-node ${activeStep === 'client' ? 'active' : ''}`}
            onMouseEnter={() => setActiveStep('client')}
            onClick={() => setActiveStep('client')}
            style={{ cursor: 'pointer' }}
          >
            <rect x="390" y="14" width="160" height="38" rx="19" fill="#0d2426" stroke="#00d9ff" strokeWidth="1.5" filter="url(#glowEffect)" />
            <text x="470" y="38" fill="#00d9ff" fontSize="13" fontWeight="800" letterSpacing="1.5" textAnchor="middle">CLIENT</text>
          </g>

          {/* Node 2: Check Assets */}
          <g
            className={`flow-node ${activeStep === 'checkAssets' ? 'active' : ''}`}
            onMouseEnter={() => setActiveStep('checkAssets')}
            onClick={() => setActiveStep('checkAssets')}
            style={{ cursor: 'pointer' }}
          >
            <rect x="370" y="92" width="200" height="46" rx="10" fill="#0b1716" stroke="#1b3834" strokeWidth="1.5" />
            <rect x="370" y="92" width="200" height="3" rx="1.5" fill="var(--c4)" />
            <text x="470" y="120" fill="#ffffff" fontSize="14" fontWeight="700" textAnchor="middle">Check Assets</text>
          </g>

          {/* Node 3: Approved / Change */}
          <g
            className={`flow-node ${activeStep === 'approved' ? 'active' : ''}`}
            onMouseEnter={() => setActiveStep('approved')}
            onClick={() => setActiveStep('approved')}
            style={{ cursor: 'pointer' }}
          >
            <rect x="110" y="165" width="200" height="48" rx="10" fill="#0b1716" stroke="#2ee83e" strokeWidth="1.2" />
            <text x="210" y="194" fill="#f5faf7" fontSize="13" fontWeight="700" textAnchor="middle">Approved / Change</text>
          </g>

          {/* Node 4: Create Asset Landing Page */}
          <g
            className={`flow-node ${activeStep === 'createAsset' ? 'active' : ''}`}
            onMouseEnter={() => setActiveStep('createAsset')}
            onClick={() => setActiveStep('createAsset')}
            style={{ cursor: 'pointer' }}
          >
            <rect x="630" y="165" width="200" height="48" rx="10" fill="#0b1716" stroke="#ff7a00" strokeWidth="1.2" />
            <text x="730" y="186" fill="#f5faf7" fontSize="12" fontWeight="700" textAnchor="middle">Create Asset</text>
            <text x="730" y="202" fill="#ffb800" fontSize="12" fontWeight="700" textAnchor="middle">Landing Page</text>
          </g>

          {/* Node 5: Require Country */}
          <g
            className={`flow-node ${activeStep === 'requireCountry' ? 'active' : ''}`}
            onMouseEnter={() => setActiveStep('requireCountry')}
            onClick={() => setActiveStep('requireCountry')}
            style={{ cursor: 'pointer' }}
          >
            <rect x="385" y="260" width="170" height="48" rx="10" fill="#0b1716" stroke="#1b3834" strokeWidth="1.5" />
            <rect x="385" y="260" width="170" height="3" rx="1.5" fill="var(--c2)" />
            <text x="470" y="281" fill="#ffffff" fontSize="13" fontWeight="700" textAnchor="middle">Require</text>
            <text x="470" y="297" fill="#ffe600" fontSize="13" fontWeight="700" textAnchor="middle">Country</text>
          </g>

          {/* Node 6: Find Leads */}
          <g
            className={`flow-node ${activeStep === 'findLeads' ? 'active' : ''}`}
            onMouseEnter={() => setActiveStep('findLeads')}
            onClick={() => setActiveStep('findLeads')}
            style={{ cursor: 'pointer' }}
          >
            <rect x="375" y="342" width="190" height="46" rx="10" fill="#0b1716" stroke="#1b3834" strokeWidth="1.5" />
            <rect x="375" y="342" width="190" height="3" rx="1.5" fill="var(--c1)" />
            <text x="470" y="370" fill="#ffffff" fontSize="14" fontWeight="700" textAnchor="middle">Find Leads</text>
          </g>

          {/* Node 7: Qualified Leads (Pill) */}
          <g
            className={`flow-node ${activeStep === 'qualifiedLeads' ? 'active' : ''}`}
            onMouseEnter={() => setActiveStep('qualifiedLeads')}
            onClick={() => setActiveStep('qualifiedLeads')}
            style={{ cursor: 'pointer' }}
          >
            <rect x="125" y="345" width="170" height="42" rx="21" fill="#0d2524" stroke="#00d9ff" strokeWidth="1.5" />
            <text x="210" y="371" fill="#00d9ff" fontSize="13" fontWeight="700" textAnchor="middle">Qualified Leads</text>
          </g>

          {/* Node 8: Write Emails */}
          <g
            className={`flow-node ${activeStep === 'writeEmails' ? 'active' : ''}`}
            onMouseEnter={() => setActiveStep('writeEmails')}
            onClick={() => setActiveStep('writeEmails')}
            style={{ cursor: 'pointer' }}
          >
            <rect x="120" y="422" width="180" height="46" rx="10" fill="#0b1716" stroke="#1b3834" strokeWidth="1.5" />
            <rect x="120" y="422" width="180" height="3" rx="1.5" fill="var(--c4)" />
            <text x="210" y="450" fill="#ffffff" fontSize="14" fontWeight="700" textAnchor="middle">Write Emails</text>
          </g>

          {/* Node 9: Check Sequence */}
          <g
            className={`flow-node ${activeStep === 'checkSequence' ? 'active' : ''}`}
            onMouseEnter={() => setActiveStep('checkSequence')}
            onClick={() => setActiveStep('checkSequence')}
            style={{ cursor: 'pointer' }}
          >
            <rect x="375" y="422" width="190" height="46" rx="10" fill="#0b1716" stroke="#1b3834" strokeWidth="1.5" />
            <rect x="375" y="422" width="190" height="3" rx="1.5" fill="var(--c2)" />
            <text x="470" y="450" fill="#ffffff" fontSize="14" fontWeight="700" textAnchor="middle">Check Sequence</text>
          </g>

          {/* Node 10: Email Warm-up */}
          <g
            className={`flow-node ${activeStep === 'emailWarmup' ? 'active' : ''}`}
            onMouseEnter={() => setActiveStep('emailWarmup')}
            onClick={() => setActiveStep('emailWarmup')}
            style={{ cursor: 'pointer' }}
          >
            <rect x="640" y="422" width="180" height="46" rx="10" fill="#0b1716" stroke="#1b3834" strokeWidth="1.5" />
            <rect x="640" y="422" width="180" height="3" rx="1.5" fill="var(--c3)" />
            <text x="730" y="450" fill="#ffffff" fontSize="14" fontWeight="700" textAnchor="middle">Email Warm-up</text>
          </g>

          {/* Node 11: Run Campaign */}
          <g
            className={`flow-node ${activeStep === 'runCampaign' ? 'active' : ''}`}
            onMouseEnter={() => setActiveStep('runCampaign')}
            onClick={() => setActiveStep('runCampaign')}
            style={{ cursor: 'pointer' }}
          >
            <rect x="640" y="502" width="180" height="46" rx="10" fill="#0b1716" stroke="#1b3834" strokeWidth="1.5" />
            <rect x="640" y="502" width="180" height="3" rx="1.5" fill="var(--c1)" />
            <text x="730" y="530" fill="#ffffff" fontSize="14" fontWeight="700" textAnchor="middle">Run Campaign</text>
          </g>

          {/* Node 12: Reply on Email */}
          <g
            className={`flow-node ${activeStep === 'replyOnEmail' ? 'active' : ''}`}
            onMouseEnter={() => setActiveStep('replyOnEmail')}
            onClick={() => setActiveStep('replyOnEmail')}
            style={{ cursor: 'pointer' }}
          >
            <rect x="375" y="502" width="190" height="46" rx="10" fill="#0b1716" stroke="#1b3834" strokeWidth="1.5" />
            <rect x="375" y="502" width="190" height="3" rx="1.5" fill="var(--c4)" />
            <text x="470" y="530" fill="#ffffff" fontSize="14" fontWeight="700" textAnchor="middle">Reply on Email</text>
          </g>

          {/* Node 13: Cold Calling */}
          <g
            className={`flow-node ${activeStep === 'coldCalling' ? 'active' : ''}`}
            onMouseEnter={() => setActiveStep('coldCalling')}
            onClick={() => setActiveStep('coldCalling')}
            style={{ cursor: 'pointer' }}
          >
            <rect x="120" y="502" width="180" height="46" rx="10" fill="#0b1716" stroke="#1b3834" strokeWidth="1.5" />
            <rect x="120" y="502" width="180" height="3" rx="1.5" fill="var(--c2)" />
            <text x="210" y="530" fill="#ffffff" fontSize="14" fontWeight="700" textAnchor="middle">Cold Calling</text>
          </g>

          {/* Node 14: Deal Close */}
          <g
            className={`flow-node ${activeStep === 'dealClose' ? 'active' : ''}`}
            onMouseEnter={() => setActiveStep('dealClose')}
            onClick={() => setActiveStep('dealClose')}
            style={{ cursor: 'pointer' }}
          >
            <rect x="120" y="582" width="180" height="46" rx="10" fill="#0b1716" stroke="#1b3834" strokeWidth="1.5" />
            <rect x="120" y="582" width="180" height="3" rx="1.5" fill="var(--c3)" />
            <text x="210" y="610" fill="#ffffff" fontSize="14" fontWeight="700" textAnchor="middle">Deal Close</text>
          </g>

          {/* Node 15: Start Work */}
          <g
            className={`flow-node ${activeStep === 'startWork' ? 'active' : ''}`}
            onMouseEnter={() => setActiveStep('startWork')}
            onClick={() => setActiveStep('startWork')}
            style={{ cursor: 'pointer' }}
          >
            <rect x="375" y="582" width="190" height="46" rx="10" fill="#0b1716" stroke="#1b3834" strokeWidth="1.5" />
            <rect x="375" y="582" width="190" height="3" rx="1.5" fill="var(--c1)" />
            <text x="470" y="610" fill="#ffffff" fontSize="14" fontWeight="700" textAnchor="middle">Start Work</text>
          </g>

          {/* Node 16: DELIVER WORK (Pill) */}
          <g
            className={`flow-node ${activeStep === 'deliverWork' ? 'active' : ''}`}
            onMouseEnter={() => setActiveStep('deliverWork')}
            onClick={() => setActiveStep('deliverWork')}
            style={{ cursor: 'pointer' }}
          >
            <rect x="375" y="670" width="190" height="42" rx="21" fill="#0a291f" stroke="#2ee83e" strokeWidth="1.5" filter="url(#glowEffect)" />
            <text x="470" y="696" fill="#2ee83e" fontSize="13" fontWeight="800" letterSpacing="1.5" textAnchor="middle">DELIVER WORK</text>
          </g>
        </svg>
      </div>

      {/* Step Info Panel */}
      <div className="flow-info-box">
        {activeStep && stepDetails[activeStep] ? (
          <div>
            <span className="n" style={{ color: 'var(--c4)' }}>STEP HIGHLIGHT</span>
            <h4 style={{ margin: '4px 0 6px', fontSize: 18, color: 'var(--tx)' }}>{stepDetails[activeStep].title}</h4>
            <p style={{ margin: 0, color: 'var(--mu)', fontSize: 14 }}>{stepDetails[activeStep].desc}</p>
          </div>
        ) : (
          <p style={{ margin: 0, color: 'var(--mu)', fontSize: 13, textAlign: 'center' }}>
            💡 Hover over or click any process block to inspect the operational workflow.
          </p>
        )}
      </div>
    </div>
  );
}
