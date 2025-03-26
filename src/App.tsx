import React, { useState } from 'react';
import { LayoutDashboard, Users, LineChart, Settings as SettingsIcon, Menu } from 'lucide-react';
import Dashboard from './components/Dashboard';
import Compatibility from './components/Compatibility';
import Analytics from './components/Analytics';
import SettingsPanel from './components/Settings';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Dashboard', icon: LayoutDashboard, id: 'dashboard' },
    { name: 'Compatibility', icon: Users, id: 'compatibility' },
    { name: 'Analytics', icon: LineChart, id: 'analytics' },
    { name: 'Settings', icon: SettingsIcon, id: 'settings' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'compatibility':
        return <Compatibility />;
      case 'analytics':
        return <Analytics />;
      case 'settings':
        return <SettingsPanel />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar - Desktop */}
      <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
        <div className="flex min-h-0 flex-1 flex-col bg-gray-800">
          <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
            <div className="flex flex-shrink-0 items-center px-4">
              <h1 className="text-xl font-bold text-white">Livestock Manager</h1>
            </div>
            <nav className="mt-5 flex-1 space-y-1 px-2">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => setActiveTab(item.id)}
                  className={`${
                    activeTab === item.id
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm font-medium`}
                >
                  <item.icon className="mr-3 h-6 w-6" />
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile header */}
      <div className="md:hidden">
        <div className="flex items-center justify-between bg-gray-800 px-4 py-2">
          <h1 className="text-xl font-bold text-white">Livestock Manager</h1>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-300 hover:text-white"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="bg-gray-800 px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`${
                  activeTab === item.id
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                } group flex w-full items-center rounded-md px-2 py-2 text-sm font-medium`}
              >
                <item.icon className="mr-3 h-6 w-6" />
                {item.name}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Main content */}
      <div className="md:pl-64 flex flex-col flex-1">
        <main className="flex-1">
          <div className="py-6">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
              {renderContent()}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;