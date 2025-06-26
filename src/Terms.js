import React from 'react';

const Terms = () => {
  return (
    <div className="container bg-white text-dark my-5 p-4 rounded shadow-sm" style={{ maxWidth: '800px' }}>
      <h2 className="mb-4 text-center fw-bold">Terms of Use</h2>

      <p>
        Welcome to <strong>DailyGroceries</strong>. By accessing or using our website, you agree to be bound by the following terms and conditions. Please read them carefully.
      </p>

      <h5 className="mt-4 fw-bold">1. Use of the Website</h5>
      <p>
        You must be at least 18 years old or under supervision of a guardian to use this site. You agree not to misuse the platform or engage in unlawful or prohibited activity.
      </p>

      <h5 className="mt-4 fw-bold">2. Product Information</h5>
      <p>
        We strive to provide accurate product information and images, but variations may occur. Prices and availability are subject to change without notice.
      </p>

      <h5 className="mt-4 fw-bold">3. Orders & Payments</h5>
      <p>
        Orders placed are subject to availability and acceptance. We reserve the right to cancel or refuse any order. Payment can be made via UPI, Cash on Delivery, Net Banking, or Card.
      </p>

      <h5 className="mt-4 fw-bold">4. Delivery</h5>
      <p>
        Deliveries are usually completed within 2–3 business days. We are not responsible for delays caused by events beyond our control.
      </p>

      <h5 className="mt-4 fw-bold">5. Returns & Refunds</h5>
      <p>
        Returns must be requested within 24 hours of delivery for perishable items. Please contact support to initiate a return or refund.
      </p>

      <h5 className="mt-4 fw-bold">6. Intellectual Property</h5>
      <p>
        All content on this website, including text, graphics, logos, and images, is the property of DailyGroceries and may not be used without permission.
      </p>

      <h5 className="mt-4 fw-bold">7. Privacy</h5>
      <p>
        We value your privacy. Please refer to our Privacy Policy to understand how we collect and use your information.
      </p>

      <h5 className="mt-4 fw-bold">8. Changes to Terms</h5>
      <p>
        We reserve the right to update these terms at any time. Continued use of the site after changes implies acceptance.
      </p>

      <h5 className="mt-4 fw-bold">9. Contact Us</h5>
      <p>
        For any questions about these terms, please contact us at <strong>support@dailygroceries.com</strong>.
      </p>
    </div>
  );
};

export default Terms;
