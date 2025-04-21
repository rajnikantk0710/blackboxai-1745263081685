import React, { useState } from 'react';

function Subscription() {
  const [plan, setPlan] = useState('basic');

  const handleSubscribe = () => {
    alert(`Subscribed to ${plan} plan! Payment integration coming soon.`);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8">Choose Your Subscription Plan</h1>
      <div className="w-full max-w-md space-y-6">
        <div
          className={`p-6 rounded-lg cursor-pointer border-2 ${
            plan === 'basic' ? 'border-red-600 bg-gray-800' : 'border-gray-700'
          }`}
          onClick={() => setPlan('basic')}
        >
          <h2 className="text-2xl font-semibold mb-2">Basic Plan</h2>
          <p>$5 / month</p>
          <p>Access to standard content</p>
        </div>
        <div
          className={`p-6 rounded-lg cursor-pointer border-2 ${
            plan === 'premium' ? 'border-red-600 bg-gray-800' : 'border-gray-700'
          }`}
          onClick={() => setPlan('premium')}
        >
          <h2 className="text-2xl font-semibold mb-2">Premium Plan</h2>
          <p>$15 / month</p>
          <p>Access to all content including HD and 4K</p>
        </div>
        <button
          onClick={handleSubscribe}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded transition duration-300"
        >
          Subscribe Now
        </button>
      </div>
    </div>
  );
}

export default Subscription;
