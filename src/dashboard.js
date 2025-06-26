import { Link } from 'react-router-dom';
const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="container mt-5 text-center">
      <h2>Welcome, {user?.fullName || 'User'}!</h2>
      <p className="lead">You are now signed in.</p>
      <Link to="/" className="btn btn-primary mt-3">Back to Home</Link>
    </div>
  );
};

export default Dashboard;
