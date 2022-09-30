import { useNavigate } from 'react-router-dom';
import { signOut } from 'lib';
import { useEffect } from 'react';

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    signOut();
    navigate('/login');
  }, []);

  return null;
}
