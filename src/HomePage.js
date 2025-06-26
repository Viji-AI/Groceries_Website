import { Link } from 'react-router-dom';
import CategoryCards from './CategoryCards';

const HomePage = () => {
  return (
    <div className="container mt-4 mb-5">
      {/* ✅ Outer White Box */}
      <div className="bg-white text-dark rounded p-4 shadow-lg">

        {/* ✅ Hero Section */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold">Welcome to Daily Groceries</h1>
          <p className="lead">Fresh. Fast. Everyday.</p>
          <p>Get your daily essentials delivered to your doorstep with love and care.</p>
          <Link to="/buy-now" className="btn btn-success fw-bold mt-2 px-4">Shop Now</Link>
        </div>

        {/* ✅ Why Choose Us */}
        <div className="row mb-5 align-items-center">
          <div className="col-md-6 mb-3 mb-md-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-100"
              style={{
                maxHeight: '400px',
                objectFit: 'contain',
                borderRadius: '16px',
                backgroundColor: '#ffffff',
                boxShadow: '0 0 20px rgba(255, 255, 255, 0.6)',
                padding: '4px'
              }}
            >
              <source src="/banner.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h2 className="fw-bold">Why Choose Us?</h2>
            <p>
              We ensure that you get the best quality groceries delivered quickly and reliably.
              From farm-fresh vegetables to daily-use snacks and ice creams — everything is just a click away!
            </p>
            <ul>
              <li>✔️ 100% Fresh Produce</li>
              <li>✔️ Trusted Local Suppliers</li>
              <li>✔️ Multiple Payment Options</li>
              <li>✔️ Free Delivery over ₹500</li>
            </ul>
          </div>
        </div>



        {/* ✅ Categories */}
        <div className="text-center mb-4">
          <h2 className="fw-bold">Shop by Category</h2>
          <p>Explore our fresh and delicious selections</p>
        </div>

        <CategoryCards />

        {/* ✅ Promotions */}
        <div className="bg-warning bg-gradient text-dark p-4 rounded mt-5 mb-4 shadow">
          <h3 className="text-center fw-bold">🛒 Today's Special: Get 10% OFF on all Fruits & Vegetables!</h3>
        </div>

        {/* ✅ Call to Action */}
        <div className="text-center mt-5">
          <h4>Hurry! Offers valid till midnight.</h4>
          <Link to="/buy-now" className="btn btn-primary fw-bold mt-2 px-4">Start Shopping</Link>
        </div>

      </div> {/* end white box */}
    </div>
  );
};

export default HomePage;
