"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { getDoubtsByTopic, getQuestionsByDoubt, getTopicTitle, getDoubtTitle } from '@/constants';

interface SidebarProps {
  currentTopic: string;
  currentDoubt: string;
  currentQuestion: string;
}

interface DoubtSection {
  id: string;
  title: string;
  questions: Array<{
    id: string;
    question: string;
  }>;
}

const QuestionSidebar: React.FC<SidebarProps> = ({ currentTopic, currentDoubt, currentQuestion }) => {
  const [expandedDoubt, setExpandedDoubt] = useState<string>(currentDoubt);

  const doubts = getDoubtsByTopic(currentTopic);
  const topicTitle = getTopicTitle(currentTopic);

  const doubtSections: DoubtSection[] = doubts.map(doubt => ({
    id: doubt.id,
    title: doubt.title,
    questions: getQuestionsByDoubt(currentTopic, doubt.id).map(q => ({
      id: q.id,
      question: q.question
    }))
  }));

  const toggleDoubt = (doubtId: string) => {
    setExpandedDoubt(expandedDoubt === doubtId ? '' : doubtId);
  };

  return (
    <div className="w-80 bg-white h-full overflow-y-auto">
      {/* Header */}
      <div className="p-4 pl-0">
        <h2 className="text-lg font-semibold text-gray-900">{topicTitle}</h2>
      </div>

      {/* Navigation */}
      <div className="p-4 pl-0">
        {doubtSections.map((doubtSection) => (
          <div 
            key={doubtSection.id} 
            className={`mb-4 rounded-lg pl-0 ${
              currentDoubt === doubtSection.id ? 'bg-[#F5F7FA]' : ''
            }`}
          >
            {/* Doubt Section Header */}
            <button
              onClick={() => toggleDoubt(doubtSection.id)}
              className={`flex items-center justify-between w-full text-left rounded-md transition-colors ${
                currentDoubt === doubtSection.id
                  ? 'bg-[#F5F7FA] text-gray-900'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center">
                {expandedDoubt === doubtSection.id ? (
                  <img src="/questions list/rightarrow.svg" alt="Collapse" className="w-7 h-7 mr-0 rounded-md text-gray-500 border border-gray-300 rotate-90 transition-transform duration-200" />
                ) : (
                  <img src="/questions list/rightarrow.svg" alt="Expand" className="w-7 h-7 mr-0 border border-gray-300 rounded-md text-gray-500 transition-transform duration-200" />
                )}
                <span className="font-medium">{doubtSection.title}</span>
              </div>
            </button>

            {/* Questions List */}
            {expandedDoubt === doubtSection.id && (
              <div className="ml-6 pb-2">
                {doubtSection.questions.map((question) => {
                  const isActive = currentQuestion === question.id;
                  return (
                    <Link
                      key={question.id}
                      href={`/support/${currentTopic}/${doubtSection.id}/${question.id}`}
                      className={`block px-2 text-[12px] font-medium font-poppins transition-colors ${
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
  );
};

export default QuestionSidebar;
