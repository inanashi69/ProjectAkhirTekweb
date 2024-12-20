import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">Event Management</Link>
        <div className="space-x-4">
          <Link to="/events" className="text-gray-600 hover:text-blue-600">Events</Link>
          <Link to="/create-event" className="text-gray-600 hover:text-blue-600">Create Event</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
