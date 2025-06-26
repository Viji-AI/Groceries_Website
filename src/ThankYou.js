import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <div className="container mt-5 text-center">
      <h2 className="text-success">Thank You for Your Order!</h2>
      <p className="lead">Your order has been placed successfully.</p>
      <Link to="/" className="btn btn-primary mt-3">Back to Home</Link>
    </div>
  );
};

export default ThankYou;
