import ProtectedRoute from '../components/ProtectedRoute';

const Dashboard = () => {
  return <div>Welcome to the Dashboard!</div>;
};

export default ProtectedRoute(Dashboard);
