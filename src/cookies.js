import React from 'react';

const Cookies = () => {
  return (
    <div className="container bg-white text-dark my-5 p-4 rounded shadow-sm" style={{ maxWidth: '800px' }}>
      <h2 className="mb-4 text-center fw-bold">Cookies Policy</h2>

      <p>
        This Cookies Policy explains how <strong>DailyGroceries</strong> uses cookies and similar technologies on our website.
      </p>

      <h5 className="mt-4 fw-bold">1. What Are Cookies?</h5>
      <p>
        Cookies are small text files that are stored on your device when you visit a website. They help us enhance user experience, track usage, and deliver personalized content.
      </p>

      <h5 className="mt-4 fw-bold">2. How We Use Cookies</h5>
      <p>
        We use cookies to:
        <ul>
          <li>Remember user preferences and login sessions</li>
          <li>Analyze website traffic and user behavior</li>
          <li>Deliver relevant promotional content</li>
        </ul>
      </p>

      <h5 className="mt-4 fw-bold">3. Managing Cookies</h5>
      <p>
        Most web browsers allow control of cookies through settings. You can disable cookies, but it may affect your experience on our site.
      </p>

      <h5 className="mt-4 fw-bold">4. Changes to This Policy</h5>
      <p>
        We may update this Cookies Policy from time to time. Please review it periodically.
      </p>

      <p className="mt-4">
        For more information, contact us at <strong>support@dailygroceries.com</strong>.
      </p>
    </div>
  );
};

export default Cookies;
