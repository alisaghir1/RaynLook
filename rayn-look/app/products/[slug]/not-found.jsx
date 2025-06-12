import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-20">
      <div className="max-w-md mx-auto text-center px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Product Not Found
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Sorry, this product doesn't exist.
        </p>
        <div className="space-y-4">
          <Link 
            href="/products" 
            className="inline-block bg-customGold text-black px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all duration-300"
          >
            Browse All Products
          </Link>
        </div>
      </div>
    </div>
  );
}