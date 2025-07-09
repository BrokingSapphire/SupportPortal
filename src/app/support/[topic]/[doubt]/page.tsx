"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Search, ArrowLeft, ChevronDown } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import { getSubcategoriesByTopic, getSubcategoryTitle, getCategoryTitle, getQuestionsBySubcategory } from '@/constants';

const DoubtPage: React.FC = () => {
  const params = useParams();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedDoubt, setExpandedDoubt] = useState<string>(params.doubt as string);

  const topic = params.topic as string;
  const doubt = params.doubt as string;

  // Get data from constants
  const topicTitle = getCategoryTitle(topic);
  const doubtTitle = getSubcategoryTitle(topic, doubt);
  const questions = getQuestionsBySubcategory(topic, doubt);

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
      <div className="min-h-screen bg-gray-50 pt-16 sm:pt-20">
        <div className="w-full mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <div className="text-center">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Page Not Found</h1>
            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">The topic or doubt you're looking for doesn't exist.</p>
            <Link href="/" className="text-blue-600 hover:text-blue-800 text-sm sm:text-base">
              Back to Help Center
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-16 sm:pt-20 mx-auto mb-6 sm:mb-10">
      <div className="bg-[#F5F7FA] px-3 sm:px-4 md:px-8 lg:px-12 xl:px-20 2xl:px-32 -mt-2">
        {/* Search Bar */}
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#F5F7FA] px-2 sm:px-6 py-2 pb-0 max-w-7xl mx-auto">
            <div className="relative w-full max-w-full mx-auto mt-4 sm:mt-6 md:mt-8 lg:mt-10">
              <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 md:pl-6 flex items-center pointer-events-none">
                <Search className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for anything..."
                className="block w-full h-10 sm:h-12 md:h-14 lg:h-16 pl-10 sm:pl-12 md:pl-14 lg:pl-16 pr-3 sm:pr-4 md:pr-6 py-2 sm:py-3 rounded-[8px] sm:rounded-[10px] md:rounded-[12px] leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
              />
            </div>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="bg-[#F5F7FA] px-0 sm:pr-4 mt-4 sm:mt-6 md:mt-8 lg:mt-10">
          <div className="max-w-7xl mx-auto pl-0 py-2 sm:py-4">
            <div className="max-w-7xl pl-0">
              <nav className="flex flex-wrap items-center space-x-1 sm:space-x-2 text-xs sm:text-sm md:text-base align-left font-regular font-poppins text-gray-600">
                <Link href="/" className="hover:text-[#064D51] truncate">Home</Link>
                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <Link href="/" className="hover:text-[#064D51] truncate">Support</Link>
                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <Link href={`/support/${topic}`} className="hover:text-[#064D51] truncate">{topicTitle}</Link>
                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="text-[#064D51] font-medium truncate">{doubtTitle}</span>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row w-full mt-6 sm:mt-8 md:mt-10 max-w-7xl mx-auto px-3 sm:px-4 lg:px-0">
        {/* Sidebar */}
        <div className="hidden lg:block w-full lg:w-80 xl:w-96 bg-white h-auto lg:h-full overflow-x-auto lg:overflow-y-auto border-b lg:border-b-0 lg:pr-4">
          {/* Header */}
          <div className="pr-4 pt-4 lg:pt-0">
            <h2 className="text-sm sm:text-base md:text-lg font-semibold text-[#9d9f9f]">{topicTitle}</h2>
          </div>

          {/* Navigation */}
          <div className="p-2 sm:p-4 pl-2 pt-0">
            {getSubcategoriesByTopic(topic).map((doubtItem, idx, arr) => (
              <div
                key={doubtItem.id}
                className={`rounded-lg pl-0 ${expandedDoubt === doubtItem.id
                  ? 'bg-[#F5F7FA] mb-2'
                  : 'bg-white' + (idx !== arr.length - 1 ? ' mb-1' : '')
                  }`}
              >
                {/* Doubt Section Header */}
                <button
                  onClick={() => setExpandedDoubt(expandedDoubt === doubtItem.id ? '' : doubtItem.id)}
                  className={`flex items-center justify-between w-full pt-3 sm:pt-4 md:pt-6 text-left rounded-md transition-colors ${doubt === doubtItem.id ? 'text-gray-900' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                >
                  <div className="flex items-center ml-1 sm:ml-2 md:ml-[8px]">
                    {expandedDoubt === doubtItem.id ? (
                      <img src="/questions list/rightarrow.svg" alt="Collapse" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 sm:mr-3 md:mr-[14px] rounded-md text-gray-500 rotate-90 transition-transform duration-200 flex-shrink-0" />
                    ) : (
                      <img src="/questions list/rightarrow.svg" alt="Expand" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 sm:mr-3 md:mr-[14px] rounded-md text-gray-500 transition-transform duration-200 flex-shrink-0" />
                    )}
                    <span className="font-medium text-sm sm:text-base">{doubtItem.title}</span>
                  </div>
                </button>

                {/* Questions List */}
                {expandedDoubt === doubtItem.id && (
                  <div className="ml-2 sm:ml-3 md:ml-5 pb-2">
                    {getQuestionsBySubcategory(topic, doubtItem.id).map((question: any, idx: number) => {
                      const isActive = doubt === doubtItem.id && typeof window !== 'undefined' && window.location.pathname.includes(question.id);
                      return (
                        <Link
                          key={question.id}
                          href={`/support/${topic}/${doubtItem.id}/${question.id}`}
                          className={`block p-2 py-1 sm:py-[5px] text-xs sm:text-sm transition-colors ${isActive
                            ? 'bg-blue-100 text-blue-800 border-l-2 border-black'
                            : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900 border-l border-gray-400'
                            }${idx === 0 ? ' pt-2 sm:pt-3 md:pt-[14px]' : ''}`}
                        >
                          <div className="line-clamp-2 pl-2">{question.question}</div>
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
        <div className="flex-1 bg-white lg:border-l-2 mt-4 sm:mt-6 lg:mt-0 lg:ml-3 xl:ml-5 border-gray-200 pl-0 sm:pl-4 lg:pl-8 xl:pl-[60px] pr-3 sm:pr-4 lg:pr-0">
          <div className="pt-0 w-full max-w-none sm:max-w-[95%] md:max-w-[810px] mx-auto lg:mx-0">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-[28px] font-poppins font-medium text-gray-900 mb-3 sm:mb-4 md:mb-6 leading-tight">{doubtTitle}</h1>

            {/* Questions List */}
            <div className="space-y-0">
              {questions && questions.length > 0 ? (
                questions
                  .filter((question: any) =>
                    !searchQuery ||
                    question.question.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                  .map((question: any) => (
                    <Link
                      key={question.id}
                      href={`/support/${topic}/${doubt}/${question.id}`}
                      className="flex items-center justify-between py-3 sm:py-4 md:py-[24px] px-2 sm:px-3 border-b border-[#d1d5db] group transition-colors hover:bg-gray-50"
                    >
                      <span className="text-[#686c6c] font-poppins font-medium text-sm sm:text-base md:text-[18px] transition-colors flex-1 pr-2 leading-relaxed">
                        {question.question}
                      </span>
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-400 transition-colors flex-shrink-0" />
                    </Link>
                  ))
              ) : (
                <div className="text-center py-6 sm:py-8">
                  <p className="text-gray-500 text-xs sm:text-sm">No questions available for this section.</p>
                </div>
              )}
            </div>

            {/* No results message */}
            {searchQuery && questions && questions.filter((question: any) =>
              question.question.toLowerCase().includes(searchQuery.toLowerCase())
            ).length === 0 && (
                <div className="text-center py-6 sm:py-8">
                  <p className="text-gray-500 text-xs sm:text-sm">No questions found for "{searchQuery}"</p>
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoubtPage;