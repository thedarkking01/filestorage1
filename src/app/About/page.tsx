
'use client';

import React from 'react';
import Head from 'next/head';
// import { Link } from 'lucide-react';
import Link from "next/link";

const AboutUs: React.FC = () => {
  return (
    <div className="p-6 bg-blue-black-gradient min-h-screen flex justify-center items-center">
      <Head>
        <title>About Us</title>
        <meta name="description" content="Learn more about our company and team." />
      </Head>

      <main className="max-w-3xl mx-auto bg-white p-8 shadow-md">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
        
        <section className="mb-6">
          <p className="text-lg text-gray-600 mb-4">
            Welcome to FileStorage. We are dedicated to providing a reliable and secure file management service for our users. This project idea and deployed by  <Link className="text-blue-900 hover:text-blue-500" href="https://sourabh-singh-bais-portfolio.vercel.app/" >Sourabh Singh Bais.</Link>
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Mission</h2>
          <p className="text-lg text-gray-600 mb-4">
            Our mission is to simplify file storage and management, ensuring accessibility and security for all users.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Team</h2>
          <p className="text-lg text-gray-600 mb-4">
            We are a passionate team committed to delivering the best possible experience to our users. Our diverse backgrounds and skills enable us to innovate and improve continuously.
          </p>
        </section>
        
        
      </main>
    </div>
  );
};

export default AboutUs;
