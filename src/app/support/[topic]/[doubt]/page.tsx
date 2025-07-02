"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Search, ArrowLeft, ChevronDown } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import { getDoubtsByTopic, getQuestionsByDoubt, getTopicTitle, getDoubtTitle } from '@/constants';

const DoubtPage: React.FC = () => {
  const params = useParams();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedDoubt, setExpandedDoubt] = useState<string>(params.doubt as string);

  const topic = params.topic as string;
  const doubt = params.doubt as string;
  
  // Get data from constants
  const topicTitle = getTopicTitle(topic);
  const doubtTitle = getDoubtTitle(topic, doubt);
  const questions = getQuestionsByDoubt(topic, doubt);

  // Debug logging
  console.log('Topic:', topic);
  console.log('Doubt:', doubt);
  console.log('Questions:', questions);
  console.log('Questions length:', questions?.length);

  const toggleDoubt = (doubtId: string) => {
    setExpandedDoubt(expandedDoubt === doubtId ? '' : doubtId);
  };

  if (!topicTitle || !doubtTitle) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="w-full mx-auto px-6 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Page Not Found</h1>
            <p className="text-gray-600 mb-8">The topic or doubt you're looking for doesn't exist.</p>
            <Link href="/" className="text-blue-600 hover:text-blue-800">
              Back to Help Center
            </Link>
          </div>
        </div>
      </div>
    );
  }

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
              <Link href={`/support/${topic}`} className="hover:text-blue-600">{topicTitle}</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-[#064D51] font-medium">{doubtTitle}</span>
            </nav>
          </div>
        </div>
      </div>

      <div className="flex w-full mt-10 px-40">
        {/* Sidebar */}
        <div className="w-80 bg-white h-full overflow-y-auto">
          {/* Header */}
          <div className="p-4 pl-0">
            <h2 className="text-lg font-semibold text-gray-900">{topicTitle}</h2>
          </div>

          {/* Navigation */}
          <div className="p-4 pl-0">
            {getDoubtsByTopic(topic).map((doubtItem) => (
              <div 
                key={doubtItem.id} 
                className={`mb-4 rounded-lg pl-0 ${
                  doubt === doubtItem.id ? 'bg-[#F5F7FA]' : ''
                }`}
              >
                {/* Doubt Section Header */}
                <button
                  onClick={() => toggleDoubt(doubtItem.id)}
                  className={`flex items-center justify-between w-full p-2 text-left rounded-md transition-colors ${
                    doubt === doubtItem.id
                      ? 'bg-[#F5F7FA] text-gray-900'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center">
                    {expandedDoubt === doubtItem.id ? (
                      <ChevronDown className="w-7 h-7 mr-2 border border-gray-300 rounded-md text-gray-500" />
                    ) : (
                      <ChevronRight className="w-7 h-7 mr-2 border border-gray-300 rounded-md text-gray-500" />
                    )}
                    <span className="font-medium">{doubtItem.title}</span>
                  </div>
                </button>

                {/* Questions List */}
                {expandedDoubt === doubtItem.id && (
                  <div className="ml-6 pb-2">
                    {getQuestionsByDoubt(topic, doubtItem.id).map((question) => {
                      const isActive = doubt === doubtItem.id && window.location.pathname.includes(question.id);
                      return (
                        <Link
                          key={question.id}
                          href={`/support/${topic}/${doubtItem.id}/${question.id}`}
                          className={`block p-2 text-sm transition-colors ${
                            isActive
                              ? 'bg-blue-100 text-blue-800 border-l-[2px] border-black'
                              : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900 border-l border-gray-400'
                          }`}
                        >
                          <div className="line-clamp-2">{question.question}</div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-white border-l-2 border-gray-200 mt-3">
          <div className="p-8 pt-0">
            <h1 className="text-xl font-semibold text-gray-900 mb-6">{doubtTitle}</h1>
            
            {/* Questions List */}
            <div className="space-y-3">
              {questions && questions.length > 0 ? (
                questions
                  .filter((question) => 
                    !searchQuery || 
                    question.question.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                  .map((question) => (
                    <Link
                      key={question.id}
                      href={`/support/${topic}/${doubt}/${question.id}`}
                      className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 group transition-colors"
                    >
                      <span className="text-gray-900 group-hover:text-blue-600 transition-colors">
                        {question.question}
                      </span>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                    </Link>
                  ))
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500 text-sm">No questions available for this section.</p>
                </div>
              )}
            </div>

            {/* No results message */}
            {searchQuery && questions && questions.filter((question) =>
              question.question.toLowerCase().includes(searchQuery.toLowerCase())
            ).length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-500 text-sm">No questions found for "{searchQuery}"</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoubtPage;
