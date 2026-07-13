import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext';
import { useLocation, useNavigate } from 'react-router';

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = () => {
    login();
    const from = location.state?.from?.pathname || '/';
    navigate(from, { replace: true });
  };

  return (
    <div className="mx-auto max-w-md py-12 text-center">
      <h2 className="text-3xl font-bold tracking-tight text-slate-900">Login</h2>
      <p className="mt-2 text-sm text-slate-600">You must log in to access the Create Post page.</p>
      <button 
        onClick={handleLogin}
        className="mt-6 inline-flex w-full justify-center rounded-xl bg-rose-500 px-4 py-3 text-sm font-semibold text-white shadow-md shadow-rose-500/20 transition-all hover:bg-rose-600 active:scale-[0.98]"
      >
        Log In
      </button>
    </div>
  );
};

export default Login;