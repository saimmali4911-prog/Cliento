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
          <span><a href="mailto:cliento366@gmail.com">cliento366@gmail.com</a> · <a href="tel:+923200209383">+92 320 0209383</a></span>
        </div>
      </div>
    </footer>
  );
}

