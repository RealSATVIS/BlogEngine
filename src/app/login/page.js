'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || 'Login failed');
        return;
      }

      localStorage.setItem('token', data.token);
      router.push('/dashboard');
    } catch (err) {
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-secondary-900 flex items-center justify-center px-4">
      <div className="bg-secondary-800 p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Login</h2>
        
        <form className="space-y-5" onSubmit={handleLogin}>
          <div>
            <label className="block text-secondary-300 text-sm mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 bg-secondary-700 border border-secondary-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-secondary-300 text-sm mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 bg-secondary-700 border border-secondary-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="********"
              required
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm text-center -mt-2">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-primary-500 hover:bg-primary-600 text-white py-2 rounded-md font-semibold transition"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-secondary-400">
          Don’t have an account?{' '}
          <Link href="/signup" className="text-primary-400 hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  );
}
