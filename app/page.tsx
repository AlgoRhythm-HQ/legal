import Link from 'next/link'

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Legal Information
        </h1>
        <p className="text-lg text-gray-600">
          Important documents about how AlgoRhythm works
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Link href="/terms" 
          className="block bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Terms and Conditions
          </h2>
          <p className="text-gray-600 mb-4">
            Learn about the rules and guidelines for using AlgoRhythm
          </p>
          <span className="text-[#1a237e] font-medium">Read more →</span>
        </Link>

        <Link href="/privacy"
          className="block bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Privacy Policy
          </h2>
          <p className="text-gray-600 mb-4">
            How we handle and protect your information
          </p>
          <span className="text-[#1a237e] font-medium">Read more →</span>
        </Link>
      </div>
    </div>
  )
}