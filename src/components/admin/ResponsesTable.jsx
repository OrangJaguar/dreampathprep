import React, { useState, useMemo } from 'react';
import { Search, ArrowUpDown, Inbox } from 'lucide-react';

export default function ResponsesTable({ title, columns, rows }) {
  const [search, setSearch] = useState('');
  const [sortKey, setSortKey] = useState(null);
  const [sortDir, setSortDir] = useState('desc');

  const filtered = useMemo(() => {
    let result = [...rows];
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(r => columns.some(c => String(r[c.key] ?? '').toLowerCase().includes(q)));
    }
    if (sortKey) {
      result.sort((a, b) => {
        const av = String(a[sortKey] ?? '');
        const bv = String(b[sortKey] ?? '');
        return sortDir === 'asc' ? av.localeCompare(bv) : bv.localeCompare(av);
      });
    }
    return result;
  }, [rows, search, sortKey, sortDir, columns]);

  const toggleSort = (key) => {
    if (sortKey === key) {
      setSortDir(d => d === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortDir('desc');
    }
  };

  const fmtDate = (d) => d ? new Date(d).toLocaleString() : '';

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-5 border-b border-gray-100" style={{ backgroundColor: '#F9F8F4' }}>
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-bold" style={{ color: '#0A192F', fontFamily: "'Playfair Display', serif" }}>{title}</h2>
          <span className="text-sm font-medium px-2.5 py-0.5 rounded-full" style={{ backgroundColor: 'rgba(197, 160, 89, 0.15)', color: '#C5A059' }}>{rows.length}</span>
        </div>
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            className="pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C5A059] focus:outline-none w-full sm:w-64"
          />
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="py-16 text-center text-gray-400">
          <Inbox className="w-10 h-10 mx-auto mb-3" />
          <p>No responses yet.</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ backgroundColor: '#F9F8F4' }}>
                <th className="text-left px-4 py-3 font-semibold text-gray-600 whitespace-nowrap">
                  <button onClick={() => toggleSort('__date')} className="flex items-center gap-1 hover:text-gray-900">
                    Date <ArrowUpDown className="w-3 h-3" />
                  </button>
                </th>
                {columns.map(col => (
                  <th key={col.key} className="text-left px-4 py-3 font-semibold text-gray-600 whitespace-nowrap">
                    <button onClick={() => toggleSort(col.key)} className="flex items-center gap-1 hover:text-gray-900">
                      {col.label} <ArrowUpDown className="w-3 h-3" />
                    </button>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((r, i) => (
                <tr key={r.id ?? i} className="border-t border-gray-100 hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-500 whitespace-nowrap">{fmtDate(r.created_date)}</td>
                  {columns.map(col => (
                    <td key={col.key} className="px-4 py-3 text-gray-700 align-top">{r[col.key] ?? '—'}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}