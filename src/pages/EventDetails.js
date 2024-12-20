import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function EventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const events = JSON.parse(localStorage.getItem('events')) || [];
    const foundEvent = events.find((e) => e.id === parseInt(id));
    setEvent(foundEvent);
  }, [id]);

  if (!event)
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl font-medium text-gray-600">Event not found!</h1>
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 mt-10">
      <h1 className="text-3xl font-semibold text-gray-900 mb-4">{event.title}</h1>
      <p className="text-gray-600 text-lg mb-2">
        <strong>Date:</strong> {event.date}
      </p>
      <p className="text-gray-700 mb-4">{event.description}</p>
      {event.poster && (
        <div className="mt-4">
          <img
            src={event.poster}
            alt="Event Poster"
            className="rounded-lg shadow-md w-full max-h-96 object-cover"
          />
        </div>
      )}
    </div>
  );
}

export default EventDetails;
