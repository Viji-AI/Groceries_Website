import { Link } from 'react-router-dom';
import fruits from './images/fruits.jpeg';
import ice from './images/ice.jpeg';
import snacks from './images/snacks.png';
import veggies from './images/veggies.jpg';

const categories = [
  {
    name: 'Vegetables',
    image: veggies,
    description: 'Fresh, locally sourced vegetables delivered to your door.',
    link: '/vegetables'
  },
  {
    name: 'Fruits',
    image: fruits,
    description: 'Seasonal and exotic fruits full of flavor and nutrients.',
    link: '/fruits'
  },
  {
    name: 'Snacks',
    image: snacks,
    description: 'Delicious snacks to keep you going throughout the day.',
    link: '/snacks'
  },
  {
    name: 'Ice Creams',
    image: ice,
    description: 'Cool off with our range of creamy, dreamy ice creams.',
    link: '/ice-creams'
  }
];

const CategoryCards = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center text-white fw-bold mb-4">Shop by Category</h2>
      <div className="row g-4">
        {categories.map((cat, index) => (
          <div className="col-md-6 col-lg-3" key={index}>
            <div className="card h-100 shadow-sm">
              <img
                src={cat.image}
                className="card-img-top"
                alt={cat.name}
                style={{ height: '180px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column text-center">
                <h5 className="card-title fw-bold">{cat.name}</h5>
                <p className="card-text">{cat.description}</p>
                <Link to={cat.link} className="btn btn-success mt-auto">Shop Now</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryCards;
