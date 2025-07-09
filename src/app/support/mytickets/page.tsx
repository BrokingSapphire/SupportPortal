"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, ChevronRight, X } from "lucide-react";

const TICKETS = [
    {
        number: "#20250637727882",
        updated: "28 June 2025, 02:56 pm",
        subject: "Why was my account application rejected or delayed?",
        status: "Closed",
    },
    {
        number: "#20250637727882",
        updated: "02 July 2025, 01:38 pm",
        subject: "What should I do if I suspect unauthorized activity on my account?",
        status: "Active",
    },
    {
        number: "#20250637727882",
        updated: "05 July 2025, 10:26 am",
        subject: "How do I update my personal details",
        status: "Resolved",
    },
];

const STATUS_STYLES: Record<string, string> = {
    Closed: "bg-red-100 text-red-500 border border-red-200",
    Active: "bg-green-100 text-green-600 border border-green-200",
    Resolved: "bg-purple-100 text-purple-600 border border-purple-200",
};

const TABS = ["All", "Active", "Closed", "Resolved"];

function ChatbotModal({ ticket, onClose }: { ticket: any, onClose: () => void }) {
  // Dummy messages for demo
  const messages = [
    {
      id: 1,
      sender: "user",
      text: ticket.subject,
      time: "Jun 15, 02:53 pm",
    },
    {
      id: 2,
      sender: "support",
      text: "Hi! It may be delayed due to review or missing info. Can you share your email so I can check?",
      time: "Jun 15, 02:53 pm",
    },
    {
      id: 3,
      sender: "support",
      text: "Hi! It may be delayed due to review or missing info. Can you share your email so I can check?",
      time: "Jun 15, 02:56 pm",
    },
  ];
  const [input, setInput] = useState("");
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg border border-gray-200 flex flex-col" style={{ height: 600 }}>
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#6B7280] rounded-t-xl">
          <div>
            <div className="text-white font-medium text-base leading-tight">{ticket.subject}</div>
            <div className="text-xs text-gray-200 mt-1">Ticket Id  {ticket.number}</div>
          </div>
          <button className="text-white hover:text-gray-300" onClick={onClose}>
            <X size={22} />
          </button>
        </div>
        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto px-4 py-4 bg-white">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex mb-4 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
              {msg.sender === "support" && (
                <div className="flex-shrink-0 mr-2">
                  <img src="/avatar-support.png" alt="Support" className="w-7 h-7 rounded-full bg-gray-200" />
                </div>
              )}
              <div className={`max-w-[70%] rounded-lg px-4 py-2 text-sm ${msg.sender === "user" ? "bg-[#0a8080] text-white" : "bg-gray-100 text-gray-800"}`}>
                {msg.text}
                <div className="text-[11px] text-right mt-1 text-gray-400">{msg.time}</div>
              </div>
              {msg.sender === "user" && (
                <div className="flex-shrink-0 ml-2">
                  <img src="/avatar-user.png" alt="You" className="w-7 h-7 rounded-full bg-gray-200" />
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Input */}
        <form className="flex items-center border-t border-gray-200 px-4 py-3 bg-white rounded-b-xl">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Write your message"
            className="flex-1 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0a8080] text-sm bg-[#F5F7FA]"
          />
          <button type="submit" className="ml-2 px-4 py-2 bg-[#0a8080] text-white rounded-lg font-medium text-sm hover:bg-[#086060] transition-colors">Send</button>
        </form>
      </div>
    </div>
  );
}

export default function MyTicketsPage() {
    const [activeTab, setActiveTab] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [chatTicket, setChatTicket] = useState<any>(null);

    const filteredTickets =
        activeTab === "All"
            ? TICKETS
            : TICKETS.filter((t) => t.status === activeTab);

    return (
        <div className="min-h-screen bg-white pt-16 sm:pt-20 mx-auto mb-6 sm:mb-10">
            <div className="bg-[#F5F7FA] px-3 sm:px-4 md:px-8 lg:px-12 xl:px-20 2xl:px-32 -mt-2">
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
                                disabled
                            />
                        </div>
                    </div>
                </div>
                {/* Breadcrumb */}
                <div className="bg-[#F5F7FA] px-0 sm:pr-4 mt-4 sm:mt-6 md:mt-8 lg:mt-10">
                    <div className="max-w-7xl mx-auto pl-0 py-2 sm:py-4">
                        <div className="max-w-7xl pl-0">
                            <nav className="flex flex-wrap items-center space-x-1 sm:space-x-2 text-xs sm:text-sm md:text-base align-left font-regular font-poppins text-gray-600">
                                <Link
                                    href="/"
                                    className="hover:text-[#064D51] truncate"
                                >
                                    Home
                                </Link>
                                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                                <Link
                                    href="/"
                                    className="hover:text-[#064D51] truncate"
                                >
                                    Support
                                </Link>
                                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                                <span className="text-[#064D51] font-medium truncate">
                                    My Tickets
                                </span>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-8 pb-0 max-w-7xl mx-auto mt-6">
                {/* Title */}
                <h2 className="text-xl font-semibold mb-2 text-gray-900 font-poppins">
                    My Tickets
                </h2>
                {/* Tabs */}
                <div className="flex border-b border-gray-200 gap-8 mb-0 ">
                    {TABS.map((tab) => (
                        <button
                            key={tab}
                            className={`pb-2 mx-3 font-medium transition-colors text-base font-poppins ${activeTab === tab
                                    ? "border-b-2 min-w-[40px] border-[#0a8080] text-[#0a8080]"
                                    : "text-gray-500 hover:text-[#0a8080]"
                                }`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* Card */}
            <div className="max-w-7xl mx-auto mt-6">
                <div className="bg-white border border-gray-200">
                    {/* Table */}
                    <div className="overflow-x-auto pb-8 pt-2">
                        <table className="min-w-full text-sm border-separate border-spacing-0 font-poppins">
                            <thead className="bg-white">
                                <tr>
                                    <th className="px-6 py-3 text-left font-semibold text-gray-700 border-b border-gray-200">
                                        Number
                                    </th>
                                    <th className="px-6 py-3 text-left font-semibold text-gray-700 border-b border-gray-200">
                                        Updated
                                    </th>
                                    <th className="px-6 py-3 text-left font-semibold text-gray-700 border-b border-gray-200">
                                        Subject
                                    </th>
                                    <th className="px-6 py-3 text-left font-semibold text-gray-700 border-b border-gray-200">
                                        Status
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredTickets.map((ticket, idx) => (
                                    <tr
                                        key={idx}
                                        className={
                                            idx % 2 === 1 ? "bg-[#F5F7FA]" : "bg-white"
                                        }
                                    >
                                        <td className="px-6 py-4 whitespace-nowrap text-gray-800 border-b border-gray-200">
                                            {ticket.number}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-gray-800 border-b border-gray-200">
                                            {ticket.updated}
                                        </td>
                                        <td
                                            className="px-6 py-4 text-[#0a8080] border-b border-gray-200 cursor-pointer hover:underline"
                                            onClick={() => setChatTicket(ticket)}
                                        >
                                            {ticket.subject}
                                        </td>
                                        <td className="px-6 py-4 border-b border-gray-200">
                                            <span
                                                className={`px-3 py-1 rounded text-xs font-semibold ${STATUS_STYLES[ticket.status]}`}
                                            >
                                                {ticket.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                                {filteredTickets.length === 0 && (
                                    <tr>
                                        <td colSpan={4} className="px-6 py-8 text-center text-gray-400">
                                            No tickets found.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {chatTicket && <ChatbotModal ticket={chatTicket} onClose={() => setChatTicket(null)} />}
        </div>
    );
}
