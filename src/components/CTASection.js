import React from 'react';

export default function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2 className="cta-title fade-in-up">Everything You Need to Blog</h2>
        <p className="cta-description fade-in-up" style={{animationDelay: '0.2s'}}>
          From writing to publishing, we've got you covered with powerful tools<br />
          and insights.
        </p>
      </div>
    </section>
  );
}