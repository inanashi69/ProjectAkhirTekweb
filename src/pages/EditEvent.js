import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function EditEvent() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [poster, setPoster] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const events = JSON.parse(localStorage.getItem('events')) || [];
    const event = events.find((e) => e.id === parseInt(id));
    if (event) {
      setTitle(event.title);
      setDate(event.date);
      setDescription(event.description);
      setPoster(event.poster);
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedEvent = {
      id: parseInt(id),
      title,
      date,
      description,
      poster,
    };

    const events = JSON.parse(localStorage.getItem('events')) || [];
    const updatedEvents = events.map((event) =>
      event.id === parseInt(id) ? updatedEvent : event
    );

    localStorage.setItem('events', JSON.stringify(updatedEvents));
    navigate(`/events/${id}`);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 mt-10">
      <h1 className="text-3xl font-semibold text-gray-900 mb-6">Edit Event</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title Input */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Event Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
            placeholder="Enter event title"
            required
          />
        </div>

        {/* Date Input */}
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
            Event Date
          </label>
          <input
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
            required
          />
        </div>

        {/* Description Input */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
            placeholder="Write a short description about the event"
            rows="4"
            required
          ></textarea>
        </div>

        {/* Poster Input */}
        <div>
          <label htmlFor="poster" className="block text-sm font-medium text-gray-700 mb-1">
            Event Poster
          </label>
          <input
            id="poster"
            type="file"
            accept="image/*"
            onChange={(e) => setPoster(URL.createObjectURL(e.target.files[0]))}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
          />
          {poster && (
            <img
              src={poster}
              alt="Event Poster Preview"
              className="mt-4 rounded-lg shadow-md w-32 h-32 object-cover"
            />
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-all"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default EditEvent;
