import img1 from './images/img1.png';
import img2 from './images/img2.png';
import img3 from './images/img3.png';
import img4 from './images/img4.png';
import img5 from './images/img5.png';
import img6 from './images/img6.png';
import { useNavigate } from 'react-router-dom';

function CardSection() {
  const navigate = useNavigate();
  const cards = [
    {
      title: 'Carrot',
      text: 'Enriched in Vitamin A and Beta-Carotene.',
      Price: '₹30/kg',
      img: img1,
    },
    {
      title: 'Cauliflower',
      text: 'Enriched in Vitamin C and Folate.',
      Price: '₹50/kg',
      img: img2,
    },
    {
      title: 'Corn',
      text: 'Enriched in Vitamin C and Vitamin A.',
      Price: '₹40/kg',
      img: img3,
    },
    {
      title: 'Eggplant',
      text: 'Enriched in Vitamin C and Fibre.',
      Price: '₹30/kg',
      img: img4,
    },
    {
      title: 'Ginger',
      text: 'Enriched in Potassium and Magnesium.',
      Price: '₹50/kg',
      img: img5,
    },
    {
      title: 'Onion',
      text: 'Enriched in Vitamin C and Fibre.',
      Price: '₹20/kg',
      img: img6,
    },
  ];

  return (
    <div className="container mt-4">
        <h2 className="text-center mb-4">Daily Vegetables</h2>
      <div className="row">
        {cards.map((card, index) => (
          <div key={index} className="col-lg-4 col-md-6 col-12 mb-4">
            <div
              className="card h-100"
              style={{
                background: 'linear-gradient(45deg, rgb(209, 229, 233), rgb(255, 255, 255))',
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                borderRadius: '16px',
                overflow: 'hidden',
              }}
            >
              <div
                className="card-body d-flex flex-column justify-content-between text-center"
                style={{ borderRadius: '16px' }}
              >
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.text}</p>
                <p className='card-price fw-bold text-success'>{card.Price}</p> 
                <img
                  src={card.img}
                  alt={card.title}
                  height={100}
                  width={100}
                  style={{
                    objectFit: 'cover',
                    margin: '0 auto',
                    borderRadius: '12px',
                  }}
                />
                <button
                  onClick={() => navigate('/buy-now')}
                  className="btn btn-success fw-bold mt-3"
                >
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardSection;
