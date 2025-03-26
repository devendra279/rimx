import React from 'react';
import { Bell, Settings, Search, Menu, X, ChevronDown, MessageSquare, CheckCircle, Plus } from 'lucide-react';

const AdminPanel = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <div className="flex h-screen bg-gray-50 font-sans">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transition-all duration-300 ease-in-out ${
        menuOpen ? "translate-x-0" : "-translate-x-full"
      } md:relative md:translate-x-0`}>
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-16 items-center justify-center border-b px-4">
            <h1 className="text-xl font-bold text-indigo-600">RiMX Admin</h1>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 overflow-y-auto px-4 py-6">
            <button className="flex w-full items-center justify-start rounded-md px-3 py-2 text-sm font-medium text-indigo-600 hover:bg-gray-100">
              <svg className="mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Dashboard
            </button>
            <button className="flex w-full items-center justify-start rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
              <svg className="mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Projects
            </button>
            <button className="flex w-full items-center justify-start rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
              <svg className="mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              Users
            </button>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="sticky top-0 z-40 border-b bg-white shadow-sm">
          <div className="flex h-16 items-center justify-between px-4 md:px-6">
            <div className="flex items-center">
              <button
                className="rounded-md p-2 text-gray-500 hover:bg-gray-100 md:hidden"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
              <h1 className="ml-2 text-xl font-semibold">Dashboard</h1>
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center rounded-md bg-gray-100 px-3 py-1.5">
                <Search className="mr-2 h-4 w-4 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="flex-1 border-none bg-transparent text-sm focus:outline-none"
                />
              </div>
              <button className="rounded-full p-1 text-gray-500 hover:bg-gray-100">
                <Bell className="h-5 w-5" />
              </button>
              <div className="flex items-center space-x-2">
                <div className="relative flex h-8 w-8 shrink-0 overflow-hidden rounded-full">
                  <img 
                    className="aspect-square h-full w-full" 
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=admin" 
                    alt="Admin" 
                  />
                </div>
                <ChevronDown className="h-4 w-4 text-gray-500" />
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          {/* Projects Overview Section */}
          <section className="mb-8">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold">Projects Overview</h2>
                <p className="text-sm text-gray-500">Track project progress and statistics</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Project Status */}
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-sm font-medium">Project Status</h3>
                <div className="mb-2 flex justify-between text-sm">
                  <span>Select: 35%</span>
                  <button className="text-indigo-600 hover:text-indigo-800">View All</button>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-200">
                  <div className="h-2 rounded-full bg-indigo-600" style={{ width: '35%' }}></div>
                </div>
              </div>

              {/* Recent Projects */}
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-sm font-medium">Recent Projects</h3>
                <div className="flex items-end space-x-2">
                  {[16, 12, 8, 4].map((value, index) => (
                    <div key={index} className="flex flex-1 flex-col items-center">
                      <div 
                        className="w-full bg-indigo-100 transition-all duration-300 hover:bg-indigo-200" 
                        style={{ height: `${value * 4}px` }}
                      ></div>
                      <span className="mt-1 text-xs">{value}</span>
                    </div>
                  ))}
                  <div className="flex-1 text-center text-xs text-indigo-600">On</div>
                </div>
              </div>
            </div>
          </section>

          {/* Tasks Overview Section */}
          <section className="mb-8">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold">Tasks Overview</h2>
                <p className="text-sm text-gray-500">Distribution of tasks by status</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Task Status */}
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-sm font-medium">Task Status</h3>
                <div className="space-y-4">
                  <div>
                    <div className="mb-1 flex justify-between text-sm">
                      <span>To Do: 33%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-200">
                      <div className="h-2 rounded-full bg-yellow-500" style={{ width: '33%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex justify-between text-sm">
                      <span>Blocked: 17%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-200">
                      <div className="h-2 rounded-full bg-red-500" style={{ width: '17%' }}></div>
                    </div>
                  </div>
                  <div className="flex space-x-4 text-sm">
                    <span className="text-gray-500">To Do</span>
                    <span className="text-gray-500">In Progress</span>
                    <span className="text-gray-500">Blocked</span>
                    <span className="text-gray-500">Completed</span>
                  </div>
                </div>
              </div>

              {/* Recent Tasks */}
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-sm font-medium">Recent Tasks</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="mr-3 mt-1 h-2 w-2 rounded-full bg-indigo-600"></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-medium">Update user dashboard layout</h4>
                        <span className="text-xs text-gray-500">Due Today</span>
                      </div>
                      <div className="mt-1 flex items-center text-xs text-gray-500">
                        <span>▼ Alex Morgan</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-3 mt-1 h-2 w-2 rounded-full bg-yellow-500"></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-medium">Fix navigation responsiveness</h4>
                        <span className="text-xs text-gray-500">Due Tomorrow</span>
                      </div>
                      <div className="mt-1 flex items-center text-xs text-gray-500">
                        <span>▼ Jamie Chen</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-3 mt-1 h-2 w-2 rounded-full bg-green-500"></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-medium">Implement dark mode toggle</h4>
                        <span className="text-xs text-gray-500">Due Next week</span>
                      </div>
                      <div className="mt-1 flex items-center text-xs text-gray-500">
                        <span>▼ Taylor Swift</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Team Performance Section */}
          <section className="mb-8">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold">Team Performance</h2>
                <p className="text-sm text-gray-500">Productivity and task completion metrics for your team</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Productivity */}
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-sm font-medium">Productivity</h3>
                <div className="flex h-40 items-end space-x-4">
                  {[100, 75, 50, 25, 0].map((value, index) => (
                    <div key={index} className="flex-1">
                      <div 
                        className="w-full bg-indigo-100 transition-all duration-300 hover:bg-indigo-200" 
                        style={{ height: `${value}%` }}
                      ></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Task Completion */}
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-sm font-medium">Task Completion</h3>
                <div className="flex space-x-4 overflow-x-auto pb-2">
                  {['Alex', 'Jamie', 'Taylor', 'Morgan', 'Casey'].map((name, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className="mb-1 h-24 w-4 rounded-full bg-gray-200">
                        <div 
                          className="w-4 rounded-full bg-green-500" 
                          style={{ height: `${Math.min(100, 20 + Math.random() * 80)}%` }}
                        ></div>
                      </div>
                      <span className="text-xs">{name}</span>
                    </div>
                  ))}
                  <div className="flex flex-col items-center">
                    <div className="mb-1 h-24 w-4 rounded-full bg-gray-200">
                      <div 
                        className="w-4 rounded-full bg-indigo-600" 
                        style={{ height: '85%' }}
                      ></div>
                    </div>
                    <span className="text-xs">Avg</span>
                  </div>
                </div>
                <div className="mt-2 text-center text-xs text-gray-500">Productivity Score</div>
              </div>
            </div>
          </section>

          {/* Recent Activity Section */}
          <section>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Recent Activity</h2>
            </div>

            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                    <MessageSquare className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-medium">Sarah Johnson</h4>
                      <span className="text-xs text-gray-500">10 minutes ago</span>
                    </div>
                    <p className="text-sm text-gray-500">commented on Marketing Campaign</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-medium">Michael Chen</h4>
                      <span className="text-xs text-gray-500">1 hour ago</span>
                    </div>
                    <p className="text-sm text-gray-500">completed Q3 Budget Review</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <Plus className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-medium">Jessica Lee</h4>
                      <span className="text-xs text-gray-500">3 hours ago</span>
                    </div>
                    <p className="text-sm text-gray-500">created Website Redesign Project</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-medium">David Wilson</h4>
                      <span className="text-xs text-gray-500">5 hours ago</span>
                    </div>
                    <p className="text-sm text-gray-500">assigned Bug Fix #1234</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default AdminPanel;