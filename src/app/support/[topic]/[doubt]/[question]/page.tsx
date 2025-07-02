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

      <div className="flex w-full mt-10 px-40">
        {/* Sidebar */}
        <QuestionSidebar
          currentTopic={topic}
          currentDoubt={doubt}
          currentQuestion={question}
        />

        {/* Main Content */}
        <div className="flex-1 bg-white border-l-2 border-gray-200 mt-3">
          <div className="p-8 pt-0">
            <h1 className="text-xl font-semibold text-gray-900 mb-6">{questionData.question}</h1>

            <div
              className="prose prose-gray max-w-none text-gray-700"
              dangerouslySetInnerHTML={{ __html: processedAnswer }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionPage;
