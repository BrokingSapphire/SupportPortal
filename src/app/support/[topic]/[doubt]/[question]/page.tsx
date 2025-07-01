"use client";
import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { useParams } from 'next/navigation';

interface RelatedQuestion {
  id: string;
  question: string;
}

interface QuestionData {
  question: string;
  answer: string;
  lastUpdated: string;
  helpful?: number;
  notHelpful?: number;
  relatedQuestions?: RelatedQuestion[];
}

interface AnswerData {
  [topic: string]: {
    [doubt: string]: {
      [question: string]: QuestionData;
    };
  };
}

// Sample answers data - in a real app, this would come from an API
const answersData: AnswerData = {
  'account-opening': {
    'resident-individual': {
      'how-to-create-account': {
        question: 'How do I create a new account with Sapphire Broking?',
        answer: `<div className="space-y-6">
            <p>You can open a Sapphire Broking demat and trading account online for free if you are a resident Indian with your mobile number linked to your Aadhaar.</p>
            
            <div className="mt-6">
              <h3 className="font-medium text-gray-900 mb-4">Required documents</h3>
              <ul className="list-inside space-y-2 text-gray-700">
                <li>• PAN card</li>
                <li>• Aadhaar number (linked to your mobile)</li>
                <li>• Bank account details (personalised cancelled cheque OR bank statement/passbook with your name, account number, IFSC, MICR and bank seal/logo)</li>
                <li>• Income proof (only required for F&O access)</li>
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="font-medium text-gray-900 mb-4">Steps to open your account</h3>
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li>Visit SignUp.sapphirebroking.com or install the Sapphire Trade app from the App Store or Play Store.</li>
                <li>Enter your mobile number, verify it via OTP.</li>
                <li>Enter and verify your email ID.</li>
                <li>Enter your PAN number and date of birth.</li>
                <li>Choose your trading segments (Equity, F&O, Currency, etc.), accept terms, and proceed.</li>
                <li>Enter your Aadhaar number, validate via OTP and Digilocker PIN.</li>
                <li>Fill in your personal details (name, address, occupation, etc.).</li>
                <li>Link your bank account via UPI or manually.</li>
                <li>Complete In-Person Verification (IPV) by capturing a selfie video.</li>
                <li>Draw or upload your signature.</li>
                <li>Upload additional documents, if required:</li>
                <ul className="list-inside ml-6 mt-2 space-y-2">
                  <li>• Bank proof (if bank added manually)</li>
                  <li>• Income proof (for F&O)</li>
                </ul>
                <li>Optional: Add a nominee or skip and add later.</li>
                <li>Digitally sign your application using Aadhaar eSign.</li>
              </ol>
            </div>
          </div>`,
        lastUpdated: '2025-07-01'
      }
    }
  },
  'funds': {
    'add-money': {
      'payment-methods': {
        question: 'What payment methods are available to add money?',
        answer: `
          <div className="space-y-6">
            <p>Sapphire Broking offers multiple convenient payment methods to add funds to your trading account. Choose the option that works best for you:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                  Instant Methods
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>UPI:</strong> Google Pay, PhonePe, Paytm, etc.</li>
                  <li>• <strong>Net Banking:</strong> All major banks supported</li>
                  <li>• <strong>Debit Card:</strong> Visa, Mastercard, RuPay</li>
                  <li>• <strong>IMPS:</strong> Immediate Payment Service</li>
                </ul>
                <p className="text-sm text-green-600 mt-2">✓ Funds reflect instantly</p>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                  Traditional Methods
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>NEFT:</strong> National Electronic Funds Transfer</li>
                  <li>• <strong>RTGS:</strong> Real Time Gross Settlement</li>
                  <li>• <strong>Cheque Deposit:</strong> At branch locations</li>
                  <li>• <strong>Bank Transfer:</strong> Direct bank to bank</li>
                </ul>
                <p className="text-sm text-blue-600 mt-2">⏱ May take 2-24 hours</p>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-3">Payment Limits:</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <strong>UPI:</strong><br>
                  Min: ₹1 | Max: ₹1,00,000/day
                </div>
                <div>
                  <strong>Net Banking:</strong><br>
                  Min: ₹1 | Max: ₹10,00,000/day
                </div>
                <div>
                  <strong>NEFT/RTGS:</strong><br>
                  Min: ₹1 | No upper limit
                </div>
              </div>
            </div>
          </div>
        `,
        lastUpdated: '2024-12-12',
        helpful: 38,
        notHelpful: 2,
        relatedQuestions: [
          {
            id: 'instant-transfer',
            question: 'How to add money instantly to my account?'
          }
        ]
      }
    }
  }
};

const QuestionPage: React.FC = () => {
  const params = useParams();
  
  const topic = params.topic as string;
  const doubt = params.doubt as string;
  const question = params.question as string;
  const answerInfo = answersData[topic]?.[doubt]?.[question];

  if (!answerInfo) {
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
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="w-full mx-auto px-6 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/" className="hover:text-blue-600">Support</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href={`/support/${topic}`} className="hover:text-blue-600">Account Opening</Link>
          </nav>
        </div>
      </div>

      <div className="w-full mx-auto">
        {/* Answer Content */}
        <div className="bg-white p-8">
          <div>
            <h1 className="text-xl font-semibold text-gray-900 mb-6">{answerInfo.question}</h1>
            <div
              className="prose prose-gray max-w-none text-gray-700"
              dangerouslySetInnerHTML={{ __html: answerInfo.answer }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionPage;
