'use client';
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { FaUserCircle, FaChartPie, FaEdit, FaSignOutAlt } from 'react-icons/fa';
import PublishDialog from '@/components/PublishDialog';

const SimpleMDE = dynamic(() => import('react-simplemde-editor'), { ssr: false });
import 'easymde/dist/easymde.min.css';

export default function DashboardPage() {
  const [markdown, setMarkdown] = useState('');
  const [isPublished, setIsPublished] = useState(false);
  const [user, setUser] = useState({ fullName: 'Guest User' });

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleChange = (value) => setMarkdown(value);

  const handlePublish = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          author: user.id || user._id,
          content: markdown,
        }),
      });

      if (response.ok) {
        setMarkdown('');
        setIsPublished(true);
      } else {
        alert('Failed to publish');
      }
    } catch (err) {
      console.error('Publish error:', err);
    }
  };

  const getFirstName = (name) => name?.split(' ')[0] || 'Writer';

  return (
    <div className="min-h-screen bg-secondary-900 text-white flex">
      {/* Sidebar */}
      <aside className="w-64 bg-secondary-800 p-6 hidden md:block">
        <div className="flex items-center mb-8 gap-2">
          <FaUserCircle className="text-3xl text-primary-500" />
          <span className="font-semibold text-lg">{getFirstName(user.fullName)}</span>
        </div>
        <nav className="space-y-4">
          <a href="#overview" className="flex items-center gap-2 text-secondary-300 hover:text-white transition">
            <FaChartPie /> Overview
          </a>
          <a href="#editor" className="flex items-center gap-2 text-secondary-300 hover:text-white transition">
            <FaEdit /> New Post
          </a>
          <Link href="/" className="flex items-center gap-2 text-secondary-300 hover:text-white transition">
            <FaSignOutAlt /> Log Out
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10">
        <section id="overview" className="mb-10">
          <h2 className="text-2xl font-bold mb-2">Welcome back, {getFirstName(user.fullName)} 👋</h2>
          <p className="text-secondary-400">Manage your posts, stats, and write new content.</p>
        </section>

        <section id="editor" className="bg-secondary-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Write a New Blog Post</h3>
          <SimpleMDE
            value={markdown}
            onChange={handleChange}
            options={{
              placeholder: 'Start writing in markdown...',
              spellChecker: false,
              status: false,
              autofocus: true,
              theme: 'dark',
            }}
          />
          <button
            onClick={handlePublish}
            className="mt-4 bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-md font-semibold transition"
          >
            Publish Post
          </button>
        </section>
      </main>

      {/* Publish Dialog */}
      <PublishDialog isOpen={isPublished} onClose={() => setIsPublished(false)} />
    </div>
  );
}
