"use client";

import React, { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";

const DUMMY_MESSAGES = [
  {
    id: 1,
    sender: "user",
    text: "Why was my account application rejected or delayed?",
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

export default function TicketChat() {
  const [messages, setMessages] = useState(DUMMY_MESSAGES);
  const [input, setInput] = useState("");
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatRef.current?.scrollTo(0, chatRef.current.scrollHeight);
  }, [messages]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages([
      ...messages,
      {
        id: messages.length + 1,
        sender: "user",
        text: input,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
    setInput("");
  };

  return (
    <div className="flex flex-col h-screen bg-[#F5F7FA] items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg border border-gray-200 flex flex-col" style={{ height: 600 }}>
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#6B7280] rounded-t-xl">
          <div>
            <div className="text-white font-medium text-base leading-tight">Why was my account application rejected or delayed?</div>
            <div className="text-xs text-gray-200 mt-1">Ticket Id  #20250637727882</div>
          </div>
          <button className="text-white hover:text-gray-300">
            <X size={22} />
          </button>
        </div>
        {/* Chat Area */}
        <div ref={chatRef} className="flex-1 overflow-y-auto px-4 py-4 bg-white">
          {messages.map((msg, idx) => (
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
        <form onSubmit={handleSend} className="flex items-center border-t border-gray-200 px-4 py-3 bg-white rounded-b-xl">
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
