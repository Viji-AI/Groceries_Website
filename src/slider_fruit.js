import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img7 from './images/img7.png';
import img8 from './images/img8.png';
import img9 from './images/img9.png';
import img10 from './images/img10.png';
import img11 from './images/img11.png';
import img12 from './images/img12.png';
import { useNavigate } from 'react-router-dom';

const CardSlider = () => {
  const navigate = useNavigate();
  const cards = [
      {
        title: 'Apple',
        text: 'Enriched in Vitamin C and Fibre.',
        Price: '₹30/kg',
        img: img7,
      },
      {
        title: 'Avocado',
        text: 'Enriched in Vitamin E,Vitamin K and Potassium.',
        Price: '₹50/kg',
        img: img8,
      },
      {
        title: 'Blackberries',
        text: 'Enriched in Vitamin C and Vitamin K.',
        Price: '₹70/kg',
        img: img9,
      },
      {
        title: 'Blueberries',
        text: 'Enriched in Vitamin C,Vitamin K and Fibre.',
        Price: '₹90/kg',
        img: img10,
      },
      {
        title: 'Cherry',
        text: 'Enriched in Potassium and Vitamin C.',
        Price: '₹50/kg',
        img: img11,
      },
      {
        title: 'Cranberries',
        text: 'Enriched in Vitamin C.',
        Price: '₹80/kg',
        img: img12,
      },
    ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="container mt-5">
        <h2 className="text-center mb-4">Daily Fruits</h2>
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index} style={{ padding: '10px' }}>
            <div
              className="card"
              style={{
                borderRadius: '15px',
                overflow: 'hidden',
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                transform: 'scale(0.95)',
                transition: 'transform 0.3s ease-in-out',
              }}
            >
              <div
                className="card-body d-flex flex-column justify-content-between text-center"
                style={{
                  background: 'linear-gradient(45deg, rgb(209, 229, 233), rgb(255, 255, 255))',
                  borderRadius: '15px',
                  padding: '15px',
                }}
              >
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.text}</p>
                <p className='card-price fw-bold text-success'>{card.Price}</p> 
                <img
                  src={card.img}
                  alt={card.title}
                  height={80}
                  width={80}
                  style={{ objectFit: 'cover', borderRadius: '10px', alignSelf: 'center' }}
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
      </Slider>
    </div>
  );
};

export default CardSlider;
