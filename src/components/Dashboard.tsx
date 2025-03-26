import React from 'react';
import { Cog as Cow, Activity, Droplets, IndianRupee } from 'lucide-react';

const stats = [
  { name: 'Total Livestock', value: '42', icon: Cow, color: 'bg-blue-500' },
  { name: 'Active Breeding', value: '12', icon: Activity, color: 'bg-green-500' },
  { name: 'Milk Production', value: '850L', icon: Droplets, color: 'bg-yellow-500' },
  { name: 'Revenue', value: '₹45,000', icon: IndianRupee, color: 'bg-purple-500' },
];

const recentActivity = [
  { id: 1, animal: 'Gir Cow #123', event: 'Health Check', date: '2024-03-15' },
  { id: 2, animal: 'HF Bull #456', event: 'Breeding', date: '2024-03-14' },
  { id: 3, animal: 'Sahiwal Cow #789', event: 'Vaccination', date: '2024-03-13' },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900">Dashboard Overview</h2>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.name} className="overflow-hidden rounded-lg bg-white shadow">
            <div className="p-5">
              <div className="flex items-center">
                <div className={`${stat.color} rounded-md p-3`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-5">
                  <p className="text-sm font-medium text-gray-500 truncate">{stat.name}</p>
                  <p className="mt-1 text-xl font-semibold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white shadow rounded-lg">
        <div className="p-6">
          <h3 className="text-lg font-medium text-gray-900">Recent Activity</h3>
          <div className="mt-6 flow-root">
            <ul className="-my-5 divide-y divide-gray-200">
              {recentActivity.map((activity) => (
                <li key={activity.id} className="py-5">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {activity.animal}
                      </p>
                      <p className="text-sm text-gray-500 truncate">{activity.event}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <p className="text-sm text-gray-500">{activity.date}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}