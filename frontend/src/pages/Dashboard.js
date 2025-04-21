import React from 'react';

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <header className="mb-6">
        <h1 className="text-4xl font-bold">Welcome to Netflix Replica</h1>
      </header>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Your Videos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Placeholder video cards */}
          <div className="bg-gray-800 rounded-lg p-4">
            <div className="bg-gray-700 h-40 rounded mb-2"></div>
            <h3 className="text-lg font-semibold">Video Title 1</h3>
          </div>
          <div className="bg-gray-800 rounded-lg p-4">
            <div className="bg-gray-700 h-40 rounded mb-2"></div>
            <h3 className="text-lg font-semibold">Video Title 2</h3>
          </div>
          <div className="bg-gray-800 rounded-lg p-4">
            <div className="bg-gray-700 h-40 rounded mb-2"></div>
            <h3 className="text-lg font-semibold">Video Title 3</h3>
          </div>
          <div className="bg-gray-800 rounded-lg p-4">
            <div className="bg-gray-700 h-40 rounded mb-2"></div>
            <h3 className="text-lg font-semibold">Video Title 4</h3>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
