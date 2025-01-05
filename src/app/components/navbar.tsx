import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-200 py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold ml-5 font-mono text-blue-500">INSANE REGEDIT</h1>
        <div className="space-x-6 mr-5 font-bold">
          <Link href="/" legacyBehavior>
            <a className="text-gray-600 hover:text-blue-900 hover:underline">Home</a>
          </Link>
          
          <Link href="/contact" legacyBehavior>
            <a className="text-gray-600 hover:text-blue-900 hover:underline">Contact</a>
          </Link>
          <Link href="/login" legacyBehavior>
            <a className="text-gray-600 hover:text-blue-900 hover:underline">Login</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
