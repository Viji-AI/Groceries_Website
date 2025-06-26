import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }

    // Save credentials to localStorage
    const userData = {
      fullName: formData.fullName,
      email: formData.email,
      password: formData.password
    };

    localStorage.setItem('user', JSON.stringify(userData));
    setMessage("Account created successfully!");

    // Redirect to Sign In after short delay
    setTimeout(() => {
      navigate('/signin');
    }, 1500);
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '500px' }}>
      <form
        onSubmit={handleSubmit}
        className="border p-4 rounded shadow"
        style={{ backgroundColor: 'white' }}
      >
        <h2 className="text-center mb-4">Create Account</h2>

        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">Sign Up</button>

        {message && (
          <div className="alert alert-info mt-3 text-center">{message}</div>
        )}
      </form>
    </div>
  );
};

export default Signup;
