import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { isAuthenticated } from '../utils/auth';

const ProtectedRoute = (Component) => {
  return (props) => {
    const router = useRouter();

    useEffect(() => {
      if (!isAuthenticated()) {
        router.push('/');
      }
    }, []);

    return isAuthenticated() ? <Component {...props} /> : null;
  };
};

export default ProtectedRoute;
