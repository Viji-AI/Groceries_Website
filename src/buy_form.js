import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BuyNowForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    paymentMode: '',
    productName: '',
    price: '',
    quantity: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Optionally store the order data (if needed)
    localStorage.setItem('lastOrder', JSON.stringify(formData));

    // Clear the form
    setFormData({
      name: '',
      address: '',
      paymentMode: '',
      productName: '',
      price: '',
      quantity: ''
    });

    // Redirect to thank-you page
    navigate('/thank-you');
  };

  return (
    <div className="container mt-4" style={{ maxWidth: '600px' }}>
      <form
        onSubmit={handleSubmit}
        className="border p-4 rounded shadow-sm"
        style={{ backgroundColor: 'white' }}
      >
        <h3 className="mb-3 text-center">Buy Now</h3>

        <div className="mb-3">
          <label className="form-label">Customer Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Customer Address</label>
          <textarea
            className="form-control"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Payment Mode</label>
          <select
            className="form-select"
            name="paymentMode"
            value={formData.paymentMode}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Cash on Delivery">Cash on Delivery</option>
            <option value="UPI">UPI</option>
            <option value="Net Banking">Net Banking</option>
            <option value="Card Payment">Card Payment</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Product Name</label>
          <input
            type="text"
            className="form-control"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Product Price</label>
          <input
            type="number"
            className="form-control"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Product Quantity</label>
          <input
            type="number"
            className="form-control"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
          />
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-primary">Place Your Order</button>
        </div>
      </form>
    </div>
  );
};

export default BuyNowForm;
