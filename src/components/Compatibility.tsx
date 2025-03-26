import React, { useState } from 'react';
import { Check, AlertTriangle } from 'lucide-react';

const indianBreeds = {
  cows: ['Gir', 'Sahiwal', 'Red Sindhi', 'Tharparkar', 'Rathi', 'Kankrej'],
  bulls: ['Gir', 'Sahiwal', 'Red Sindhi', 'Tharparkar', 'Rathi', 'Kankrej'],
};

export default function Compatibility() {
  const [cowDetails, setCowDetails] = useState({
    breed: '',
    age: '',
    milkYield: '',
    health: '',
  });

  const [bullDetails, setBullDetails] = useState({
    breed: '',
    age: '',
    proven: false,
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const checkCompatibility = async () => {
    setLoading(true);
    try {
      // In a real app, this would call the Gemini API
      // For demo purposes, we'll simulate a response
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const mockResult = {
        score: Math.floor(Math.random() * 40) + 60,
        traits: {
          milkYield: Math.random() > 0.5 ? 'High' : 'Medium',
          fertility: Math.random() > 0.5 ? 'Good' : 'Average',
          longevity: Math.random() > 0.5 ? 'High' : 'Medium',
        },
        recommendation: Math.random() > 0.5 
          ? 'Highly recommended match based on genetic traits'
          : 'Acceptable match with some considerations',
      };
      
      setResult(mockResult);
    } catch (error) {
      console.error('Error:', error);
    }
    setLoading(false);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900">Breeding Compatibility Check</h2>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Cow Details */}
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Cow Details</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Breed</label>
              <select
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={cowDetails.breed}
                onChange={(e) => setCowDetails({ ...cowDetails, breed: e.target.value })}
              >
                <option value="">Select breed</option>
                {indianBreeds.cows.map((breed) => (
                  <option key={breed} value={breed}>{breed}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Age (years)</label>
              <input
                type="number"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={cowDetails.age}
                onChange={(e) => setCowDetails({ ...cowDetails, age: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Milk Yield (L/day)</label>
              <input
                type="number"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={cowDetails.milkYield}
                onChange={(e) => setCowDetails({ ...cowDetails, milkYield: e.target.value })}
              />
            </div>
          </div>
        </div>

        {/* Bull Details */}
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Bull Details</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Breed</label>
              <select
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={bullDetails.breed}
                onChange={(e) => setBullDetails({ ...bullDetails, breed: e.target.value })}
              >
                <option value="">Select breed</option>
                {indianBreeds.bulls.map((breed) => (
                  <option key={breed} value={breed}>{breed}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Age (years)</label>
              <input
                type="number"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={bullDetails.age}
                onChange={(e) => setBullDetails({ ...bullDetails, age: e.target.value })}
              />
            </div>
            <div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  checked={bullDetails.proven}
                  onChange={(e) => setBullDetails({ ...bullDetails, proven: e.target.checked })}
                />
                <span className="ml-2 text-sm text-gray-700">Proven Sire</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Check Compatibility Button */}
      <div className="flex justify-center">
        <button
          onClick={checkCompatibility}
          disabled={loading}
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          {loading ? 'Checking...' : 'Check Compatibility'}
        </button>
      </div>

      {/* Results */}
      {result && (
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Compatibility Results</h3>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <div className={`text-2xl font-bold ${result.score >= 70 ? 'text-green-600' : 'text-yellow-600'}`}>
                {result.score}% Compatible
              </div>
              {result.score >= 70 ? (
                <Check className="ml-2 h-6 w-6 text-green-600" />
              ) : (
                <AlertTriangle className="ml-2 h-6 w-6 text-yellow-600" />
              )}
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="border rounded-lg p-4">
                <h4 className="text-sm font-medium text-gray-500">Expected Milk Yield</h4>
                <p className="mt-1 text-lg font-semibold">{result.traits.milkYield}</p>
              </div>
              <div className="border rounded-lg p-4">
                <h4 className="text-sm font-medium text-gray-500">Fertility</h4>
                <p className="mt-1 text-lg font-semibold">{result.traits.fertility}</p>
              </div>
              <div className="border rounded-lg p-4">
                <h4 className="text-sm font-medium text-gray-500">Longevity</h4>
                <p className="mt-1 text-lg font-semibold">{result.traits.longevity}</p>
              </div>
            </div>

            <div className="mt-4">
              <h4 className="text-sm font-medium text-gray-500">Recommendation</h4>
              <p className="mt-1 text-gray-900">{result.recommendation}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}