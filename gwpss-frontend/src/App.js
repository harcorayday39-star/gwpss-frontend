import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import StudentPortal from './pages/StudentPortal';
import ManagementPortal from './pages/ManagementPortal';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="p-4">
        <header className="flex justify-between items-center bg-blue-600 text-white p-4 rounded-lg">
          <h1 className="text-xl font-bold">God's Will Private Secondary School</h1>
          <p className="italic">"Leaders of Tomorrow"</p>
          <nav>
            <Link to="/" className="mx-2">Home</Link>
            <Link to="/student" className="mx-2">Student</Link>
            <Link to="/management" className="mx-2">Management</Link>
          </nav>
        </header>
        <main className="mt-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/student/*" element={<StudentPortal />} />
            <Route path="/management/*" element={<ManagementPortal />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
