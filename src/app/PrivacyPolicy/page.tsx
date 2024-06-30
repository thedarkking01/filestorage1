
'use client';

import React from 'react';
import Head from 'next/head';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="p-6 bg-blue-black-gradient min-h-screen flex justify-center items-center">
      <Head>
        <title>Privacy Policy</title>
        <meta name="description" content="Our privacy policy details." />
      </Head>

      <main className="max-w-3xl mx-auto bg-white p-8 shadow-md">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Privacy Policy</h1>
        
        <section className="mb-6">
          <p className="text-lg text-gray-600 mb-4">
            Welcome to our Privacy Policy page. Your privacy is critically important to us.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Information We Collect</h2>
          <p className="text-lg text-gray-600 mb-4">
            We collect information directly from you when you register on our site, place an order, subscribe to our newsletter, or fill out a form. This may include your name, email address, and other contact details.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-2">How We Use Your Information</h2>
          <div className="text-lg text-gray-600 mb-4">
            We use the information we collect in the following ways:
            <ul className="list-disc list-inside">
              <li>To personalize your experience and respond better to your individual needs.</li>
              <li>To improve our website and offerings based on your feedback.</li>
              <li>To process transactions efficiently.</li>
              <li>To send periodic emails regarding updates, promotions, or service information.</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Protection of Information</h2>
          <p className="text-lg text-gray-600 mb-4">
            We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Cookies</h2>
          <p className="text-lg text-gray-600 mb-4">
            Our site may use cookies to enhance user experience. Your web browser places cookies on your hard drive for record-keeping purposes and sometimes to track information about them. You may choose to set your web browser to refuse cookies or to alert you when cookies are being sent.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Third-Party Disclosure</h2>
          <p className="text-lg text-gray-600 mb-4">
            We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Changes to Our Privacy Policy</h2>
          <p className="text-lg text-gray-600 mb-4">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
          </p>

         
        </section>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
