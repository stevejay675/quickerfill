'use client';

import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full"></div>
              <svg className="w-6 h-6 text-white relative z-10" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2"/>
                <path d="M15 15l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="text-2xl font-bold text-gray-900">QuickerFill</span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
              Features
            </a>
            {/* <div className="relative group">
              <button className="text-gray-600 hover:text-gray-900 transition-colors flex items-center space-x-1">
                <span>How It</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div> */}
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">
              How It Works
            </a>
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">
             Contact
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors">
              Testimonials
            </a>
            <button className="px-6 py-2 border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-50 transition-colors font-medium">
              Download
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 relative z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span 
                className={`w-full h-0.5 bg-gray-600 transition-all duration-300 ease-in-out ${
                  isOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              ></span>
              <span 
                className={`w-full h-0.5 bg-gray-600 transition-all duration-300 ease-in-out ${
                  isOpen ? 'opacity-0' : ''
                }`}
              ></span>
              <span 
                className={`w-full h-0.5 bg-gray-600 transition-all duration-300 ease-in-out ${
                  isOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Sidebar - Swipes from left */}
      <div 
        className={`md:hidden fixed top-[72px] left-0 bottom-0 w-full bg-white shadow-xl transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="px-6 py-6 space-y-4">
          <a 
            href="#features" 
            className="block text-gray-600 hover:text-gray-900 transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            Features
          </a>
          <a 
            href="#how-it" 
            className="block text-gray-600 hover:text-gray-900 transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            How It
          </a>
          <a 
            href="#how-it-works" 
            className="block text-gray-600 hover:text-gray-900 transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            How It Works
          </a>
          <a 
            href="#testimonials" 
            className="block text-gray-600 hover:text-gray-900 transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            Testimonials
          </a>
          <button 
            className="w-full px-6 py-2 border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-50 transition-colors font-medium"
            onClick={() => setIsOpen(false)}
          >
            Download
          </button>
          <button 
            className="w-full px-6 py-2 border-2 border-gray-300 text-gray-700 rounded-full hover:bg-blue-50 transition-colors font-medium"
            onClick={() => setIsOpen(false)}
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 bg-opacity-50 z-30 top-[72px]"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
}