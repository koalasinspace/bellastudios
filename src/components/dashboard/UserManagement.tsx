'use client';

import React, { useState } from 'react';
import Card from './Card';
import Modal from './Modal';
import UserForm from './UserForm';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

const initialUsers: User[] = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'Developer' },
    { id: 3, name: 'Peter Jones', email: 'peter.jones@example.com', role: 'User' },
    { id: 4, name: 'Samantha Miller', email: 'samantha.miller@example.com', role: 'User' },
];

const UserManagement = () => {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);

  const handleAddUser = () => {
    setEditingUser(null);
    setIsModalOpen(true);
  };

  const handleEditUser = (user: User) => {
    setEditingUser(user);
    setIsModalOpen(true);
  };

  const handleDeleteUser = (userId: number) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  const handleFormSubmit = (formData: Omit<User, 'id'>) => {
    if (editingUser) {
      // Edit user
      setUsers(users.map(user => (user.id === editingUser.id ? { ...user, ...formData } : user)));
    } else {
      // Add new user
      const newUser = { id: users.length + 1, ...formData };
      setUsers([...users, newUser]);
    }
    setIsModalOpen(false);
  };

  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold text-white">User Management</h3>
        <button onClick={handleAddUser} className="px-4 py-2 rounded-lg text-white bg-gradient-to-r from-pink-500 to-violet-500 hover:opacity-90">+ Add User</button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-white/20">
              <th className="p-4 text-gray-300">Name</th>
              <th className="p-4 text-gray-300">Email</th>
              <th className="p-4 text-gray-300">Role</th>
              <th className="p-4 text-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id} className="border-b border-white/10">
                <td className="p-4 text-white">{user.name}</td>
                <td className="p-4 text-white">{user.email}</td>
                <td className="p-4 text-white">{user.role}</td>
                <td className="p-4">
                  <button onClick={() => handleEditUser(user)} className="text-blue-400 hover:text-blue-300 mr-4">Edit</button>
                  <button onClick={() => handleDeleteUser(user.id)} className="text-red-400 hover:text-red-300">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={editingUser ? 'Edit User' : 'Add User'}>
        <UserForm user={editingUser || undefined} onSubmit={handleFormSubmit} onCancel={() => setIsModalOpen(false)} />
      </Modal>
    </Card>
  );
};

export default UserManagement;
