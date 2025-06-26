import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

const Contact = () => {
  const [formData, setFormData] = useState({
    phone: '',
    feedback: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('Complaint added successfully!');
    setFormData({ phone: '', feedback: '' });

    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '600px' }}>
      <form onSubmit={handleSubmit} className="border p-4 rounded shadow-sm" style={{ backgroundColor: 'white' }}>
        <h2 className="text-center mb-4">Contact Us</h2>

        {/* ✅ Contact Details with Icons */}
        <div className="mb-4 text-center">
          <p><MdEmail className="me-2" /> support@dailygroceries.com</p>
          <p><MdPhone className="me-2" /> +91 63823 33494</p>
          <p><MdLocationOn className="me-2" /> 123 Fresh Street, Market Road, Chennai, India</p>
        </div>

        {/* Complaint Form */}
        <div className="mb-3">
          <label className="form-label">Your Phone Number</label>
          <input
            type="tel"
            name="phone"
            className="form-control"
            value={formData.phone}
            onChange={handleChange}
            required
            pattern="[0-9]{10}"
            placeholder="Enter 10-digit mobile number"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Complaint / Feedback</label>
          <textarea
            name="feedback"
            className="form-control"
            rows="4"
            value={formData.feedback}
            onChange={handleChange}
            required
            placeholder="Write your complaint or feedback here..."
          ></textarea>
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-danger">Add Complaint</button>
        </div>

        <div className="text-center mt-3">
          <Link to="/" className="btn btn-primary">Back to Home</Link>
        </div>

        {message && <div className="alert alert-success mt-3 text-center">{message}</div>}
      </form>
    </div>
  );
};

export default Contact;
