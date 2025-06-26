import img13 from './images/img13.png';
import img14 from './images/img14.png';
import img15 from './images/img15.png';
import img16 from './images/img16.png';
import img17 from './images/img17.png';
import img18 from './images/img18.png';
import { useNavigate } from 'react-router-dom';

function SnackSection() {
  const navigate = useNavigate();
  const cards = [
    {
      title: 'Monster Energy Drink',
      text: 'Contains Vitamin B2 and Vitamin B3.',
      Price: '₹30',
      img: img13,
    },
    {
      title: 'Minute Maid Lemonade',
      text: 'Contains Vitamin C and Sugar.',
      Price: '₹50',
      img: img14,
    },
    {
      title: 'Sugar',
      text: 'Contains Sugar and Net Carbs.',
      Price: '₹70',
      img: img15,
    },
    {
      title: 'Biscuit',
      text: 'Contains Calcium and Sodium.',
      Price: '₹30',
      img: img16,
    },
    {
      title: 'White-Bread',
      text: 'Contains Iron and Calcium.',
      Price: '₹45',
      img: img17,
    },
    {
      title: 'Waffers',
      text: 'Contains Net Carbs and Carbs.',
      Price: '₹30',
      img: img18,
    },
  ];

  return (
    <div className="container mt-4">
        <h2 className="text-center mb-4">Snacks</h2>
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

export default SnackSection;