'use client'

import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h1 className="mt-6 text-6xl font-bold text-gray-900 tracking-tight">404</h1>
          <h2 className="mt-2 text-2xl font-bold text-gray-900">Page Not Found</h2>
          <p className="mt-2 text-gray-600">
            The page you are looking for does not exist or has been moved.
          </p>
        </div>
        <div className="pt-6">
          <Link
            href="/"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
