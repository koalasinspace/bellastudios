'use client';

import { useState } from 'react';
import { useAuth } from '@/lib/firebase/auth';
import { setRole as setRoleAction } from '@/app/actions';

export default function AdminPage() {
  const { user, role: userRole } = useAuth();
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('developer');
  const [message, setMessage] = useState('');

  if (!user) {
    return <div>Redirecting...</div>;
  }

  const isAdmin = userRole === 'admin';

  const handleSetRole = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await setRoleAction(email, role);
    setMessage(result.message);
  };

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#050505]">
        <div className="text-white text-center">
          <h1 className="text-3xl font-bold mb-4">Access Denied</h1>
          <p>You do not have permission to view this page.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Admin Portal</h1>
      <p className="mb-8">Welcome, {user.email}!</p>
      
      <div className="max-w-md mx-auto bg-[#1a1a1a] p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Set User Role</h2>
        <form onSubmit={handleSetRole}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">User Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 rounded bg-[#2a2a2a] text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="role" className="block mb-2">Role</label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full p-2 rounded bg-[#2a2a2a] text-white"
            >
              <option value="admin">Admin</option>
              <option value="developer">Developer</option>
              <option value="tester">Tester</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-[#7eb8da] text-black font-bold py-2 px-4 rounded-lg hover:bg-[#6fa8c9] transition-colors">
            Set Role
          </button>
        </form>
        {message && <p className="mt-4 text-center">{message}</p>}
      </div>
    </div>
  );
}
