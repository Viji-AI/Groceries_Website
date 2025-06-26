import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import BuyNowForm from './buy_form';
import Signup from './Signup';
import Signin from './Signin';
import Dashboard from './dashboard';
import ThankYou from './ThankYou';
import Contact from './contact';
import FAQ from './faqs';
import Footer from './footer';
import logo from './images/logo.png';
import VegetablesPage from './veggie_page';
import FruitsPage from './fruit_page';
import SnacksPage from './snack_page';
import IceCreamsPage from './ice_page';
import HomePage from './HomePage';
import Terms from './Terms'; // at the top
import Cookies from './cookies'; // at the top
import Privacy from './privacy'; // at the top


const Home = () => (
  <>
    <HomePage />
  </>
);

const App = () => {
  return (
    <div style={{ position: 'relative' }}>
      {/* Background Video */}
<div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1 }}>
  <video
    autoPlay
    muted
    loop
    playsInline
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    }}
  >
    <source src="/background.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  {/* Overlay with transparency */}
  <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.3)', // Adjust alpha (0.3 = 30% dark)
    }}
  />
</div>


      {/* App Content */}
      <Router>
        <Navbar />

        <div style={{ paddingBottom: '80px' }}>
        <Routes>
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/vegetables" element={<VegetablesPage />} />
          <Route path="/fruits" element={<FruitsPage />} />
          <Route path="/snacks" element={<SnacksPage />} />
          <Route path="/ice-creams" element={<IceCreamsPage />} />
          <Route path="/faqs" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/buy-now" element={<BuyNowForm />} />
        </Routes>
        </div>


        <Footer />
      </Router>
    </div>
  );
};

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        background: 'linear-gradient(45deg,  rgba(3, 107, 71, 0.8), rgba(255, 255, 255, 0.8))',
        padding: '10px 20px',
        backdropFilter: 'blur(4px)',
      }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src={logo}
            alt="Daily Groceries Logo"
            style={{
              height: '60px',
              borderRadius: '12px',
              backdropFilter: 'blur(4px)',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              padding: '4px',
            }}
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span>
            <svg width="30" height="30" viewBox="0 0 30 30">
              <rect width="30" height="4" rx="2" fill="#fff" />
              <rect y="13" width="30" height="4" rx="2" fill="#fff" />
              <rect y="26" width="30" height="4" rx="2" fill="#fff" />
            </svg>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link text-white fw-bold fs-5 px-3" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white fw-bold fs-5 px-3" href="/vegetables">Vegetables</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white fw-bold fs-5 px-3" href="/fruits">Fruits</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white fw-bold fs-5 px-3" href="/snacks">Snacks</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white fw-bold fs-5 px-3" href="/ice-creams">Ice Creams</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white fw-bold fs-5 px-3" href="/faqs">FAQs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white fw-bold fs-5 px-3" href="/contact">Contact Us</a>
            </li>
          </ul>

          <div className="d-flex gap-2 ms-auto">
            <a className="btn btn-outline-light fw-bold" href="/buy-now">Buy Now</a>
            <Link to="/signup" className="btn btn-light fw-bold">Create Account</Link>
            <Link to="/signin" className="btn btn-dark fw-bold">Sign In</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default App;
