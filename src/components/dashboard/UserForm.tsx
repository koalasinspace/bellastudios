'use client';

import React, { useState, useEffect } from 'react';

interface User {
  name: string;
  email: string;
  role: string;
}

interface UserFormProps {
  user?: User;
  onSubmit: (user: Omit<User, 'id'>) => void;
  onCancel: () => void;
}

const UserForm: React.FC<UserFormProps> = ({ user, onSubmit, onCancel }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('user');

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setRole(user.role);
    }
  }, [user]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, email, role });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 bg-gray-800/50 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 bg-gray-800/50 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="role" className="block text-sm font-medium text-gray-300 mb-1">Role</label>
        <select
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full px-3 py-2 bg-gray-800/50 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
        >
          <option value="user">User</option>
          <option value="dev">Developer</option>
          <option value="admin">Administrator</option>
        </select>
      </div>
      <div className="flex justify-end space-x-4">
        <button type="button" onClick={onCancel} className="px-4 py-2 rounded-lg text-white bg-gray-600 hover:bg-gray-500">Cancel</button>
        <button type="submit" className="px-4 py-2 rounded-lg text-white bg-gradient-to-r from-pink-500 to-violet-500 hover:opacity-90">Save</button>
      </div>
    </form>
  );
};

export default UserForm;
