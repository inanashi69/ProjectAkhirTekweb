import React, { useState, useEffect } from 'react';
import EventCard from '../components/EventCard';

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem('events')) || [];
    setEvents(storedEvents);
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Event List</h1>
      {events.length === 0 ? (
        <p className="text-gray-600">No events available. Start by <a href="/create-event" className="text-blue-500">creating an event</a>.</p>
      ) : (
        events.map((event) => <EventCard key={event.id} event={event} />)
      )}
    </div>
  );
}

export default Events;
