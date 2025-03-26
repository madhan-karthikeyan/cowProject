import React from 'react';
import { Bell, Shield, User, Database } from 'lucide-react';

export default function Settings() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900">Settings</h2>

      <div className="bg-white shadow rounded-lg divide-y divide-gray-200">
        {/* Profile Settings */}
        <div className="p-6">
          <div className="flex items-center">
            <User className="h-6 w-6 text-gray-400" />
            <h3 className="ml-3 text-lg font-medium text-gray-900">Profile Settings</h3>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label className="block text-sm font-medium text-gray-700">Farm Name</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter farm name"
              />
            </div>
            <div className="sm:col-span-3">
              <label className="block text-sm font-medium text-gray-700">Owner Name</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter owner name"
              />
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="p-6">
          <div className="flex items-center">
            <Bell className="h-6 w-6 text-gray-400" />
            <h3 className="ml-3 text-lg font-medium text-gray-900">Notifications</h3>
          </div>
          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-900">Health Alerts</p>
                <p className="text-sm text-gray-500">Receive alerts for health-related issues</p>
              </div>
              <button
                type="button"
                className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 bg-blue-600"
                role="switch"
                aria-checked="true"
              >
                <span className="translate-x-5 pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-900">Breeding Reminders</p>
                <p className="text-sm text-gray-500">Get notifications for breeding schedules</p>
              </div>
              <button
                type="button"
                className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 bg-gray-200"
                role="switch"
                aria-checked="false"
              >
                <span className="translate-x-0 pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
              </button>
            </div>
          </div>
        </div>

        {/* Security */}
        <div className="p-6">
          <div className="flex items-center">
            <Shield className="h-6 w-6 text-gray-400" />
            <h3 className="ml-3 text-lg font-medium text-gray-900">Security</h3>
          </div>
          <div className="mt-6">
            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Change Password
            </button>
          </div>
        </div>

        {/* Data Management */}
        <div className="p-6">
          <div className="flex items-center">
            <Database className="h-6 w-6 text-gray-400" />
            <h3 className="ml-3 text-lg font-medium text-gray-900">Data Management</h3>
          </div>
          <div className="mt-6">
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Export Data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}