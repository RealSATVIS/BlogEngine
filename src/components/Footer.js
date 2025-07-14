'use client';
import Link from 'next/link';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-secondary-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Brand */}
        <div>
          <Link href="/" className="flex items-center mb-4 hover:text-primary-400 transition">
            <HiOutlineDocumentText className="text-primary-500 mr-2 text-xl" />
            <h2 className="text-lg font-semibold">BlogEngine Pro</h2>
          </Link>
          <p className="text-secondary-400 text-sm">
            Build, manage, and grow your blog with ease using our professional tools.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-base font-semibold mb-3">Links</h3>
          <ul className="space-y-2 text-sm text-secondary-400">
            <li><a href="#features" className="hover:text-white transition">Features</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-base font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-sm text-secondary-400">
            <li><a href="#" className="hover:text-white transition">Docs</a></li>
            <li><a href="#" className="hover:text-white transition">API</a></li>
          </ul>
        </div>

        {/* GitHub */}
        <div>
          <h3 className="text-base font-semibold mb-3">Developed By</h3>
          <a
            href="https://github.com/RealSATVIS"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-secondary-400 hover:text-white transition"
          >
            <FaGithub className="text-lg" />
            Satavisha Dutta
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-sm text-secondary-500 border-t border-secondary-800 pt-6">
        &copy; {new Date().getFullYear()} BlogEngine Pro. All rights reserved.
      </div>
    </footer>
  );
}
