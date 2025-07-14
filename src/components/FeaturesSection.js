import React from 'react';

export default function FeaturesSection() {
  return (
    <section className="features-section" id="features">
      <div className="features-container">
        <div className="feature-card stagger-animation" style={{animationDelay: '0.1s'}}>
          <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14,2 14,8 20,8"/>
            <line x1="16" y1="13" x2="8" y2="13"/>
            <line x1="16" y1="17" x2="8" y2="17"/>
            <polyline points="10,9 9,9 8,9"/>
          </svg>
          <h3 className="feature-title">Rich Editor</h3>
          <p className="feature-description">Create beautiful content with our powerful rich text editor featuring formatting tools, media embedding, and real-time collaboration.</p>
        </div>
        <div className="feature-card stagger-animation" style={{animationDelay: '0.2s'}}>
          <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/>
            <line x1="3" y1="10" x2="21" y2="10"/>
            <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"/>
          </svg>
          <h3 className="feature-title">Smart Scheduling</h3>
          <p className="feature-description">Schedule posts in advance with intelligent timing suggestions based on your audience engagement patterns and optimal posting times.</p>
        </div>
        <div className="feature-card stagger-animation" style={{animationDelay: '0.3s'}}>
          <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="20" x2="18" y2="10"/>
            <line x1="12" y1="20" x2="12" y2="4"/>
            <line x1="6" y1="20" x2="6" y2="14"/>
            <circle cx="18" cy="7" r="3"/>
            <circle cx="6" cy="11" r="3"/>
            <circle cx="12" cy="1" r="3"/>
          </svg>
          <h3 className="feature-title">Analytics Dashboard</h3>
          <p className="feature-description">Track your blog's performance with comprehensive analytics including views, engagement, reader demographics, and growth metrics.</p>
        </div>
        <div className="feature-card stagger-animation" style={{animationDelay: '0.4s'}}>
          <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
            <circle cx="12" cy="16" r="1"/>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
          </svg>
          <h3 className="feature-title">Secure and Reliable</h3>
          <p className="feature-description">Your content is protected with enterprise-grade security, automatic backups, and 99.9% uptime guarantee for peace of mind.</p>
        </div>
        <div className="feature-card stagger-animation" style={{animationDelay: '0.5s'}}>
          <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/>
            <path d="M21 21l-4.35-4.35"/>
            <path d="M11 6v10M6 11h10"/>
          </svg>
          <h3 className="feature-title">SEO Optimized</h3>
          <p className="feature-description">Built-in SEO tools help you rank higher with meta tag optimization, keyword suggestions, and search engine friendly URLs.</p>
        </div>
        <div className="feature-card stagger-animation" style={{animationDelay: '0.6s'}}>
          <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
            <path d="M12 8l-2 4h4l-2 4"/>
          </svg>
          <h3 className="feature-title">Lightning Fast</h3>
          <p className="feature-description">Optimized for speed with CDN delivery, image compression, and caching to ensure your blog loads instantly worldwide.</p>
        </div>
      </div>
    </section>
  );
}