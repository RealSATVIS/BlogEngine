'use client';
import React from 'react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="powered-by slide-up" style={{ animationDelay: '0.2s' }}>
          <svg className="powered-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
          </svg>
          <span>Powered by Modern Technology</span>
        </div>

        <h1 className="hero-title slide-up" style={{ animationDelay: '0.4s' }}>
          Professional Blogging<br />
          <span className="hero-title-highlight">Made Simple</span>
        </h1>

        <p className="hero-description slide-up" style={{ animationDelay: '0.6s' }}>
          Create, schedule, and manage your blog content with our powerful platform.<br />
          Built for writers, marketers, and businesses who want to focus on what matters<br />
          most.
        </p>

        <div className="hero-buttons slide-up" style={{ animationDelay: '0.8s' }}>
          <Link href="/login" className="start-writing-btn">
            Start Writing →
          </Link>
          <button className="view-demo-btn">
            View Demo
          </button>
        </div>
      </div>
    </section>
  );
}
