import img19 from './images/img19.png';
import img20 from './images/img20.png';
import img21 from './images/img21.png';
import img22 from './images/img22.png';
import img23 from './images/img23.png';
import img24 from './images/img24.png';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom'; // ✅ Add this
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function IceSection() {
  const navigate = useNavigate(); // ✅ Hook to navigate programmatically

  const cards = [
    {
      title: 'Chocobar Ice-Cream',
      text: 'Contains Cocoa, Milk and Sugar.',
      Price: '₹10',
      img: img19,
    },
    {
      title: 'Mango Ice-Cream',
      text: 'Contains Vitamin C, Milk and Sugar.',
      Price: '₹20',
      img: img20,
    },
    {
      title: 'Vanilla Ice-Cream',
      text: 'Contains Vanila, Milk and Sugar.',
      Price: '₹10',
      img: img21,
    },
    {
      title: 'Orange Popsicle',
      text: 'Contains Orange, Milk and Sugar.',
      Price: '₹10',
      img: img22,
    },
    {
      title: 'Mango-Vanilla Popsicle',
      text: 'Contains Mango, Vanilla, Milk and Sugar.',
      Price: '₹20',
      img: img23,
    },
    {
      title: 'Kulfi Ice-Cream',
      text: 'Contains Milk, Sugar and Cardamom.',
      Price: '₹30',
      img: img24,
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
      <h2 className="text-center mb-4">Dairy Ice-Creams</h2>
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
}

export default IceSection;
