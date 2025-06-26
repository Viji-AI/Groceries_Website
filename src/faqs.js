import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'How do I place an order?',
      answer: 'You can place an order by browsing products and clicking the "Buy Now" button. Fill out the form and submit your order.'
    },
    {
      question: 'What payment methods are accepted?',
      answer: 'We accept UPI, Cash on Delivery, Net Banking, and Card Payments.'
    },
    {
      question: 'How long does delivery take?',
      answer: 'Orders are usually delivered within 2-3 business days depending on your location.'
    },
    {
      question: 'Can I cancel or modify my order?',
      answer: 'Yes, you can cancel or modify your order by contacting us within 1 hour of placing it.'
    },
    {
      question: 'How do I raise a complaint?',
      answer: 'Visit our Contact Us page and fill out the form with your phone number and feedback. We’ll get back to you quickly.'
    }
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container my-5" style={{ maxWidth: '700px' }}>
      <div className="border p-4 rounded shadow-sm" style={{ backgroundColor: 'white' }}>
        <h2 className="text-center fw-bold mb-4">
          Things you may wonder: <span className="text-primary">FAQs</span>
        </h2>
        {faqs.map((faq, index) => (
          <div className="card mb-3 shadow-sm" key={index}>
            <div
              className="card-header d-flex justify-content-between align-items-center"
              onClick={() => toggle(index)}
              style={{ cursor: 'pointer' }}
            >
              <strong>{faq.question}</strong>
              <span>{openIndex === index ? '-' : '+'}</span>
            </div>
            {openIndex === index && (
              <div className="card-body">
                <p className="mb-0">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
