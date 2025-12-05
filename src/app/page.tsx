import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-green-600">FreelanceKE</h1>
            </div>
            <div className="flex gap-4">
              <Link href="/login" className="text-gray-700 hover:text-green-600 font-medium">
                Sign In
              </Link>
              <Link href="/register" className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Kenya's #1 Freelance Platform
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
            Hire top Kenyan talent or find real online work. Pay & get paid instantly via M-Pesa.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/post-job" className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100">
              Post a Job – It's Free!
            </Link>
            <Link href="/find-work" className="border-2 border-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-white hover:text-green-600">
              Find Work & Earn
            </Link>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            Why Thousands of Kenyans Choose FreelanceKE
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="text-5xl mb-4">M-Pesa</div>
              <h3 className="text-2xl font-bold mb-3">Instant M-Pesa Payments</h3>
              <p className="text-gray-600">Withdraw earnings instantly to your M-Pesa. No forex fees.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="text-5xl mb-4">Low Fees</div>
              <h3 className="text-2xl font-bold mb-3">Only 10% Commission</h3>
              <p className="text-gray-600">Keep more of what you earn compared to 20% on other platforms.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="text-5xl mb-4">Kenyan</div>
              <h3 className="text-2xl font-bold mb-3">Built for Kenya</h3>
              <p className="text-gray-600">Local support, Swahili option coming soon.</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-gray-900 text-white py-10 text-center">
        <p className="text-lg">© 2025 FreelanceKE.co.ke – Made with love in Kenya</p>
      </footer>
    </>
  );
}