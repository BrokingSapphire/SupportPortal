"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';
import { topics, getSubcategoriesByTopic } from '@/constants';

interface HelpLink {
  text: string;
  color: string;
  href?: string;
}

interface HelpCategory {
  icon: React.ReactNode;
  title: string;
  links: HelpLink[];
}

const HelpCenterHomepage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('Most Asked');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const router = useRouter();

  const tabs: string[] = [
    'Most Asked',
    'Your Sapphire account',
    'Funds',
    'Services',
    'Mutual Funds',
    'US stocks'
  ];

  // Dynamic help categories based on constants
  const helpCategories: HelpCategory[] = topics.map((topic) => {
    const subcategories = getSubcategoriesByTopic(topic.id);
    const links: HelpLink[] = subcategories.map((subcategory) => ({
      text: subcategory.title,
      color: 'text-blue-500',
      href: `/support/${topic.id}/${subcategory.id}`
    }));

    // Map topic IDs to icons
    const getIcon = (topicId: string) => {
      const iconMap: { [key: string]: string } = {
        'account-opening-kyc': '/home/account opening.png',
        'fund-transfer-withdrawals': '/home/funds.png',
        'trading-orders': '/home/terminal.png',
        'reports-statements': '/home/reports.png',
        'ipos-buybacks-corporate-actions': '/home/terminal.png',
        'technical-platform-issues': '/home/terminal.png',
        'api-developer-access': '/home/terminal.png',
        'regulatory-disclosures': '/home/account.png',
        'sub-broker-franchise-help': '/home/account.png',
        'account-reactivation-closure': '/home/account.png',
        'segment-specific-help': '/home/terminal.png',
        'nri-international-client-help': '/home/account.png',
        'new-user-guide-getting-started': '/home/account.png',
        'pledge-margin-collateral': '/home/terminal.png'
      };

      const iconPath = iconMap[topicId] || '/home/account.svg';
      return (
        <img 
          src={iconPath} 
          alt={topic.title} 
          className=""
        />
      );
    };

    return {
      icon: getIcon(topic.id),
      title: topic.title,
      links
    };
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    setSearchQuery(''); 
  };

  const getFilteredCategories = () => {
    let filtered = helpCategories;

    // Filter by active tab
    if (activeTab !== 'Most Asked') {
      const tabCategoryMapping: { [key: string]: string[] } = {
        'Your Sapphire account': ['Account Opening & KYC', 'Account Reactivation/Closure', 'Regulatory Disclosures', 'Sub-Broker / Franchise Help', 'NRI & International Client Help', 'New User Guide / Getting Started'],
        'Funds': ['Fund Transfer & Withdrawals'],
        'Services': ['Trading & Orders', 'Reports & Statements', 'Technical & Platform Issues', 'API & Developer Access', 'Segment-Specific Help (NSE, BSE, MCX, NCDEX)', 'Pledge, Margin & Collateral'],
        'Mutual Funds': ['Reports & Statements'],
        'US stocks': ['Trading & Orders', 'Technical & Platform Issues']
      };

      const allowedCategories = tabCategoryMapping[activeTab] || [];
      filtered = helpCategories.filter(category => 
        allowedCategories.includes(category.title)
      );
    }

    // Filter by search query
    if (searchQuery.trim()) {
      filtered = filtered.filter(category => {
        const titleMatch = category.title.toLowerCase().includes(searchQuery.toLowerCase());
        const linkMatch = category.links.some(link => 
          link.text.toLowerCase().includes(searchQuery.toLowerCase())
        );
        return titleMatch || linkMatch;
      }).map(category => ({
        ...category,
        links: category.links.filter(link =>
          link.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
          category.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      }));
    }

    return filtered;
  };

  return (
    <div className="min-h-screen bg-white pt-20 mx-auto">
      {/* Header Section */}
      <div className="bg-[#F5F7FA] -mt-2">
        <div className="max-w-7xl mx-auto pr-6 py-12">
          <div className="flex items-center justify-between">
            <div className="flex-1 max-w-4xl">
              <p className="text-[42px] font-medium font-lexend text-gray-900 mb-[6px]">How can we help?</p>
              <p className="text-gray-500 mb-8">Find instant answers by searching our help center or browsing topics.</p>
              
              {/* Search Bar and My Tickets Button Row */}
              <div className="flex items-center mr-2 w-full">
                <form onSubmit={handleSearch} className="relative flex-shrink flex-grow">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#064D51] w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Eg: how do i activate F&O, why is my order getting rejected ..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-[720px] pl-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-400"
                  />
                </form>
                <button
                  className="flex items-center space-x-2 py-3 text-blue-600 transition-colors whitespace-nowrap flex-shrink-0"
                  onClick={() => router.push("/support/mytickets")}
                >
                  <span className="font-medium font-poppins text-[20px] text-[#064D51]">My Tickets</span>
                  <img
                    src="/home/ticket.svg"
                    alt="Ticket"
                    className="w-[30px] h-[30px] object-contain"
                  />
                </button>
              </div>
            </div>
            
            {/* Help Center Illustration */}
            <div className="ml-8 flex-shrink-0">
              <img
                src="/home/home1.svg"
                alt="Help Center Illustration"
                className="w-[290px] h-[212px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-t border-gray-200 max-w-7xl mx-auto">
        <div className="max-w-7xl mx-auto border-b-2 border-gray-200">
          <div className="flex items-center space-x-8 py-4">
            <h3 className="text-gray-600 font-medium">Browse for help for...</h3>
          </div>
          <div className="flex space-x-8 -mb-px overflow-x-auto bg-white border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`py-3 px-1 border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${
                  activeTab === tab
                    ? 'border-[#064D51] text-[#064D51]'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-b-gray-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Help Categories Grid */}
      <div className="mx-auto max-w-7xl py-8 bg-white">
        {searchQuery && (
          <div className="mb-6">
            <p className="text-gray-600">
              {getFilteredCategories().length > 0 
                ? `Found ${getFilteredCategories().reduce((acc, cat) => acc + cat.links.length, 0)} results for "${searchQuery}"`
                : `No results found for "${searchQuery}"`
              }
            </p>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[60px] bg-white max-w-7xl">
          {getFilteredCategories().map((category, index) => (
            <div key={index} className="bg-[rgba(255, 255, 255, 0.1)] backdrop-blur-md rounded-lg border border-gray-300 py-[20px] px-[24px] hover:shadow-lg transition-shadow relative">
              {/* Featured Badge */}
              {index === 0 && (
                <div className="absolute top-5 -right-[14px]">
                  <span className="inline-block bg-[#f7fcfc] border-[1.5px] border-[#0a8080] font-poppins text-[14px] font-regular px-4 py-[6px] rounded-l-[4px] shadow-sm" style={{lineHeight: '1.2'}}>Featured</span>
                </div>
              )}
              {/* Category Header */}
              <div className="flex items-center justify-center w-10 bg-red-100 rounded-lg">
                {category.icon}
              </div>
              <div className="flex-1 min-w-0 my-[18px]">
                <h3 className="font-semibold text-gray-900 text-base">{category.title}</h3>
              </div>

              {/* Category Links */}
              <div className="space-y-[12px]">
                {category.links.map((link, linkIndex) => (
                  <button
                    key={linkIndex}
                    onClick={() => {
                      if (link.href) {
                        router.push(link.href);
                      }
                    }}
                    className="block text-left w-full text-sm text-[#2f7fff] hover:underline transition-colors"
                  >
                    {link.text}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
        {getFilteredCategories().length === 0 && searchQuery && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No results found for "{searchQuery}"</p>
            <p className="text-gray-400 text-sm mt-2">Try searching with different keywords or browse by category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HelpCenterHomepage;