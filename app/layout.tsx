import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AlgoRhythm - Legal',
  description: 'Legal information, Terms and Conditions, and Privacy Policy for AlgoRhythm app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen bg-slate-50">
          {/* Navigation Bar */}
          <nav className="bg-[#1a237e] p-4 shadow-md">
            <div className="max-w-4xl mx-auto flex items-center justify-between">
              <Link href="/" className="text-white text-2xl font-bold hover:opacity-90">
                AlgoRhythm
              </Link>
              <div className="space-x-6">
                <Link href="/terms" className="text-white hover:opacity-90">
                  Terms
                </Link>
                <Link href="/privacy" className="text-white hover:opacity-90">
                  Privacy
                </Link>
              </div>
            </div>
          </nav>

          {/* Main Content */}
          <div className="py-8">
            {children}
          </div>

          {/* Footer */}
          <footer className="bg-slate-100 border-t mt-auto">
            <div className="max-w-4xl mx-auto py-8 px-4">
              <p className="text-center text-slate-600">
                © {new Date().getFullYear()} AlgoRhythm. All rights reserved.
              </p>
            </div>
          </footer>
        </main>
      </body>
    </html>
  )
}