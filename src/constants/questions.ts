export interface RelatedQuestion {
  id: string;
  question: string;
}

export interface Question {
  id: string;
  question: string;
  answer: string;
  lastUpdated: string;
  helpful?: number;
  notHelpful?: number;
  relatedQuestions?: RelatedQuestion[];
}

export interface TopicQuestions {
  [topicId: string]: {
    [doubtId: string]: {
      [questionId: string]: Question;
    };
  };
}

export const questions: TopicQuestions = {
  'account-opening': {
    'resident-individual': {
      'how-to-create-account': {
        id: 'how-to-create-account',
        question: 'How do I create a new account with Sapphire Broking?',
        answer: `<p>You can open a Sapphire Broking demat and trading account online for free if you are a resident Indian with your mobile number linked to your Aadhaar.</p>
            
            <h3>Required documents</h3>
            <ul>
              <li>PAN card</li>
              <li>Aadhaar number (linked to your mobile)</li>
              <li>Bank account details (personalised cancelled cheque OR bank statement/passbook with your name, account number, IFSC, MICR and bank seal/logo)</li>
              <li>Income proof (only required for F&O access)</li>
            </ul>

            <h3>Steps to open your account</h3>
            <ol>
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
              <li>Upload additional documents, if required:
                <ul>
                  <li>Bank proof (if bank added manually)</li>
                  <li>Income proof (for F&O)</li>
                </ul>
              </li>
              <li>Optional: Add a nominee or skip and add later.</li>
              <li>Digitally sign your application using Aadhaar eSign.</li>
            </ol>`,
        lastUpdated: '2025-07-01'
      },
      'documents-required': {
        id: 'documents-required',
        question: 'What documents are required for account opening?',
        answer: `<p>To open a Sapphire Broking account, you need the following documents:</p>
            
            <h3>Mandatory Documents</h3>
            <ul>
              <li><strong>PAN Card:</strong> Valid PAN card copy</li>
              <li><strong>Aadhaar:</strong> Aadhaar number linked to your mobile number</li>
              <li><strong>Bank Proof:</strong> Cancelled cheque or bank statement</li>
            </ul>

            <h3>Additional Documents (if required)</h3>
            <ul>
              <li><strong>Income Proof:</strong> Required for F&O trading access</li>
              <li><strong>Address Proof:</strong> If Aadhaar address is different</li>
            </ul>`,
        lastUpdated: '2025-07-01'
      },
      'check-application-status': {
        id: 'check-application-status',
        question: 'How can I check the status of my account application?',
        answer: `<p>You can track your account opening application status through multiple channels:</p>
            
            <h3>Online Tracking</h3>
            <ul>
              <li>Visit the Sapphire Broking website</li>
              <li>Go to "Track Application" section</li>
              <li>Enter your application reference number</li>
              <li>View real-time status updates</li>
            </ul>

            <h3>Mobile App</h3>
            <ul>
              <li>Download the Sapphire Trade app</li>
              <li>Use the "Application Status" feature</li>
              <li>Get push notifications for status updates</li>
            </ul>

            <h3>Contact Support</h3>
            <ul>
              <li>Call customer care: 1800-XXX-XXXX</li>
              <li>Email: support@sapphirebroking.com</li>
              <li>Live chat on website</li>
            </ul>`,
        lastUpdated: '2025-07-01'
      },
      'account-rejected-delayed': {
        id: 'account-rejected-delayed',
        question: 'Why was my account application rejected or delayed?',
        answer: `<p>Account applications may be rejected or delayed due to various reasons:</p>
            
            <h3>Common Rejection Reasons</h3>
            <ul>
              <li><strong>Incomplete Documentation:</strong> Missing or unclear documents</li>
              <li><strong>Incorrect Information:</strong> Mismatched details across documents</li>
              <li><strong>Poor Image Quality:</strong> Blurry or illegible document scans</li>
              <li><strong>Address Mismatch:</strong> Different addresses in PAN and Aadhaar</li>
              <li><strong>Age Restrictions:</strong> Below 18 years of age</li>
            </ul>

            <h3>Delay Reasons</h3>
            <ul>
              <li>High application volumes</li>
              <li>Additional verification required</li>
              <li>Technical processing issues</li>
              <li>Regulatory compliance checks</li>
            </ul>

            <h3>Next Steps</h3>
            <p>Contact our support team with your application number for specific reasons and guidance on resubmission.</p>`,
        lastUpdated: '2025-07-01'
      },
      'update-personal-details': {
        id: 'update-personal-details',
        question: 'How do I update my personal details (email, mobile, address)?',
        answer: `<p>You can update your personal details through various methods:</p>
            
            <h3>Online Update</h3>
            <ul>
              <li>Login to your Sapphire account</li>
              <li>Go to "Profile" or "Account Settings"</li>
              <li>Select the details you want to update</li>
              <li>Submit required documents for verification</li>
            </ul>

            <h3>Required Documents</h3>
            <ul>
              <li><strong>Mobile Number:</strong> OTP verification</li>
              <li><strong>Email Address:</strong> Email verification link</li>
              <li><strong>Address:</strong> Latest address proof document</li>
              <li><strong>Bank Details:</strong> Bank statement or cancelled cheque</li>
            </ul>

            <h3>Processing Time</h3>
            <p>Most updates are processed within 2-3 business days after document verification.</p>`,
        lastUpdated: '2025-07-01'
      },
      'update-bank-account': {
        id: 'update-bank-account',
        question: 'Can I update my bank account or add a secondary account?',
        answer: `<p>Yes, you can update your primary bank account or add secondary accounts:</p>
            
            <h3>Primary Bank Account Update</h3>
            <ul>
              <li>Submit a written request with signature</li>
              <li>Provide new bank account proof</li>
              <li>Complete verification process</li>
              <li>Processing takes 5-7 business days</li>
            </ul>

            <h3>Adding Secondary Accounts</h3>
            <ul>
              <li>Maximum 3 bank accounts allowed</li>
              <li>All accounts must be in your name</li>
              <li>Submit bank statements for each account</li>
              <li>Complete additional KYC if required</li>
            </ul>

            <h3>Required Documents</h3>
            <ul>
              <li>Cancelled cheque of new account</li>
              <li>Bank statement (last 3 months)</li>
              <li>Signed account update form</li>
            </ul>`,
        lastUpdated: '2025-07-01'
      },
      'reset-password': {
        id: 'reset-password',
        question: 'How do I reset my password or recover my login ID?',
        answer: `<p>Follow these steps to reset your password or recover login credentials:</p>
            
            <h3>Password Reset</h3>
            <ol>
              <li>Go to the login page</li>
              <li>Click "Forgot Password"</li>
              <li>Enter your User ID or registered mobile number</li>
              <li>Follow the OTP verification process</li>
              <li>Create a new strong password</li>
            </ol>

            <h3>Login ID Recovery</h3>
            <ul>
              <li>Contact customer support with your registered mobile number</li>
              <li>Provide PAN number for verification</li>
              <li>Answer security questions</li>
              <li>Receive login ID via SMS/email</li>
            </ul>

            <h3>Security Tips</h3>
            <ul>
              <li>Use a combination of letters, numbers, and symbols</li>
              <li>Avoid using personal information</li>
              <li>Change password regularly</li>
              <li>Don't share credentials with anyone</li>
            </ul>`,
        lastUpdated: '2025-07-01'
      },
      'client-id-location': {
        id: 'client-id-location',
        question: 'What is my client ID and where can I find it?',
        answer: `<p>Your client ID is a unique identifier for your trading account:</p>
            
            <h3>What is Client ID</h3>
            <ul>
              <li>Unique alphanumeric code assigned to your account</li>
              <li>Used for all trading and account related activities</li>
              <li>Required for customer support queries</li>
              <li>Different from login ID or user ID</li>
            </ul>

            <h3>Where to Find Client ID</h3>
            <ul>
              <li><strong>Account Opening Email:</strong> Check your welcome email</li>
              <li><strong>Trading Platform:</strong> Displayed after login</li>
              <li><strong>Account Statements:</strong> Listed on all statements</li>
              <li><strong>Contract Notes:</strong> Shown on trading confirmations</li>
              <li><strong>Mobile App:</strong> Profile section</li>
            </ul>

            <h3>If You Can't Find It</h3>
            <p>Contact customer support with your registered mobile number and PAN details for assistance.</p>`,
        lastUpdated: '2025-07-01'
      },
      'close-deactivate-account': {
        id: 'close-deactivate-account',
        question: 'How do I close or deactivate my account?',
        answer: `<p>Account closure requires a formal process to ensure proper settlement:</p>
            
            <h3>Pre-Closure Requirements</h3>
            <ul>
              <li>Close all open positions</li>
              <li>Withdraw available funds</li>
              <li>Clear any pending dues</li>
              <li>Ensure no corporate actions are pending</li>
            </ul>

            <h3>Closure Process</h3>
            <ol>
              <li>Submit account closure request in writing</li>
              <li>Fill the account closure form</li>
              <li>Provide required documents</li>
              <li>Pay applicable charges (if any)</li>
              <li>Complete verification process</li>
            </ol>

            <h3>Required Documents</h3>
            <ul>
              <li>Signed account closure request</li>
              <li>Copy of PAN card</li>
              <li>Bank account details for refund</li>
              <li>Demat account closure form (if applicable)</li>
            </ul>

            <h3>Processing Time</h3>
            <p>Account closure typically takes 15-30 business days after all requirements are met.</p>`,
        lastUpdated: '2025-07-01'
      },
      'suspicious-activity': {
        id: 'suspicious-activity',
        question: 'What should I do if I suspect unauthorised activity on my account?',
        answer: `<p>Immediately take these security measures if you suspect unauthorized activity:</p>
            
            <h3>Immediate Actions</h3>
            <ol>
              <li><strong>Change Password:</strong> Reset immediately</li>
              <li><strong>Contact Support:</strong> Call customer care right away</li>
              <li><strong>Check Statements:</strong> Review recent transactions</li>
              <li><strong>Block Account:</strong> Request temporary suspension</li>
            </ol>

            <h3>What to Report</h3>
            <ul>
              <li>Unauthorized trades or transactions</li>
              <li>Unknown login attempts</li>
              <li>Suspicious emails or SMS</li>
              <li>Changes to account details you didn't make</li>
              <li>Missing funds or securities</li>
            </ul>

            <h3>Prevention Measures</h3>
            <ul>
              <li>Use strong, unique passwords</li>
              <li>Enable two-factor authentication</li>
              <li>Never share login credentials</li>
              <li>Regular monitoring of account statements</li>
              <li>Use secure networks for trading</li>
            </ul>

            <h3>Emergency Contact</h3>
            <p>24/7 Security Helpline: 1800-XXX-XXXX (Toll Free)</p>`,
        lastUpdated: '2025-07-01'
      }
    },
    'minor': {
      'minor-account-opening': {
        id: 'minor-account-opening',
        question: 'How to open trading account for minor?',
        answer: `<p>Minor trading accounts can be opened with specific requirements and limitations:</p>
            
            <h3>Eligibility</h3>
            <ul>
              <li>Age: Below 18 years</li>
              <li>Indian resident minor</li>
              <li>Natural guardian required</li>
              <li>Separate account for minor</li>
            </ul>

            <h3>Required Documents</h3>
            <ul>
              <li><strong>Minor's Documents:</strong> Birth certificate, School ID, Aadhaar</li>
              <li><strong>Guardian's Documents:</strong> PAN, Aadhaar, Address proof</li>
              <li><strong>Relationship Proof:</strong> Birth certificate showing parent-child relationship</li>
              <li><strong>Bank Account:</strong> Joint account with guardian</li>
            </ul>

            <h3>Account Features</h3>
            <ul>
              <li>Only delivery-based equity trading allowed</li>
              <li>No derivatives or margin trading</li>
              <li>Guardian approval required for all transactions</li>
              <li>Auto-conversion to regular account at 18</li>
            </ul>`,
        lastUpdated: '2025-07-01'
      }
    },
    'nri': {
      'nri-account-opening': {
        id: 'nri-account-opening',
        question: 'How to open NRI trading account?',
        answer: `<p>NRI (Non-Resident Indian) trading accounts have specific requirements and procedures:</p>
            
            <h3>Eligibility</h3>
            <ul>
              <li>Indian citizen residing outside India</li>
              <li>Valid Indian passport</li>
              <li>Overseas residential status</li>
              <li>NRE/NRO bank account in India</li>
            </ul>

            <h3>Required Documents</h3>
            <ul>
              <li><strong>Identity Proof:</strong> Indian passport with visa stamps</li>
              <li><strong>Address Proof:</strong> Overseas utility bill/bank statement</li>
              <li><strong>PAN Card:</strong> Valid Indian PAN</li>
              <li><strong>Bank Proof:</strong> NRE/NRO account statement</li>
              <li><strong>Income Proof:</strong> Salary slip or tax returns</li>
            </ul>

            <h3>Investment Restrictions</h3>
            <ul>
              <li>Can invest in equity and mutual funds</li>
              <li>Limited derivatives trading</li>
              <li>Currency trading not allowed</li>
              <li>Repatriation limits apply</li>
            </ul>`,
        lastUpdated: '2025-07-01'
      }
    },
    'corporate': {
      'corporate-account-opening': {
        id: 'corporate-account-opening',
        question: 'How to open corporate/business trading account?',
        answer: `<p>Corporate accounts for businesses, partnerships, and companies have specific requirements:</p>
            
            <h3>Entity Types Supported</h3>
            <ul>
              <li>Private Limited Companies</li>
              <li>Public Limited Companies</li>
              <li>Partnership Firms</li>
              <li>Limited Liability Partnerships (LLP)</li>
              <li>Proprietary Concerns</li>
            </ul>

            <h3>Required Documents</h3>
            <ul>
              <li><strong>Company Documents:</strong> Certificate of Incorporation, MOA, AOA</li>
              <li><strong>Authorization:</strong> Board resolution for trading</li>
              <li><strong>Director Details:</strong> PAN, Aadhaar of all directors</li>
              <li><strong>Bank Account:</strong> Corporate bank account proof</li>
              <li><strong>Financial Documents:</strong> ITR, GST registration</li>
            </ul>

            <h3>Additional Requirements</h3>
            <ul>
              <li>Minimum paid-up capital requirements</li>
              <li>Authorized representative details</li>
              <li>Trading limits and exposure management</li>
              <li>Compliance with corporate governance norms</li>
            </ul>`,
        lastUpdated: '2025-07-01'
      }
    },
    'glossary': {
      'trading-terms': {
        id: 'trading-terms',
        question: 'Common trading terms and definitions',
        answer: `<p>Understanding key trading terms is essential for successful investing:</p>
            
            <h3>Basic Terms</h3>
            <ul>
              <li><strong>Equity:</strong> Ownership shares in a company</li>
              <li><strong>Demat:</strong> Dematerialized form of holding securities</li>
              <li><strong>Portfolio:</strong> Collection of investments held by an investor</li>
              <li><strong>Broker:</strong> Intermediary who executes buy/sell orders</li>
            </ul>

            <h3>Trading Terms</h3>
            <ul>
              <li><strong>Bull Market:</strong> Rising market trend</li>
              <li><strong>Bear Market:</strong> Declining market trend</li>
              <li><strong>Bid Price:</strong> Highest price buyer is willing to pay</li>
              <li><strong>Ask Price:</strong> Lowest price seller is willing to accept</li>
              <li><strong>Volume:</strong> Number of shares traded</li>
            </ul>

            <h3>Order Types</h3>
            <ul>
              <li><strong>Market Order:</strong> Buy/sell at current market price</li>
              <li><strong>Limit Order:</strong> Buy/sell at specific price or better</li>
              <li><strong>Stop Loss:</strong> Order to limit losses</li>
              <li><strong>Day Order:</strong> Valid for current trading day only</li>
            </ul>`,
        lastUpdated: '2025-07-01'
      }
    }
  },
  'funds': {
    'add-money': {
      'payment-methods': {
        id: 'payment-methods',
        question: 'What payment methods are available to add money?',
        answer: `<p>Sapphire Broking offers multiple convenient payment methods to add funds to your trading account. Choose the option that works best for you:</p>
            
            <h3>Instant Methods</h3>
            <p><em>Funds reflect instantly</em></p>
            <ul>
              <li><strong>UPI:</strong> Google Pay, PhonePe, Paytm, etc.</li>
              <li><strong>Net Banking:</strong> All major banks supported</li>
              <li><strong>Debit Card:</strong> Visa, Mastercard, RuPay</li>
              <li><strong>IMPS:</strong> Immediate Payment Service</li>
            </ul>

            <h3>Traditional Methods</h3>
            <p><em>May take 2-24 hours</em></p>
            <ul>
              <li><strong>NEFT:</strong> National Electronic Funds Transfer</li>
              <li><strong>RTGS:</strong> Real Time Gross Settlement</li>
              <li><strong>Cheque Deposit:</strong> At branch locations</li>
              <li><strong>Bank Transfer:</strong> Direct bank to bank</li>
            </ul>

            <h3>Payment Limits</h3>
            <ul>
              <li><strong>UPI:</strong> Min: ₹1 | Max: ₹1,00,000/day</li>
              <li><strong>Net Banking:</strong> Min: ₹1 | Max: ₹10,00,000/day</li>
              <li><strong>NEFT/RTGS:</strong> Min: ₹1 | No upper limit</li>
            </ul>`,
        lastUpdated: '2024-12-12',
        helpful: 38,
        notHelpful: 2,
        relatedQuestions: [
          {
            id: 'instant-transfer',
            question: 'How to add money instantly to my account?'
          }
        ]
      },
      'instant-transfer': {
        id: 'instant-transfer',
        question: 'How to add money instantly to my account?',
        answer: `<p>For instant fund transfer to your Sapphire Broking account, use any of these methods:</p>
            
            <h3>UPI (Recommended)</h3>
            <p>Fastest and most convenient method:</p>
            <ul>
              <li>Open any UPI app (GPay, PhonePe, Paytm, etc.)</li>
              <li>Use the VPA provided in your account</li>
              <li>Funds reflect within seconds</li>
              <li>Available 24/7</li>
            </ul>

            <h3>Net Banking</h3>
            <ul>
              <li>Login to your bank's net banking</li>
              <li>Add Sapphire as beneficiary</li>
              <li>Transfer using IMPS for instant credit</li>
            </ul>

            <h3>Debit Card</h3>
            <ul>
              <li>Use the 'Add Money' option in your account</li>
              <li>Enter debit card details</li>
              <li>Complete OTP verification</li>
              <li>Funds reflect immediately</li>
            </ul>`,
        lastUpdated: '2024-12-12'
      }
    }
  }
};

export const getQuestionsByDoubt = (topicId: string, doubtId: string): Question[] => {
  const topicQuestions = questions[topicId];
  const doubtQuestions = topicQuestions?.[doubtId];
  return doubtQuestions ? Object.values(doubtQuestions) : [];
};

export const getQuestion = (topicId: string, doubtId: string, questionId: string): Question | undefined => {
  return questions[topicId]?.[doubtId]?.[questionId];
};

export const getAllQuestions = (): Question[] => {
  const allQuestions: Question[] = [];
  
  Object.values(questions).forEach(topicQuestions => {
    Object.values(topicQuestions).forEach(doubtQuestions => {
      Object.values(doubtQuestions).forEach(question => {
        allQuestions.push(question);
      });
    });
  });
  
  return allQuestions;
};

export const searchQuestions = (searchTerm: string): Question[] => {
  const allQuestions = getAllQuestions();
  const lowercaseSearch = searchTerm.toLowerCase();
  
  return allQuestions.filter(question => 
    question.question.toLowerCase().includes(lowercaseSearch) ||
    question.answer.toLowerCase().includes(lowercaseSearch)
  );
};
