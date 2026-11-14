import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="w">
        <div className="fcols">
          <div>
            <b>Cliento</b>
            <p>We turn cold prospects into signed clients with a disciplined ten-step acquisition road-map.</p>
          </div>
          <div>
            <b>Company</b>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div>
            <b>Services</b>
            <Link to="/services">All services</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/faq">FAQ</Link>
          </div>
          <div>
            <b>Legal</b>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
        <div className="fbot">
          <span>© {new Date().getFullYear()} Cliento. All rights reserved.</span>
          <span>hello@example.com · +00 000 000 0000</span>
        </div>
      </div>
    </footer>
  );
}

