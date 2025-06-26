import React from 'react';

const Privacy = () => {
  return (
    <div className="container bg-white text-dark my-5 p-4 rounded shadow-sm" style={{ maxWidth: '800px' }}>
      <h2 className="mb-4 text-center fw-bold">Privacy Policy</h2>

      <p>
        At <strong>DailyGroceries</strong>, we are committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal information.
      </p>

      <h5 className="mt-4 fw-bold">1. Information We Collect</h5>
      <p>
        We may collect your name, email address, phone number, delivery address, and payment details when you make a purchase or sign up.
      </p>

      <h5 className="mt-4 fw-bold">2. How We Use Your Information</h5>
      <p>
        We use your data to:
        <ul>
          <li>Process and deliver orders</li>
          <li>Respond to customer queries</li>
          <li>Improve our services and promotions</li>
        </ul>
      </p>

      <h5 className="mt-4 fw-bold">3. Data Security</h5>
      <p>
        We implement industry-standard measures to ensure your data is secure and protected from unauthorized access.
      </p>

      <h5 className="mt-4 fw-bold">4. Third-Party Sharing</h5>
      <p>
        We do not sell your information. Data may be shared with trusted services for delivery or payment processing, under strict confidentiality.
      </p>

      <h5 className="mt-4 fw-bold">5. Your Rights</h5>
      <p>
        You may request to view, update, or delete your personal data by contacting our support team.
      </p>

      <p className="mt-4">
        If you have any questions, contact us at <strong>support@dailygroceries.com</strong>.
      </p>
    </div>
  );
};

export default Privacy;
