"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Search, ArrowLeft } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import { getTopicTitle, getDoubtsByTopic } from '@/constants';

const TopicPage: React.FC = () => {
  const params = useParams();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  
  const topic = params.topic as string;
  const topicTitle = getTopicTitle(topic);
  const doubts = getDoubtsByTopic(topic);

  if (!topicTitle || !doubts) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="w-full mx-auto px-6 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Topic Not Found</h1>
            <p className="text-gray-600 mb-8">The topic you're looking for doesn't exist.</p>
            <Link href="/" className="text-blue-600 hover:text-blue-800">
              Back to Help Center
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const filteredDoubts = doubts.filter((doubt: any) =>
    doubt.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white pt-20 mx-auto mb-10">
      <div className='bg-[#F5F7FA] w-full px-50'>
        {/* Search Bar */}
        <div className="bg-[#F5F7FA] px-6 py-2 pb-0 max-w-7xl mx-20">
          <div className="relative max-w-xl mx-auto mt-10">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-6 w-6 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for anything..."
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="bg-[#F5F7FA] px-50 mt-10">
          <div className="w-full mx-auto px-40 py-4">
            <nav className="flex items-center space-x-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/" className="hover:text-blue-600">Support</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-[#064D51] font-medium">{topicTitle}</span>
            </nav>
          </div>
        </div>
      </div>

      <div className="w-full mt-10 px-40">
        {/* Main Content */}
        <div className="bg-white">
          <div className="p-8 pt-0">
            <h1 className="text-xl font-semibold text-gray-900 mb-6">{topicTitle}</h1>
            
            {/* Doubts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDoubts.map((doubt: any) => (
                <Link
                  key={doubt.id}
                  href={`/support/${topic}/${doubt.id}`}
                  className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow group"
                >
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {doubt.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                </Link>
              ))}
            </div>

            {filteredDoubts.length === 0 && searchQuery && (
              <div className="text-center py-12">
                <p className="text-gray-500">No results found for "{searchQuery}"</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicPage;
