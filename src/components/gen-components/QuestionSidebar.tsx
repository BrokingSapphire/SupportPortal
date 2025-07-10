"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getDoubtsByTopic, getQuestionsByDoubt, getTopicTitle } from '@/constants';

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
    <div className="w-full lg:w-80 xl:w-96 bg-white h-auto lg:h-full overflow-x-auto lg:overflow-y-auto border-b lg:border-b-0 lg:pr-4">
      {/* Header */}
      <div className="pr-4 pt-4 lg:pt-0">
        <h2 className="text-sm sm:text-base md:text-lg font-semibold text-[#9d9f9f]">{topicTitle}</h2>
      </div>

      {/* Navigation */}
      <div className="p-2 sm:p-4 pl-2 pt-0">
        {doubtSections.map((doubtSection) => (
          <div
            key={doubtSection.id}
            className={`rounded-lg pl-0 ${
              currentDoubt === doubtSection.id
                ? 'bg-[#F5F7FA] mb-2'
                : 'bg-white' + ' mb-1'
            }`}
          >
            {/* Doubt Section Header */}
            <button
              onClick={() => toggleDoubt(doubtSection.id)}
              className={`flex items-center justify-between w-full pt-3 sm:pt-4 md:pt-6 text-left rounded-md transition-colors ${
                currentDoubt === doubtSection.id
                  ? 'text-gray-900'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center ml-1 sm:ml-2 md:ml-[8px]">
                {expandedDoubt === doubtSection.id ? (
                  <Image src="/questions list/rightarrow.svg" alt="Collapse" width={24} height={24} className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 sm:mr-3 md:mr-[14px] rounded-md text-gray-500 rotate-90 transition-transform duration-200 flex-shrink-0" />
                ) : (
                  <Image src="/questions list/rightarrow.svg" alt="Expand" width={24} height={24} className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 sm:mr-3 md:mr-[14px] rounded-md text-gray-500 transition-transform duration-200 flex-shrink-0" />
                )}
                <span className="font-medium text-sm sm:text-base">{doubtSection.title}</span>
              </div>
            </button>

            {/* Questions List */}
            {expandedDoubt === doubtSection.id && (
              <div className="ml-2 sm:ml-3 md:ml-5 pb-2">
                {doubtSection.questions.map((question, idx) => {
                  const isActive = currentQuestion === question.id;
                  return (
                    <Link
                      key={question.id}
                      href={`/support/${currentTopic}/${doubtSection.id}/${question.id}`}
                      className={`block p-2 py-1 sm:py-[5px] text-xs sm:text-sm transition-colors ${
                        isActive
                          ? ' border-l-2 border-black'
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
  );
};

export default QuestionSidebar;
