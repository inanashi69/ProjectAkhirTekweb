import React from 'react';
import { Link } from 'react-router-dom';

function EventCard({ event }) {
  return (
    <div className="bg-white shadow-md rounded-md p-4 mb-4">
      <h2 className="text-xl font-bold text-gray-900">{event.title}</h2>
      <p className="text-gray-600">{event.date}</p>
      <p className="mt-2 text-gray-700">{event.description}</p>
      <div className="mt-4 flex space-x-4">
        <Link to={`/events/${event.id}`} className="text-blue-500 hover:underline">Details</Link>
        <Link to={`/edit-event/${event.id}`} className="text-yellow-500 hover:underline">Edit</Link>
        <button className="text-red-500 hover:underline" onClick={() => handleDelete(event.id)}>Delete</button>
      </div>
    </div>
  );

  function handleDelete(id) {
    const updatedEvents = JSON.parse(localStorage.getItem('events')).filter((e) => e.id !== id);
    localStorage.setItem('events', JSON.stringify(updatedEvents));
    window.location.reload();
  }
}

export default EventCard;
