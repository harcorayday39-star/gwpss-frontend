import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <h2 className="text-xl font-bold">Student Dashboard</h2>
      <ul className="list-disc ml-6">
        <li><Link to="exam">Take Exam</Link></li>
        <li><Link to="results">View Results</Link></li>
        <li><Link to="payment">Payment Info</Link></li>
      </ul>
    </div>
  );
}

function Exam() {
  return <p>Demo Exam Page (MCQs + Written Answers coming soon)</p>;
}

function Results() {
  return <p>Results will appear here once released by management.</p>;
}

function Payment() {
  return (
    <div>
      <h3>Payment Information</h3>
      <p>Account Name: GWPS School</p>
      <p>Account Number: 1234567890</p>
      <p>Bank: Example Bank</p>
    </div>
  );
}

export default function StudentPortal() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="exam" element={<Exam />} />
        <Route path="results" element={<Results />} />
        <Route path="payment" element={<Payment />} />
      </Routes>
    </div>
  );
}
