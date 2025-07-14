'use client';
import React from 'react';
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="navigation fade-in">
      <div className="nav-container">
        {/* Logo linked to landing page */}
        <Link href="/" className="nav-logo">
          <svg className="logo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14,2 14,8 20,8"/>
            <line x1="16" y1="13" x2="8" y2="13"/>
            <line x1="16" y1="17" x2="8" y2="17"/>
            <polyline points="10,9 9,9 8,9"/>
          </svg>
          <span className="logo-text">BlogEngine Pro</span>
        </Link>

        {/* Navigation Links */}
        <div className="nav-links">
          <a
            href="#features"
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Features
          </a>
          <a href="#dashboard" className="nav-link">Account</a>
          <Link href="/login">
            <button className="get-started-btn">Get Started</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
