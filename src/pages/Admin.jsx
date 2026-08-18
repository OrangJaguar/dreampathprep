import React, { useState, useEffect } from 'react';
import { LogOut, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { base44 } from '@/api/base44Client';
import PasswordGate from '@/components/admin/PasswordGate';
import ResponsesTable from '@/components/admin/ResponsesTable';

const SESSION_KEY = 'dreampath_admin_auth';

const quizColumns = [
  { key: 'name', label: 'Parent Name' },
  { key: 'email', label: 'Email' },
  { key: 'phone', label: 'Phone' },
  { key: 'school', label: 'School & District' },
  { key: 'grade_level', label: 'Grade Level' },
  { key: 'career_clarity', label: 'Career Clarity' },
  { key: 'academics', label: 'Academics' },
  { key: 'narrative', label: 'Narrative' },
  { key: 'financial_confidence', label: 'Financial Confidence' }
];

const referralColumns = [
  { key: 'referee_first_name', label: 'Referrer' },
  { key: 'referee_email', label: 'Referrer Email' },
  { key: 'referee_phone', label: 'Referrer Phone' },
  { key: 'friend_first_name', label: 'Friend' },
  { key: 'friend_email', label: 'Friend Email' },
  { key: 'friend_phone', label: 'Friend Phone' },
  { key: 'friend_graduation_year', label: 'Grad Year / Grade' }
];

export default function Admin() {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem(SESSION_KEY) === 'true');
  const [data, setData] = useState({ quizResponses: [], referrals: [] });
  const [loading, setLoading] = useState(false);
  const [tab, setTab] = useState('quiz');
  const [error, setError] = useState('');

  const fetchData = async (password) => {
    setLoading(true);
    setError('');
    try {
      const res = await base44.functions.invoke('getAdminData', { password });
      setData({ quizResponses: res.data.quizResponses || [], referrals: res.data.referrals || [] });
      sessionStorage.setItem(SESSION_KEY, 'true');
      sessionStorage.setItem('dreampath_admin_pw', password);
      setAuthed(true);
    } catch (err) {
      sessionStorage.removeItem(SESSION_KEY);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const handleUnlock = async (password) => {
    await fetchData(password);
  };

  const handleRefresh = async () => {
    const pw = sessionStorage.getItem('dreampath_admin_pw');
    if (pw) await fetchData(pw);
  };

  const handleLogout = () => {
    sessionStorage.removeItem(SESSION_KEY);
    sessionStorage.removeItem('dreampath_admin_pw');
    setAuthed(false);
    setData({ quizResponses: [], referrals: [] });
  };

  useEffect(() => {
    if (authed) handleRefresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!authed) {
    return <PasswordGate onUnlock={handleUnlock} />;
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F9F8F4' }}>
      <header className="sticky top-0 z-10 shadow-md" style={{ backgroundColor: '#0A192F' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6979104353f8a38b3d9a07ec/82f700ed7_image-removebg-preview8.png" alt="DreamPathPrep" className="h-9 w-auto" />
            <span className="text-white font-semibold tracking-wide hidden sm:inline">Admin Dashboard</span>
          </div>
          <div className="flex items-center gap-2">
            <Button onClick={handleRefresh} disabled={loading} variant="outline" className="text-white border-white/20 hover:bg-white/10 rounded-full" size="sm">
              <RefreshCw className={`w-4 h-4 mr-1 ${loading ? 'animate-spin' : ''}`} /> Refresh
            </Button>
            <Button onClick={handleLogout} className="rounded-full text-white" size="sm" style={{ backgroundColor: '#3E5C76' }}>
              <LogOut className="w-4 h-4 mr-1" /> Lock
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setTab('quiz')}
            className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all ${tab === 'quiz' ? 'text-white shadow' : 'bg-white text-gray-600 hover:text-gray-900 border border-gray-200'}`}
            style={tab === 'quiz' ? { backgroundColor: '#0A192F' } : {}}
          >
            Quiz Responses ({data.quizResponses.length})
          </button>
          <button
            onClick={() => setTab('referrals')}
            className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all ${tab === 'referrals' ? 'text-white shadow' : 'bg-white text-gray-600 hover:text-gray-900 border border-gray-200'}`}
            style={tab === 'referrals' ? { backgroundColor: '#0A192F' } : {}}
          >
            Referrals ({data.referrals.length})
          </button>
        </div>

        {error && <p className="text-red-600 mb-4">{error}</p>}

        {tab === 'quiz' ? (
          <ResponsesTable title="Is Your Student on Track? Responses" columns={quizColumns} rows={data.quizResponses} />
        ) : (
          <ResponsesTable title="Refer a Friend Submissions" columns={referralColumns} rows={data.referrals} />
        )}
      </main>
    </div>
  );
}