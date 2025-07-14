// components/PublishDialog.js
'use client';
import React from 'react';

export default function PublishDialog({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-secondary-800 rounded-lg p-6 w-80 shadow-lg">
        <h3 className="text-white text-xl font-semibold mb-4">✅ Post Published</h3>
        <p className="text-secondary-300 mb-6">Your blog post has been successfully published.</p>
        <button
          onClick={onClose}
          className="w-full bg-primary-500 hover:bg-primary-600 text-white py-2 px-4 rounded-md font-semibold transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}
