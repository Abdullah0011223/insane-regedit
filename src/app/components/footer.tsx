// components/Footer.tsx
import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-white text-gray-400 py-8">
            <div className="container mx-auto px-4">
                {/* Links */}
                <div className="flex flex-wrap justify-center space-x-6 mb-4">
                    <Link href="/terms" className="hover:text-gray-400">
                        Terms & Conditions
                    </Link>
                    <Link href="/privacy" className="hover:text-gray-400">
                        Privacy Policy
                    </Link>
                    <Link href="/refund" className="hover:text-gray-400">
                        Refund & Cancellation Policy
                    </Link>
                    <Link href="/about" className="hover:text-gray-400">
                        About Us
                    </Link>
                    <Link href="/contact" className="hover:text-gray-400">
                        Contact Us
                    </Link>
                </div>

                {/* Copyright */}
                <div className="text-center text-sm text-gray-400">
                    Copyright © 2025 <Link href="/"><span className="text-blue-600">INSANE REGEDIT.</span></Link>  All Rights Reserved.
                </div>
            </div>
        </footer>
    );
}