import { useState } from 'react';
import { Home, FileText, BarChart3, User } from 'lucide-react';

export default function CandidateDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-blue-600 rounded"></div>
            <span className="text-xl font-bold text-gray-800">Logo</span>
          </div>

          <nav className="space-y-2">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'dashboard'
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Home size={20} />
              <span className="font-medium">Dashboard</span>
            </button>

            <button
              onClick={() => setActiveTab('resume')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'resume'
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <FileText size={20} />
              <span className="font-medium">Resume Parser</span>
            </button>

            <button
              onClick={() => setActiveTab('reports')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'reports'
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <BarChart3 size={20} />
              <span className="font-medium">Reports</span>
            </button>

            <button
              onClick={() => setActiveTab('account')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'account'
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <User size={20} />
              <span className="font-medium">Account</span>
            </button>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {activeTab === 'dashboard' && (
          <div className="max-w-6xl">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">
              HI, Candidate Name!
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Resume Optimization Card */}
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  Resume Optimization
                </h2>
                <p className="text-sm text-gray-600 mb-4">
                  Ideal/less optimized to standard feedback
                </p>
              </div>

              {/* AI-Powered Report Card */}
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  AI-Powered Report
                </h2>
                <div className="flex items-center justify-between mb-4">
                  <div className="relative w-24 h-24">
                    <svg className="w-24 h-24 transform -rotate-90">
                      <circle
                        cx="48"
                        cy="48"
                        r="40"
                        stroke="#e5e7eb"
                        strokeWidth="8"
                        fill="none"
                      />
                      <circle
                        cx="48"
                        cy="48"
                        r="40"
                        stroke="#3b82f6"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={`${2 * Math.PI * 40 * 0.59} ${2 * Math.PI * 40}`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-blue-600">59%</span>
                    </div>
                  </div>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                    View Report
                  </button>
                </div>
              </div>

              {/* Latest Feedback Card */}
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  Latest Feedback
                </h2>
                <p className="text-sm text-gray-600 mb-2">standard confused</p>
                <p className="text-sm text-gray-700 mb-4">
                  Lorem is like sic sconer scarred and sees amogs night. interrosis.
                </p>
                <button className="text-blue-600 hover:underline font-medium">
                  View Details
                </button>
              </div>

              {/* Job Compatibility Report Card */}
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  Job Compatibility Report
                </h2>
                <p className="text-sm text-gray-600 mb-2">Compare your confused</p>
                <p className="text-sm text-gray-700 mb-4">
                  Hiring platforms can tip strategy tip curated on next place
                </p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'resume' && (
          <div className="max-w-6xl">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">
              Intelligent Narrative Builder
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Upload Resume Card */}
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  Upload Resume
                </h2>
                <p className="text-sm text-gray-600 mb-6">
                  Lorem ipsum dolor sit amet or "spr/C" or lorem mol.
                </p>
                <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                  <FileText size={18} />
                  <span>Search</span>
                </button>
              </div>

              {/* Use Job-Specific Language Card */}
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  Use Job-Specific Language
                </h2>
                <p className="text-sm text-gray-600 mb-6">
                  Lorem ipsum dolor sit amet this is lorem high various teach permit lorum condi enant.
                  <br />
                  <br />
                  et suscipit ului risus risus.
                </p>
                <button className="flex items-center gap-2 text-blue-600 hover:underline font-medium">
                  <span>View Details</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Emphasize Achievements Card 1 */}
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  Emphasize Achievements
                </h2>
                <h3 className="text-lg font-medium text-gray-700 mb-2">
                  Engage Soft connections.
                </h3>
                <p className="text-sm text-gray-600 mb-6">
                  "Status inter assessment by document perception cum, recover us dies boris tus cicurabuit. But orex convenience.
                </p>
                <button className="flex items-center gap-2 text-blue-600 hover:underline font-medium">
                  <span>View Details</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Emphasize Achievements Card 2 */}
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  Emphasize Achievements
                </h2>
                <p className="text-sm text-gray-600 mb-6">
                  Percise over estimatum ante database suscipit tu and vel narrative exceptance, more regular inner
                </p>
                <button className="flex items-center gap-2 text-blue-600 hover:underline font-medium">
                  <span>View Details</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'reports' && (
          <div className="max-w-4xl">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Reports</h1>
            <div className="space-y-4">
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Resume Analysis Report
                    </h3>
                    <p className="text-sm text-gray-600">Generated on Oct 15, 2025</p>
                  </div>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                    View
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Job Compatibility Report
                    </h3>
                    <p className="text-sm text-gray-600">Generated on Oct 10, 2025</p>
                  </div>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                    View
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Skills Assessment
                    </h3>
                    <p className="text-sm text-gray-600">Generated on Oct 5, 2025</p>
                  </div>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                    View
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'account' && (
          <div className="max-w-4xl">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Account Settings</h1>
            <div className="bg-white rounded-lg shadow p-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    defaultValue="Candidate Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    defaultValue="candidate@example.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    defaultValue="+1 234 567 8900"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter current password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    New Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter new password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                    Save Changes
                  </button>
                  <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-300 transition-colors">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}