"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Search, ArrowLeft } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';

// Sample questions data with sidebar structure for all topics/doubts
const questionsData: { [key: string]: { [key: string]: any } } = {
  'account-opening': {
    'resident-individual': {
      title: 'Residential Individual',
      description: 'Account opening process for Indian residents',
      sidebarCategories: [
        {
          id: 'account-opening-process',
          title: 'Account opening process',
          questions: [
            {
              id: 'how-to-create-account',
              question: 'How do I create a new account with Sapphire Broking?',
              summary: 'Step-by-step guide to open a new trading account'
            },
            {
              id: 'required-documents',
              question: 'What documents are required for account opening?',
              summary: 'Complete list of mandatory documents needed'
            },
            {
              id: 'check-application-status',
              question: 'How can I check the status of my account application?',
              summary: 'Various ways to track your application progress'
            },
            {
              id: 'application-rejected',
              question: 'Why was my account application rejected or delayed?',
              summary: 'Common reasons for rejection and how to resolve them'
            }
          ]
        },
        {
          id: 'account-management',
          title: 'Account management',
          questions: [
            {
              id: 'update-personal-details',
              question: 'How do I update my personal details (email, mobile, address)?',
              summary: 'Process to modify your personal information'
            },
            {
              id: 'bank-account-update',
              question: 'Can I update my bank account or add a secondary account?',
              summary: 'Managing your linked bank accounts'
            },
            {
              id: 'reset-password',
              question: 'How do I reset my password or recover my login ID?',
              summary: 'Account recovery procedures and security'
            },
            {
              id: 'client-id-location',
              question: 'What is my client ID and where can I find it?',
              summary: 'Understanding and locating your unique client identifier'
            }
          ]
        },
        {
          id: 'security-issues',
          title: 'Security and Issues',
          questions: [
            {
              id: 'close-account',
              question: 'How do I close or deactivate my account?',
              summary: 'Account closure process and requirements'
            },
            {
              id: 'unauthorized-activity',
              question: 'What should I do if I suspect unauthorized activity on my account?',
              summary: 'Security measures and reporting procedures'
            }
          ]
        }
      ]
    },
    'minor': {
      title: 'Minor',
      description: 'Account opening for minors and guardianship',
      sidebarCategories: [
        {
          id: 'eligibility-requirements',
          title: 'Eligibility and Requirements',
          questions: [
            {
              id: 'minor-account-eligibility',
              question: 'Who is eligible to open a minor account?',
              summary: 'Age requirements and eligibility criteria for minor accounts'
            },
            {
              id: 'guardian-requirements',
              question: 'What are the guardian requirements for minor accounts?',
              summary: 'Guardian eligibility and documentation needed'
            },
            {
              id: 'minor-account-documents',
              question: 'What documents are required for minor account opening?',
              summary: 'Complete documentation list for minor accounts'
            }
          ]
        },
        {
          id: 'account-limitations',
          title: 'Account Limitations',
          questions: [
            {
              id: 'minor-account-limitations',
              question: 'What are the limitations of a minor trading account?',
              summary: 'Trading restrictions and limitations for minors'
            },
            {
              id: 'guardian-authorization',
              question: 'How does guardian authorization work for trading?',
              summary: 'Guardian approval process for trading activities'
            },
            {
              id: 'multiple-guardians',
              question: 'Can there be multiple guardians for one minor account?',
              summary: 'Managing multiple guardian arrangements'
            }
          ]
        },
        {
          id: 'account-management',
          title: 'Account Management',
          questions: [
            {
              id: 'minor-to-major-conversion',
              question: 'How to convert minor account to major when turning 18?',
              summary: 'Process to upgrade account when reaching majority'
            },
            {
              id: 'minor-account-closure',
              question: 'Can a minor account be closed before turning 18?',
              summary: 'Account closure procedures for minor accounts'
            }
          ]
        }
      ]
    }
  },
  'funds': {
    'add-money': {
      title: 'Add Money',
      description: 'Various ways to add funds to your account',
      sidebarCategories: [
        {
          id: 'payment-methods',
          title: 'Payment Methods',
          questions: [
            {
              id: 'available-payment-methods',
              question: 'What payment methods are available to add money?',
              summary: 'All available options for funding your account'
            },
            {
              id: 'instant-transfer',
              question: 'How to add money instantly to my account?',
              summary: 'Fastest ways to transfer funds immediately'
            },
            {
              id: 'bank-transfer-time',
              question: 'How long does bank transfer take to reflect?',
              summary: 'Timeline for different transfer methods'
            }
          ]
        },
        {
          id: 'limits-amounts',
          title: 'Limits and Amounts',
          questions: [
            {
              id: 'minimum-amount',
              question: 'What is the minimum amount I can add?',
              summary: 'Minimum deposit requirements and limits'
            },
            {
              id: 'maximum-amount',
              question: 'What is the maximum amount I can add per day?',
              summary: 'Daily deposit limits and restrictions'
            }
          ]
        },
        {
          id: 'troubleshooting',
          title: 'Troubleshooting',
          questions: [
            {
              id: 'failed-transaction',
              question: 'What to do if my money transfer fails?',
              summary: 'Troubleshooting failed payment transactions'
            },
            {
              id: 'pending-transaction',
              question: 'Why is my money transfer showing as pending?',
              summary: 'Understanding pending transaction statuses'
            }
          ]
        }
      ]
    },
    'withdraw-money': {
      title: 'Withdraw Money',
      description: 'How to withdraw funds from your account',
      sidebarCategories: [
        {
          id: 'withdrawal-process',
          title: 'Withdrawal Process',
          questions: [
            {
              id: 'how-to-withdraw',
              question: 'How do I withdraw money from my account?',
              summary: 'Step-by-step withdrawal process'
            },
            {
              id: 'withdrawal-time',
              question: 'How long does it take to process withdrawals?',
              summary: 'Timeline for withdrawal processing'
            }
          ]
        },
        {
          id: 'withdrawal-limits',
          title: 'Limits and Charges',
          questions: [
            {
              id: 'minimum-withdrawal',
              question: 'What is the minimum withdrawal amount?',
              summary: 'Minimum amount requirements for withdrawals'
            },
            {
              id: 'withdrawal-charges',
              question: 'Are there any charges for withdrawing money?',
              summary: 'Fee structure for withdrawal transactions'
            }
          ]
        }
      ]
    }
  },
  'trading': {
    'equity': {
      title: 'Equity Trading',
      description: 'Stock trading and equity investments',
      sidebarCategories: [
        {
          id: 'getting-started',
          title: 'Getting Started',
          questions: [
            {
              id: 'how-to-buy-stocks',
              question: 'How do I buy my first stock?',
              summary: 'Complete guide to placing your first equity order'
            },
            {
              id: 'stock-market-hours',
              question: 'What are the stock market trading hours?',
              summary: 'Market timings and trading sessions'
            }
          ]
        },
        {
          id: 'order-types',
          title: 'Order Types',
          questions: [
            {
              id: 'market-vs-limit-orders',
              question: 'What is the difference between market and limit orders?',
              summary: 'Understanding different order types and when to use them'
            },
            {
              id: 'stop-loss-orders',
              question: 'How do stop-loss orders work?',
              summary: 'Risk management through stop-loss orders'
            }
          ]
        }
      ]
    },
    'derivatives': {
      title: 'Derivatives',
      description: 'Futures and options trading',
      sidebarCategories: [
        {
          id: 'basics',
          title: 'Derivatives Basics',
          questions: [
            {
              id: 'what-are-derivatives',
              question: 'What are derivatives and how do they work?',
              summary: 'Introduction to futures and options trading'
            },
            {
              id: 'margin-requirements',
              question: 'What are margin requirements for derivatives?',
              summary: 'Understanding margin and leverage in derivatives'
            }
          ]
        }
      ]
    }
  },
  'your-sapphire-account': {
    'profile-management': {
      title: 'Profile Management',
      description: 'Manage your personal and trading profile',
      sidebarCategories: [
        {
          id: 'personal-details',
          title: 'Personal Details',
          questions: [
            {
              id: 'update-contact-info',
              question: 'How do I update my contact information?',
              summary: 'Changing email, phone, and address details'
            },
            {
              id: 'update-bank-details',
              question: 'How do I update my bank account details?',
              summary: 'Managing linked bank accounts'
            }
          ]
        },
        {
          id: 'security',
          title: 'Security Settings',
          questions: [
            {
              id: 'change-password',
              question: 'How do I change my password?',
              summary: 'Steps to update your account password'
            },
            {
              id: 'enable-2fa',
              question: 'How do I enable two-factor authentication?',
              summary: 'Setting up additional security for your account'
            }
          ]
        }
      ]
    }
  }
};

const DoubtPage: React.FC = () => {
  const params = useParams();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState<string>('');

  const topic = params.topic as string;
  const doubt = params.doubt as string;
  const doubtInfo = questionsData[topic]?.[doubt];

  if (!doubtInfo) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="w-full mx-auto px-6 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Doubt Not Found</h1>
            <p className="text-gray-600 mb-8">The doubt you're looking for doesn't exist.</p>
            <Link href="/" className="text-blue-600 hover:text-blue-800">
              Back to Help Center
            </Link>
          </div>
        </div>
      </div>
    );
  }

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
            <Link href={`/support/${topic}`} className="hover:text-blue-600 capitalize">{topic.replace('-', ' ')}</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">{doubtInfo.title}</span>
          </nav>
        </div>
      </div>

      <div className="w-full mx-auto px-6 py-8">
        <div className="flex gap-6">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0">
            <div className="bg-white border border-gray-200">
              <div className="p-4 border-b border-gray-200">
                <h2 className="text-sm font-semibold text-gray-900 mb-4">Account opening</h2>
              </div>
              
              {/* Categories List */}
              <div className="py-2">
                <div className="space-y-1">
                  <div className="px-3 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Categories
                  </div>
                  
                  {/* Category items */}
                  <Link href="#" className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    <input type="checkbox" className="w-4 h-4 mr-3 rounded border-gray-300" />
                    Residential Individual
                  </Link>
                  
                  <Link href="#" className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    <input type="checkbox" className="w-4 h-4 mr-3 rounded border-gray-300" />
                    Minor
                  </Link>
                  
                  <Link href="#" className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    <input type="checkbox" className="w-4 h-4 mr-3 rounded border-gray-300" />
                    Non Residential Indian
                  </Link>
                  
                  <Link href="#" className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    <input type="checkbox" className="w-4 h-4 mr-3 rounded border-gray-300" />
                    Company, HUF
                  </Link>
                  
                  <Link href="#" className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    <input type="checkbox" className="w-4 h-4 mr-3 rounded border-gray-300" />
                    Glossary
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white">
              {/* Header with search */}
              <div className="border-b border-gray-200 p-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">{doubtInfo.title}</h1>
                
                {/* Search */}
                <div className="relative max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search for anything..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  />
                </div>
              </div>

              {/* Questions List */}
              <div className="p-6">
                <div className="space-y-3">
                  {doubtInfo.sidebarCategories.map((category: any) =>
                    category.questions
                      .filter((question: any) => 
                        !searchQuery || 
                        question.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        question.summary.toLowerCase().includes(searchQuery.toLowerCase())
                      )
                      .map((question: any) => (
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
                  )}
                </div>

                {/* No results message */}
                {searchQuery && doubtInfo.sidebarCategories.every((category: any) => 
                  category.questions.filter((question: any) =>
                    question.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    question.summary.toLowerCase().includes(searchQuery.toLowerCase())
                  ).length === 0
                ) && (
                  <div className="text-center py-8">
                    <p className="text-gray-500 text-sm">No questions found for "{searchQuery}"</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoubtPage;
