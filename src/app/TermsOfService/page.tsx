'use client';

import React from 'react';
import Head from 'next/head';

const TermsOfService: React.FC = () => {
  return (
    <div className="p-6 bg-blue-black-gradient min-h-screen flex justify-center items-center">
      <Head>
        <title>Terms of Service</title>
        <meta name="description" content="Our terms of service details." />
      </Head>

      <main className="max-w-3xl mx-auto bg-white p-8 shadow-md">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Terms of Service</h1>
        
        <section className="mb-6">
          <p className="text-lg text-gray-600 mb-4">
            Welcome to FileStorage. By using our services, you agree to comply with and be bound by the following terms of service. Please review the following terms carefully.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Acceptance of Terms</h2>
          <p className="text-lg text-gray-600 mb-4">
            By accessing and using our service, you accept and agree to be bound by the terms and provisions of this agreement. In addition, when using our services, you shall be subject to any posted guidelines or rules applicable to such services.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Provision of Services</h2>
          <p className="text-lg text-gray-600 mb-4">
            FileStorage is constantly innovating in order to provide the best possible experience for its users. You acknowledge and agree that the form and nature of the services which FileStorage provides may change from time to time without prior notice to you.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Use of Services</h2>
          <p className="text-lg text-gray-600 mb-4">
            You agree to use the services only for purposes that are permitted by (a) the terms and (b) any applicable law, regulation, or generally accepted practices or guidelines in the relevant jurisdictions.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-2">User Accounts</h2>
          <p className="text-lg text-gray-600 mb-4">
            To access certain features of our services, you may be required to create an account. You must provide accurate and complete information and keep your account information updated. You are solely responsible for the activity that occurs on your account.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Termination</h2>
          <p className="text-lg text-gray-600 mb-4">
            We may terminate or suspend access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the terms.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Changes to Terms</h2>
          <p className="text-lg text-gray-600 mb-4">
            FileStorage reserves the right to update the terms at any time. We will notify you of any changes by posting the new terms on this page. You are advised to review these terms periodically for any changes.
          </p>

          <p className="text-lg text-gray-600 mb-4">
            These terms are effective as of June 30, 2024.
          </p>
        </section>
        
        
      </main>
    </div>
  );
};

export default TermsOfService;
