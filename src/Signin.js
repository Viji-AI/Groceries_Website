import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (
      storedUser &&
      formData.email === storedUser.email &&
      formData.password === storedUser.password
    ) {
      setMessage('Login successful!');
      setTimeout(() => {
        navigate('/dashboard');
      }, 1500);
    } else {
      setMessage('Invalid credentials');
    }

    setFormData({ email: '', password: '' });
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '450px' }}>
      <form
        onSubmit={handleSubmit}
        className="border p-4 rounded shadow"
        style={{ backgroundColor: 'white' }}
      >
        <h2 className="text-center mb-4">Sign In</h2>

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

        <button type="submit" className="btn btn-dark w-100">Sign In</button>

        {message && <div className="alert alert-info mt-3 text-center">{message}</div>}
      </form>
    </div>
  );
};

export default Signin;
