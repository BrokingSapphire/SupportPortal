"use client";
import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { ChevronRight, Search } from 'lucide-react';
import { useParams } from 'next/navigation';
import { getQuestion, getTopicTitle, getDoubtTitle } from '@/constants';
import QuestionSidebar from '@/components/gen-components/QuestionSidebar';

const QuestionPage: React.FC = () => {
  const params = useParams();
  const [searchQuery, setSearchQuery] = useState('');

  const topic = params.topic as string;
  const doubt = params.doubt as string;
  const question = params.question as string;

  // Get question data from constants
  const questionData = getQuestion(topic, doubt, question);

  // Get readable titles
  const topicTitle = getTopicTitle(topic);
  const doubtTitle = getDoubtTitle(topic, doubt);

  // Function to safely highlight text while preserving HTML structure
  const highlightInHtml = (html: string, query: string) => {
    if (!query.trim()) return html;

    // Create a temporary DOM element to parse HTML
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;

    // Function to recursively process text nodes
    const processTextNodes = (node: Node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        const text = node.textContent || '';
        const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
        if (regex.test(text)) {
          const highlightedText = text.replace(regex, '<mark class="bg-yellow-200 dark:bg-yellow-600 px-1 rounded">$1</mark>');
          const wrapper = document.createElement('span');
          wrapper.innerHTML = highlightedText;
          node.parentNode?.replaceChild(wrapper, node);
        }
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        // Process child nodes
        const children = Array.from(node.childNodes);
        children.forEach(child => processTextNodes(child));
      }
    };

    processTextNodes(tempDiv);
    return tempDiv.innerHTML;
  };

  // Function to check if search query exists in text content only
  const hasTextMatch = (html: string, query: string) => {
    if (!query.trim()) return true;

    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    const plainText = tempDiv.textContent || tempDiv.innerText || '';
    return plainText.toLowerCase().includes(query.toLowerCase());
  };

  // Filter and highlight answer content based on search query
  const processedAnswer = useMemo(() => {
    if (!questionData) return '';

    if (!searchQuery.trim()) {
      return questionData.answer;
    }

    // Check if search query exists in plain text content
    if (!hasTextMatch(questionData.answer, searchQuery)) {
      return questionData.answer; // Return original if no match in text content
    }

    // Highlight matches in HTML while preserving structure
    return highlightInHtml(questionData.answer, searchQuery);
  }, [questionData, searchQuery]);

  if (!questionData) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="w-full mx-auto px-6 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Question Not Found</h1>
            <p className="text-gray-600 mb-8">The question you&apos;re looking for doesn&apos;t exist.</p>
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
      <div className='bg-[#F5F7FA] w-full px-50 -mt-2'>
        {/* Search Bar */}
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#F5F7FA] px-2 sm:px-6 py-2 pb-0 max-w-7xl mx-auto">
            <div className="relative max-w-3xl mx-auto mt-4 sm:mt-6 md:mt-8 lg:mt-10">
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
        <div className="hidden lg:block w-full lg:w-80 xl:w-96 bg-white h-auto lg:h-full overflow-x-auto lg:overflow-y-auto border-b lg:border-b-0 lg:-pr-2">
          <QuestionSidebar
            currentTopic={topic}
            currentDoubt={doubt}
            currentQuestion={question}
          />
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-white lg:border-t-0 lg:border-l-2 mt-4 sm:mt-6 lg:mt-0 lg:ml-3 xl:ml-5 border-gray-200 pl-0 sm:pl-4 lg:pl-8 xl:pl-[60px] pr-3 sm:pr-4 lg:pr-0">
          <div className="pt-0 w-full max-w-none sm:max-w-[95%] md:max-w-[810px] mx-auto lg:mx-0">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-[28px] font-poppins font-medium text-gray-900 mb-3 sm:mb-4 md:mb-6 leading-tight">{questionData.question}</h1>
            <div className="prose prose-gray max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: processedAnswer }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionPage;