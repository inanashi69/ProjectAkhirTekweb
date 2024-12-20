import React from 'react';

function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-white to-gray-100">
      <div className="max-w-md text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">Welcome to <span className="text-blue-500">Event Management</span></h1>
        <p className="mt-4 text-lg text-gray-600">Kelola acara Anda dengan mudah dan efisien.</p>
        
        <div className="mt-8 flex justify-center space-x-4">
          <a 
            href="/events" 
            className="px-6 py-3 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition-all"
          >
            View Events
          </a>
          <a 
            href="/create-event" 
            className="px-6 py-3 text-blue-500 border border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-all"
          >
            Create Event
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
