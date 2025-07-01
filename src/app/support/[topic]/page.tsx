"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Search, ArrowLeft } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';

// Sample data structure - in a real app, this would come from an API or database
const topicData: { [key: string]: any } = {
  'account-opening': {
    title: 'Account Opening',
    description: 'Everything you need to know about opening an account with Sapphire Broking',
    doubts: [
      {
        id: 'resident-individual',
        title: 'Resident Individual',
        description: 'Account opening process for Indian residents',
        questionCount: 10
      },
      {
        id: 'minor',
        title: 'Minor',
        description: 'Account opening for minors and guardianship',
        questionCount: 8
      },
      {
        id: 'nri',
        title: 'Non-Residential Indian (NRI)',
        description: 'Special procedures for NRI account opening',
        questionCount: 12
      },
      {
        id: 'company-huf',
        title: 'Company, Partnership, HUF and LLP',
        description: 'Corporate and institutional account opening',
        questionCount: 15
      },
      {
        id: 'glossary',
        title: 'Glossary',
        description: 'Terms and definitions related to account opening',
        questionCount: 25
      }
    ]
  },
  'your-sapphire-account': {
    title: 'Your Sapphire Account',
    description: 'Manage and maintain your Sapphire trading account',
    doubts: [
      {
        id: 'profile-management',
        title: 'Profile Management',
        description: 'Update and manage your personal information',
        questionCount: 8
      },
      {
        id: 'account-modification',
        title: 'Account Modification',
        description: 'Modify account details and settings',
        questionCount: 6
      },
      {
        id: 'cmr-dp',
        title: 'Client Master Report (CMR) and Depository Participant (DP)',
        description: 'Understanding CMR and DP services',
        questionCount: 10
      },
      {
        id: 'nomination',
        title: 'Nomination',
        description: 'Add or modify nominee details',
        questionCount: 5
      },
      {
        id: 'securities-transfer',
        title: 'Transfer and Conversion of Securities',
        description: 'Transfer securities between accounts',
        questionCount: 7
      }
    ]
  },
  'funds': {
    title: 'Funds',
    description: 'Adding, withdrawing, and managing funds in your account',
    doubts: [
      {
        id: 'add-money',
        title: 'Add Money',
        description: 'Various ways to add funds to your account',
        questionCount: 12
      },
      {
        id: 'withdraw-money',
        title: 'Withdraw Money',
        description: 'How to withdraw funds from your account',
        questionCount: 9
      },
      {
        id: 'bank-accounts',
        title: 'Add Bank Accounts',
        description: 'Link and manage your bank accounts',
        questionCount: 8
      },
      {
        id: 'emandates',
        title: 'eMandates',
        description: 'Set up automatic payment instructions',
        questionCount: 6
      },
      {
        id: 'alerts-ledgers',
        title: 'Alerts and Ledgers',
        description: 'Fund-related notifications and statements',
        questionCount: 7
      }
    ]
  },
  'mutual-funds': {
    title: 'Mutual Funds',
    description: 'Invest in mutual funds through Sapphire Broking',
    doubts: [
      {
        id: 'mutual-fund-basics',
        title: 'Mutual Fund Basics',
        description: 'Understanding mutual fund investments',
        questionCount: 15
      },
      {
        id: 'nps',
        title: 'National Pension Scheme (NPS)',
        description: 'NPS investment and management',
        questionCount: 10
      },
      {
        id: 'coin-features',
        title: 'Features on Coin',
        description: 'Sapphire Coin platform features',
        questionCount: 8
      },
      {
        id: 'payments-orders',
        title: 'Payments and Orders',
        description: 'Managing MF payments and orders',
        questionCount: 12
      }
    ]
  },
  'reports': {
    title: 'Reports',
    description: 'Access and understand your trading reports',
    doubts: [
      {
        id: 'portfolio',
        title: 'Portfolio',
        description: 'View and analyze your portfolio',
        questionCount: 10
      },
      {
        id: 'corporate-actions',
        title: 'Corporate Actions',
        description: 'Understanding corporate action reports',
        questionCount: 8
      },
      {
        id: 'fund-statements',
        title: 'Fund Statements',
        description: 'Access your fund statements',
        questionCount: 6
      },
      {
        id: 'trading-reports',
        title: 'Trading Reports',
        description: 'Detailed trading activity reports',
        questionCount: 12
      }
    ]
  },
  'terminal': {
    title: 'Terminal',
    description: 'Using the Sapphire trading terminal and platform',
    doubts: [
      {
        id: 'ipo',
        title: 'IPO',
        description: 'Applying for IPOs through terminal',
        questionCount: 8
      },
      {
        id: 'trading-faqs',
        title: 'Trading FAQs',
        description: 'Common trading questions and answers',
        questionCount: 20
      },
      {
        id: 'margin-trading',
        title: 'Margin Trading Facilities',
        description: 'Understanding margin trading features',
        questionCount: 15
      },
      {
        id: 'charts-orders',
        title: 'Charts and Orders',
        description: 'Using charts and placing orders',
        questionCount: 18
      },
      {
        id: 'alerts-nudges',
        title: 'Alerts and Nudges',
        description: 'Setting up trading alerts',
        questionCount: 10
      }
    ]
  }
};

const TopicPage: React.FC = () => {
  const params = useParams();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  
  const topic = params.topic as string;
  const topicInfo = topicData[topic];

  if (!topicInfo) {
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

  const filteredDoubts = topicInfo.doubts.filter((doubt: any) =>
    doubt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doubt.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="w-full mx-auto px-6 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/" className="hover:text-blue-600">Support</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">{topicInfo.title}</span>
          </nav>
        </div>
      </div>

      <div className="w-full mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => router.back()}
            className="flex items-center text-blue-600 hover:text-blue-800 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </button>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{topicInfo.title}</h1>
          <p className="text-gray-600 text-lg">{topicInfo.description}</p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search within this topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

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
              <p className="text-gray-600 text-sm mb-4">{doubt.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">
                  {doubt.questionCount} questions
                </span>
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
  );
};

export default TopicPage;
