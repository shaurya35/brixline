import { Mail, Twitter } from "lucide-react"
import Link from "next/link"

export default function ComingSoon() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-900">
            brix<span className="text-emerald-600">line</span>
          </div>
          <div className="hidden sm:flex space-x-1">
            <Link
              href="mailto:team@brixline.in"
              className="p-2 text-gray-600 hover:text-emerald-600 transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
            <Link href="https://x.com/brix_hq?s=11" className="p-2 text-gray-600 hover:text-emerald-600 transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-4">
            <span className="block">Coming Soon</span>
          </h1>
          <div className="h-1 w-20 bg-emerald-600 mx-auto mb-8"></div>
          <p className="text-xl sm:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Transforming Real Estate Construction with Build Now, Pay Later
          </p>

          {/* Features Preview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Pre-approved Project Financing</h3>
              <p className="text-gray-600">Customers can initiate construction with
structured milestone-based payments</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Risk-Free Payment Model</h3>
              <p className="text-gray-600">Homeowners and developers pay in structured
installments post-construction milestones.</p>
            </div>
          </div>

          {/* Mobile Social Links */}
          <div className="flex justify-center space-x-4 sm:hidden">
            <Link
              href="mailto:team@brixline.in"
              className="p-2 text-gray-600 hover:text-emerald-600 transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
            <Link href="https://x.com/brix_hq?s=11" className="p-2 text-gray-600 hover:text-emerald-600 transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-gray-500">&copy; 2025 Brixline. All rights reserved.</p>
        </div>
      </footer>
    </div>
    
  )
}

