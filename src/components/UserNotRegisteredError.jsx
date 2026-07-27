import React from 'react';
import { useAuth } from '@/lib/AuthContext';

export default function UserNotRegisteredError() {
  const { navigateToLogin } = useAuth();

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background p-4">
      <div className="max-w-md w-full text-center space-y-6">
        <h1
          className="text-3xl font-bold"
          style={{ color: '#0A192F', fontFamily: "'Playfair Display', serif" }}
        >
          Account Not Registered
        </h1>
        <p className="text-gray-600 text-lg">
          Your account hasn't been registered in this app yet. Please contact the administrator to be invited, or try logging in with a different account.
        </p>
        <button
          onClick={() => navigateToLogin()}
          className="px-8 py-3 rounded-full text-white font-semibold text-lg hover:opacity-90 transition-all"
          style={{ backgroundColor: '#3E5C76' }}
        >
          Back to Login
        </button>
      </div>
    </div>
  );
}