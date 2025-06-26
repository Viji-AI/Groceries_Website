import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { Link } from 'react-router-dom';
import logo from './images/logo.png';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-5">
      <Container>
        <Row>
          <Col md={6}>
            <div className="d-flex align-items-center mb-3">
              <img
                src={logo}
                alt="logo"
                style={{
                  width: 200,
                  height: 100,
                  marginRight: 10,
                  borderRadius: '12px',
                  backdropFilter: 'blur(4px)',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  padding: '6px'
                }}
              />
            </div>
            <p style={{ maxWidth: 300 }}>
              "Fresh. Fast. Everyday." – Your one-stop destination for daily groceries. We bring the freshest produce and essentials right to your doorstep, ensuring quality and convenience in every order.
            </p>
            <ul className="list-unstyled mt-3">
              <li><MdEmail className="me-2" /> support@dailygroceries.com</li>
              <li><MdPhone className="me-2" /> +91 63823 33494</li>
              <li><MdLocationOn className="me-2" /> 123 Fresh Street, Chennai, India</li>
            </ul>
          </Col>

          <Col md={3}>
            <h6 className="fw-bold">Explore</h6>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white text-decoration-none">Home</Link></li>
              <li><Link to="/vegetables" className="text-white text-decoration-none">Vegetables</Link></li>
              <li><Link to="/fruits" className="text-white text-decoration-none">Fruits</Link></li>
              <li><Link to="/snacks" className="text-white text-decoration-none">Snacks</Link></li>
              <li><Link to="/ice-creams" className="text-white text-decoration-none">Ice Creams</Link></li>
              <li><Link to="/faqs" className="text-white text-decoration-none">FAQs</Link></li>
            </ul>
          </Col>

          <Col md={3}>
            <h6 className="fw-bold">Help</h6>
            <ul className="list-unstyled">
              <li><Link to="/contact" className="text-white text-decoration-none">Contact Us</Link></li>
              <li><Link to="/buy-now" className="text-white text-decoration-none">Buy Now</Link></li>
              <li><Link to="/signup" className="text-white text-decoration-none">Create Account</Link></li>
              <li><Link to="/signin" className="text-white text-decoration-none">Sign In</Link></li>
              <li><Link to="/terms" className="text-white text-decoration-none">Terms of Use</Link></li>
              <li><Link to="/privacy" className="text-white text-decoration-none">Privacy Policy</Link></li>
              <li><Link to="/cookies" className="text-white text-decoration-none">Cookies</Link></li>
            </ul>
          </Col>
        </Row>

        <hr className="border-secondary" />

        <Row className="pb-3 align-items-center">
          <Col md={6}>
            <small>© 2025 DailyGroceries. All Rights Reserved.</small>
          </Col>
          <Col md={6} className="text-md-end mt-3 mt-md-0">
            <a
              href="https://www.facebook.com/share/p/19cGpS1CA6/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white me-3"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/0_.viji._0?igsh=MTA1d3JkYXVuZWx2cA=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FaInstagram />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
