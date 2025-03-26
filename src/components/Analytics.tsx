import React from 'react';
import { LineChart, BarChart, Activity } from 'lucide-react';

export default function Analytics() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900">Analytics</h2>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Milk Production Trends */}
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">Milk Production Trends</h3>
            <LineChart className="h-5 w-5 text-gray-400" />
          </div>
          <div className="h-64 flex items-center justify-center border-2 border-dashed border-gray-200 rounded-lg">
            <p className="text-gray-500">Milk production chart will be displayed here</p>
          </div>
        </div>

        {/* Breeding Success Rate */}
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">Breeding Success Rate</h3>
            <BarChart className="h-5 w-5 text-gray-400" />
          </div>
          <div className="h-64 flex items-center justify-center border-2 border-dashed border-gray-200 rounded-lg">
            <p className="text-gray-500">Breeding success rate chart will be displayed here</p>
          </div>
        </div>

        {/* Health Metrics */}
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">Health Metrics</h3>
            <Activity className="h-5 w-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-500">Average Temperature</span>
                <span className="text-sm font-semibold text-gray-900">38.5°C</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-500">Activity Level</span>
                <span className="text-sm font-semibold text-gray-900">75%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-500">Feed Intake</span>
                <span className="text-sm font-semibold text-gray-900">90%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Financial Summary */}
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Financial Summary</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <span className="text-sm font-medium text-gray-500">Monthly Revenue</span>
              <span className="text-sm font-semibold text-green-600">₹1,25,000</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <span className="text-sm font-medium text-gray-500">Feed Costs</span>
              <span className="text-sm font-semibold text-red-600">₹45,000</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <span className="text-sm font-medium text-gray-500">Veterinary Expenses</span>
              <span className="text-sm font-semibold text-red-600">₹15,000</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
              <span className="text-sm font-medium text-gray-900">Net Profit</span>
              <span className="text-sm font-bold text-green-600">₹65,000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}