'use client';

import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useRouter } from 'next/navigation';
import Card from '../../components/dashboard/Card';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // In a real app, you'd authenticate against a backend.
      // For this example, we'll use a dummy user.
      if (email === 'admin@example.com' && password === 'password') {
        login({ name: 'Admin User', email, role: 'Admin' });
        router.push('/');
      } else if (email === 'dev@example.com' && password === 'password') {
        login({ name: 'Dev User', email, role: 'Developer' });
        router.push('/');
      } else if (email === 'user@example.com' && password === 'password') {
        login({ name: 'Test User', email, role: 'User' });
        router.push('/');
      } else {
        setError('Invalid credentials');
      }
    } catch (err) {
      setError('Failed to login');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <Card className="w-full max-w-md p-8 space-y-8">
        <h1 className="text-3xl font-bold text-center text-white">Login</h1>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 text-white bg-gray-800 border border-gray-600 rounded-lg focus:ring-pink-500 focus:border-pink-500"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 text-white bg-gray-800 border border-gray-600 rounded-lg focus:ring-pink-500 focus:border-pink-500"
            />
          </div>
          {error && <p className="text-sm text-red-500">{error}</p>}
          <button
            type="submit"
            className="w-full py-2 px-4 text-white bg-gradient-to-r from-pink-500 to-violet-500 rounded-lg hover:opacity-90 transition-opacity"
          >
            Login
          </button>
        </form>
      </Card>
    </div>
  );
}
