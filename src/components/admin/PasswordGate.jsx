import React, { useState } from 'react';
import { Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PasswordGate({ onUnlock }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await onUnlock(password);
    } catch (err) {
      setError('Invalid password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: '#0A192F' }}>
      <div className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl w-full max-w-md">
        <div className="text-center mb-6">
          <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'rgba(197, 160, 89, 0.15)' }}>
            <Lock className="w-7 h-7" style={{ color: '#C5A059' }} />
          </div>
          <h1 className="text-2xl font-bold" style={{ color: '#0A192F', fontFamily: "'Playfair Display', serif" }}>Admin Access</h1>
          <p className="text-gray-500 text-sm mt-2">Enter your password to view form responses.</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            required
            autoFocus
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C5A059] focus:outline-none"
          />
          {error && <p className="text-red-600 text-sm text-center">{error}</p>}
          <Button type="submit" disabled={loading} className="w-full rounded-lg text-white font-semibold py-6 transition-all hover:opacity-90 disabled:opacity-60" style={{ backgroundColor: '#3E5C76' }}>
            {loading ? 'Verifying...' : 'Unlock'}
          </Button>
        </form>
      </div>
    </div>
  );
}