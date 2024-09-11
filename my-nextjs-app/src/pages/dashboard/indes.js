// pages/dashboard/index.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { isAuthenticated } from '../../utils/auth';

const Dashboard = () => {
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push('/login');
    }
  }, []);

  return isAuthenticated() ? <h1>Dashboard</h1> : null;
};

export default Dashboard;
