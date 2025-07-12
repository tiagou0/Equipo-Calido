import React, { useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function AuthUser() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    } else {
      navigate('/dashboard'); //condional al auth del usuario
    }
  }, [user, navigate]);

  return null; 
}