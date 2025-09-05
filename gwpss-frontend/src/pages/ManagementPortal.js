import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <h2 className="text-xl font-bold">Management Dashboard</h2>
      <ul className="list-disc ml-6">
        <li><Link to="questions">Upload Questions</Link></li>
        <li><Link to="release">Release Results</Link></li>
        <li><Link to="receipts">Manage Receipts</Link></li>
      </ul>
    </div>
  );
}

function Questions() {
  return <p>Upload exam questions based on syllabus (demo).</p>;
}

function Release() {
  return <p>Release results for students to view (demo).</p>;
}

function Receipts() {
  return <p>Manage student receipts here (demo).</p>;
}

export default function ManagementPortal() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="questions" element={<Questions />} />
        <Route path="release" element={<Release />} />
        <Route path="receipts" element={<Receipts />} />
      </Routes>
    </div>
  );
}
