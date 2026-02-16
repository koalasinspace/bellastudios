'use client';

import React from 'react';
import Link from 'next/link';
import { Ghost } from 'lucide-react';

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center text-[#e8e8e8] font-sans">
      <div className="w-full max-w-md p-8 space-y-8">
        <div className="text-center">
          <Ghost className="w-12 h-12 mx-auto text-[#7eb8da]" />
          <h1 className="mt-4 text-3xl font-bold text-white tracking-tight">BELLA<span className="text-[#7eb8da]">STUDIO</span></h1>
          <p className="mt-2 text-sm text-[#a1a1a1]">Register with an invite code.</p>
        </div>
        <form className="space-y-6">
          <div>
            <label htmlFor="invite-code" className="block text-sm font-medium text-[#a1a1a1]">
              Invite Code
            </label>
            <div className="mt-1">
              <input
                id="invite-code"
                name="invite-code"
                type="text"
                required
                className="appearance-none block w-full px-3 py-2 border border-white/10 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#7eb8da] focus:border-[#7eb8da] sm:text-sm bg-[#1a1a1a]"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#7eb8da] hover:bg-[#7eb8da]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7eb8da]"
            >
              Register
            </button>
          </div>
        </form>
        <div className="text-center">
          <p className="text-sm text-[#a1a1a1]">
            Already have an account?{' '}
            <Link href="/" className="font-medium text-[#7eb8da] hover:text-[#7eb8da]/90">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
