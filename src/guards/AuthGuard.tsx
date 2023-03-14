import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

interface Props {
  component: React.ReactNode;
  redirect: string;
}

function AuthGuard({ component, redirect }: Props) {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoading(false);
      } else {
        navigate(redirect);
      }
    });
  }, []);

  return loading ? <></> : <>{component}</>;
}

export default AuthGuard;
