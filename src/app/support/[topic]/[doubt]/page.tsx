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
      <div className='bg-[#F5F7FA] px-50 -mt-2'>
        {/* Search Bar */}
        <div className='max-w-7xl mx-auto'>
          <div className="bg-[#F5F7FA] px-6 py-2 pb-0 max-w-7xl mx-20">
            <div className="relative max-w-xl mx-auto mt-10">
              <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                <Search className="h-6 w-6 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for anything..."
                className="block w-[800px] h-[64px] pl-[62px] pr-6 py-3 rounded-[12px] leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="bg-[#F5F7FA] px-50 mt-10">
          <div className="w-full mx-auto px-40 py-4">
            <div className='max-w-7xl mx-auto'>
              <nav className="flex items-center space-x-2 text-[16px] align-left font-regular font-poppins text-gray-600">
                <Link href="/" className="hover:text-[#064D51]">Home</Link>
                <ChevronRight className="w-4 h-4" />
                <Link href="/" className="hover:text-[#064D51]">Support</Link>
                <ChevronRight className="w-4 h-4" />
                <Link href={`/support/${topic}`} className="hover:text-[#064D51]">{topicTitle}</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-[#064D51] font-medium">{doubtTitle}</span>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full mt-[38px] max-w-7xl mx-auto">
        {/* Sidebar */}
        <div className="w-80 bg-white h-full overflow-y-auto ">
          {/* Header */}
          <div className="pr-4">
            <h2 className="text-[18px] font-semibold text-[#9d9f9f]">{topicTitle}</h2>
          </div>

          {/* Navigation */}
          <div className="p-4 pl-2 pt-0">
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
                  className={`flex items-center justify-between w-full pt-6 text-left rounded-md transition-colors ${doubt === doubtItem.id ? 'text-gray-900' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                >
                  <div className="flex items-center ml-[8px]">
                    {expandedDoubt === doubtItem.id ? (
                      <img src="/questions list/rightarrow.svg" alt="Collapse" className="w-6 h-6 mr-[14px] rounded-md text-gray-500 rotate-90 transition-transform duration-200" />
                    ) : (
                      <img src="/questions list/rightarrow.svg" alt="Expand" className="w-6 h-6 mr-[14px] rounded-md text-gray-500 transition-transform duration-200" />
                    )}
                    <span className="font-medium">{doubtItem.title}</span>
                  </div>
                </button>

                {/* Questions List */}
                {expandedDoubt === doubtItem.id && (
                  <div className="ml-5 pb-2">
                    {getQuestionsBySubcategory(topic, doubtItem.id).map((question: any, idx: number) => {
                      const isActive = doubt === doubtItem.id && typeof window !== 'undefined' && window.location.pathname.includes(question.id);
                      return (
                        <Link
                          key={question.id}
                          href={`/support/${topic}/${doubtItem.id}/${question.id}`}
                          className={`block p-2 py-[5px] text-sm transition-colors ${isActive
                              ? 'bg-blue-100 text-blue-800 border-l-[2px] border-black'
                              : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900 border-l border-gray-400'
                            }${idx === 0 ? ' pt-[14px]' : ''}`}
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
        <div className="flex-1 bg-white border-l-2 ml-[20px] border-gray-200 pl-[60px]">
          <div className="pt-0 w-[810px] mx-auto">
            <h1 className="text-[28px] font-poppins font-medium text-gray-900 mb-6">{doubtTitle}</h1>

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
                      className="flex items-center justify-between py-[24px] px-3 border-b border-[#d1d5db] group transition-colors"
                    >
                      <span className="text-[#686c6c] font-poppins font-medium text-[18px] transition-colors">
                        {question.question}
                      </span>
                      <ChevronRight className="w-6 h-6 text-gray-400 transition-colors" />
                    </Link>
                  ))
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500 text-sm">No questions available for this section.</p>
                </div>
              )}
            </div>

            {/* No results message */}
            {searchQuery && questions && questions.filter((question: any) =>
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
