import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 text-center">
        <h1 className="text-7xl font-bold text-charcoal mb-4">404</h1>
        <h2 className="text-xl font-semibold text-charcoal mb-3">Page not found</h2>
        <p className="text-gray-600 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 bg-accent-orange text-white font-bold rounded-md hover:bg-brick transition-all"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
