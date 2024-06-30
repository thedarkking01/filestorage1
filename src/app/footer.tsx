import Link from "next/link";

export function Footer() {
  return (
    <div className="h-40 bg-gray-100 mt-12 flex items-center z-70">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          FileStorage
          <p className="text-xs text-gray-600">© 2024 by FileStorage</p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <Link className="text-blue-900 hover:text-blue-500" href="/PrivacyPolicy">
            Privacy Policy
          </Link>
          <Link className="text-blue-900 hover:text-blue-500" href="/TermsOfService">
            Terms of Service
          </Link>
          <Link className="text-blue-900 hover:text-blue-500" href="/About">
            About
          </Link>
          <Link className="text-blue-900 hover:text-blue-500" href="/ContactUs">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
