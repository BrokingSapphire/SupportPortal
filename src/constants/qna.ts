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

export interface SubcategoryQuestions {
  [questionId: string]: Question;
}

export interface TopicQuestions {
  [topicId: string]: {
    [subcategoryId: string]: SubcategoryQuestions;
  };
}

export const questions: TopicQuestions = {
  "account-opening-kyc": {
    "documents-eligibility": {
      "required-documents-resident": {
        id: "required-documents-resident",
        question:
          "What documents are required for resident Indian account opening?",
        answer: `<p>To open a Sapphire Broking account as a resident Indian, you need the following documents:</p>
            
            <h3>Mandatory Documents</h3>
            <ul>
              <li><strong>PAN Card:</strong> Valid PAN card copy (mandatory for all investors)</li>
              <li><strong>Aadhaar:</strong> Aadhaar number linked to your mobile number</li>
              <li><strong>Bank Proof:</strong> Cancelled cheque or bank statement with your name, account number, IFSC</li>
            </ul>

            <h3>Additional Documents (if required)</h3>
            <ul>
              <li><strong>Income Proof:</strong> Required for F&O trading access (salary slip, ITR, bank statement)</li>
              <li><strong>Address Proof:</strong> If Aadhaar address needs verification</li>
              <li><strong>Photograph:</strong> Recent passport-size photograph</li>
            </ul>

            <h3>Document Quality Requirements</h3>
            <ul>
              <li>Clear, readable scanned copies</li>
              <li>All text should be visible</li>
              <li>No torn or damaged documents</li>
              <li>Colored scans preferred</li>
            </ul>`,
        lastUpdated: "2025-07-01",
        helpful: 45,
        notHelpful: 3,
        relatedQuestions: [
          {
            id: "nri-documents",
            question: "What additional documents do NRI clients need?",
          },
        ],
      },
      "eligibility-criteria": {
        id: "eligibility-criteria",
        question:
          "What are the eligibility criteria for opening a trading account?",
        answer: `<p>Check if you meet the eligibility requirements for opening a Sapphire Broking account:</p>
            
            <h3>General Eligibility</h3>
            <ul>
              <li><strong>Age:</strong> Minimum 18 years (minors need guardian)</li>
              <li><strong>Citizenship:</strong> Indian citizen or eligible foreign national</li>
              <li><strong>PAN Card:</strong> Valid PAN card mandatory</li>
              <li><strong>Bank Account:</strong> Indian bank account in your name</li>
            </ul>

            <h3>Resident Indians</h3>
            <ul>
              <li>Valid Aadhaar linked to mobile number</li>
              <li>Indian address proof</li>
              <li>No additional restrictions</li>
            </ul>

            <h3>NRI/PIO/OCI</h3>
            <ul>
              <li>Valid Indian passport</li>
              <li>Overseas address proof</li>
              <li>NRE/NRO bank account</li>
              <li>Investment restrictions apply</li>
            </ul>

            <h3>Ineligible Categories</h3>
            <ul>
              <li>SEBI debarred entities</li>
              <li>Willful defaulters</li>
              <li>Court-restricted individuals</li>
            </ul>`,
        lastUpdated: "2025-07-01",
        helpful: 32,
        notHelpful: 1,
      },
    },
    "kyc-process-verification": {
      "in-person-verification": {
        id: "in-person-verification",
        question:
          "What is In-Person Verification (IPV) and how to complete it?",
        answer: `<p>In-Person Verification (IPV) is a mandatory step to verify your identity during account opening:</p>
            
            <h3>What is IPV?</h3>
            <ul>
              <li>SEBI mandated identity verification process</li>
              <li>Can be done through video call or selfie</li>
              <li>Ensures account security and compliance</li>
              <li>One-time process during account opening</li>
            </ul>

            <h3>IPV Methods</h3>
            <ul>
              <li><strong>Video Selfie:</strong> Record a short video as per instructions</li>
              <li><strong>Video Call:</strong> Live verification with support team</li>
              <li><strong>Branch Visit:</strong> Physical verification at office</li>
            </ul>

            <h3>IPV Requirements</h3>
            <ul>
              <li>Clear lighting and stable internet</li>
              <li>Original PAN card in hand</li>
              <li>Clear face visibility</li>
              <li>Speak as instructed</li>
            </ul>

            <h3>IPV Tips</h3>
            <ul>
              <li>Use good lighting, avoid shadows</li>
              <li>Speak clearly and audibly</li>
              <li>Hold documents steady</li>
              <li>Follow all instructions carefully</li>
            </ul>`,
        lastUpdated: "2025-07-01",
        helpful: 28,
        notHelpful: 4,
      },
    },
    "account-opening-methods": {
      "online-account-opening": {
        id: "online-account-opening",
        question: "How to open account online step by step?",
        answer: `<p>Open your Sapphire Broking account completely online in just a few minutes:</p>
            
            <h3>Step-by-Step Process</h3>
            <ol>
              <li><strong>Visit Website:</strong> Go to signup.sapphirebroking.com</li>
              <li><strong>Mobile Verification:</strong> Enter mobile number and verify via OTP</li>
              <li><strong>Email Verification:</strong> Provide and verify email address</li>
              <li><strong>PAN Details:</strong> Enter PAN number and date of birth</li>
              <li><strong>Trading Segments:</strong> Select Equity, F&O, Currency, Commodity</li>
              <li><strong>Aadhaar Verification:</strong> Enter Aadhaar and complete OTP verification</li>
              <li><strong>Personal Details:</strong> Fill name, address, occupation details</li>
              <li><strong>Bank Account:</strong> Link via UPI or enter manually</li>
              <li><strong>IPV:</strong> Complete In-Person Verification via selfie video</li>
              <li><strong>Signature:</strong> Draw digital signature or upload image</li>
              <li><strong>Documents:</strong> Upload additional documents if required</li>
              <li><strong>Nominee:</strong> Add nominee details (optional)</li>
              <li><strong>eSign:</strong> Digitally sign application using Aadhaar OTP</li>
            </ol>

            <h3>Time Required</h3>
            <ul>
              <li>Application: 10-15 minutes</li>
              <li>Processing: 24-48 hours</li>
              <li>Account activation: 1-2 business days</li>
            </ul>`,
        lastUpdated: "2025-07-01",
        helpful: 67,
        notHelpful: 2,
      },
    },
    "types-of-accounts": {
      "individual-vs-joint-account": {
        id: "individual-vs-joint-account",
        question:
          "What is the difference between individual and joint trading accounts?",
        answer: `<p>Choose between individual and joint accounts based on your requirements:</p>
            
            <h3>Individual Account</h3>
            <ul>
              <li><strong>Ownership:</strong> Single person ownership</li>
              <li><strong>Operation:</strong> Only account holder can trade</li>
              <li><strong>Taxation:</strong> All gains/losses in one person's name</li>
              <li><strong>Nomination:</strong> Can add up to 3 nominees</li>
              <li><strong>Documents:</strong> Only account holder's documents needed</li>
            </ul>

            <h3>Joint Account</h3>
            <ul>
              <li><strong>Ownership:</strong> Multiple persons (usually 2-3)</li>
              <li><strong>Operation:</strong> Either/Survivor or Joint operations</li>
              <li><strong>Taxation:</strong> Income distributed as per holding ratio</li>
              <li><strong>Documents:</strong> All joint holders' documents required</li>
              <li><strong>Signatures:</strong> As per mode of operation</li>
            </ul>

            <h3>Joint Account Types</h3>
            <ul>
              <li><strong>Either or Survivor:</strong> Any holder can operate independently</li>
              <li><strong>Joint:</strong> All holders must sign for transactions</li>
              <li><strong>Former or Survivor:</strong> First holder operates, others on death</li>
            </ul>`,
        lastUpdated: "2025-07-01",
      },
    },
  },
  "fund-transfer-withdrawals": {
    "adding-funds": {
      "payment-methods": {
        id: "payment-methods",
        question: "What payment methods are available to add money?",
        answer: `<p>Sapphire Broking offers multiple convenient payment methods to add funds to your trading account:</p>
            
            <h3>Instant Methods</h3>
            <p><em>Funds reflect instantly</em></p>
            <ul>
              <li><strong>UPI:</strong> Google Pay, PhonePe, Paytm, BHIM, bank UPI apps</li>
              <li><strong>Net Banking:</strong> All major banks (SBI, HDFC, ICICI, Axis, etc.)</li>
              <li><strong>Debit Card:</strong> Visa, Mastercard, RuPay cards</li>
              <li><strong>IMPS:</strong> Immediate Payment Service</li>
            </ul>

            <h3>Traditional Methods</h3>
            <p><em>May take 2-24 hours</em></p>
            <ul>
              <li><strong>NEFT:</strong> National Electronic Funds Transfer</li>
              <li><strong>RTGS:</strong> Real Time Gross Settlement (₹2 lakh+)</li>
              <li><strong>Bank Transfer:</strong> Direct bank to bank transfer</li>
              <li><strong>Cheque Deposit:</strong> At branch locations</li>
            </ul>

            <h3>Payment Limits</h3>
            <ul>
              <li><strong>UPI:</strong> Min: ₹1 | Max: ₹1,00,000/day</li>
              <li><strong>Net Banking:</strong> Min: ₹1 | Max: ₹10,00,000/day</li>
              <li><strong>Debit Card:</strong> Min: ₹1 | Max: ₹2,00,000/day</li>
              <li><strong>NEFT/RTGS:</strong> Min: ₹1 | No upper limit</li>
            </ul>`,
        lastUpdated: "2025-07-01",
        helpful: 38,
        notHelpful: 2,
        relatedQuestions: [
          {
            id: "instant-transfer",
            question: "How to add money instantly to my account?",
          },
        ],
      },
      "instant-transfer": {
        id: "instant-transfer",
        question: "How to add money instantly to my account?",
        answer: `<p>For instant fund transfer to your Sapphire Broking account, use any of these methods:</p>
            
            <h3>UPI (Recommended)</h3>
            <p>Fastest and most convenient method:</p>
            <ul>
              <li>Open any UPI app (GPay, PhonePe, Paytm, etc.)</li>
              <li>Use the VPA provided in your account dashboard</li>
              <li>Funds reflect within seconds</li>
              <li>Available 24/7, including weekends</li>
              <li>No additional charges</li>
            </ul>

            <h3>Net Banking with IMPS</h3>
            <ul>
              <li>Login to your bank's net banking portal</li>
              <li>Add Sapphire as beneficiary</li>
              <li>Transfer using IMPS for instant credit</li>
              <li>Available 24x7</li>
            </ul>

            <h3>Debit Card</h3>
            <ul>
              <li>Use the 'Add Money' option in your trading platform</li>
              <li>Enter debit card details securely</li>
              <li>Complete OTP verification</li>
              <li>Funds reflect immediately</li>
            </ul>

            <h3>Important Notes</h3>
            <ul>
              <li>Only use your registered bank account</li>
              <li>Third-party payments not allowed</li>
              <li>Keep payment receipts for reference</li>
            </ul>`,
        lastUpdated: "2025-07-01",
        helpful: 45,
        notHelpful: 1,
      },
    },
    "withdrawal-of-funds": {
      "withdrawal-process": {
        id: "withdrawal-process",
        question: "How to withdraw money from my trading account?",
        answer: `<p>Withdrawing funds from your Sapphire Broking account is simple and secure:</p>
            
            <h3>Withdrawal Methods</h3>
            <ul>
              <li><strong>Online Withdrawal:</strong> Through trading platform/app</li>
              <li><strong>UPI:</strong> Instant withdrawal to registered UPI ID</li>
              <li><strong>Bank Transfer:</strong> NEFT/IMPS to registered bank account</li>
            </ul>

            <h3>Step-by-Step Process</h3>
            <ol>
              <li>Login to your trading account</li>
              <li>Go to 'Funds' or 'Withdraw Money' section</li>
              <li>Enter withdrawal amount</li>
              <li>Select withdrawal method (UPI/Bank Transfer)</li>
              <li>Verify with OTP or trading password</li>
              <li>Submit withdrawal request</li>
            </ol>

            <h3>Processing Time</h3>
            <ul>
              <li><strong>UPI:</strong> Instant (24x7)</li>
              <li><strong>IMPS:</strong> Instant (24x7)</li>
              <li><strong>NEFT:</strong> 2-3 hours (banking hours)</li>
              <li><strong>RTGS:</strong> 30 minutes (banking hours)</li>
            </ul>

            <h3>Withdrawal Limits</h3>
            <ul>
              <li><strong>UPI:</strong> ₹1,00,000 per day</li>
              <li><strong>Bank Transfer:</strong> No limit (subject to available balance)</li>
              <li><strong>Minimum:</strong> ₹1</li>
            </ul>`,
        lastUpdated: "2025-07-01",
        helpful: 52,
        notHelpful: 3,
      },
    },
  },
  "trading-orders": {
    "order-types": {
      "market-vs-limit-orders": {
        id: "market-vs-limit-orders",
        question: "What is the difference between Market and Limit orders?",
        answer: `<p>Understanding order types is crucial for effective trading. Here's the difference:</p>
            
            <h3>Market Order</h3>
            <ul>
              <li><strong>Execution:</strong> Executes immediately at current market price</li>
              <li><strong>Price:</strong> No price specification needed</li>
              <li><strong>Guarantee:</strong> Execution guaranteed, price not guaranteed</li>
              <li><strong>Best for:</strong> Quick execution when price is less important</li>
              <li><strong>Risk:</strong> Price slippage in volatile markets</li>
            </ul>

            <h3>Limit Order</h3>
            <ul>
              <li><strong>Execution:</strong> Executes only at specified price or better</li>
              <li><strong>Price:</strong> You set the exact price</li>
              <li><strong>Guarantee:</strong> Price guaranteed, execution not guaranteed</li>
              <li><strong>Best for:</strong> Price-sensitive transactions</li>
              <li><strong>Risk:</strong> May not execute if price not reached</li>
            </ul>

            <h3>Examples</h3>
            <ul>
              <li><strong>Market Buy:</strong> "Buy 100 shares of XYZ at current market price"</li>
              <li><strong>Limit Buy:</strong> "Buy 100 shares of XYZ at ₹500 or lower"</li>
              <li><strong>Limit Sell:</strong> "Sell 100 shares of XYZ at ₹550 or higher"</li>
            </ul>

            <h3>When to Use</h3>
            <ul>
              <li><strong>Market Order:</strong> High liquidity stocks, urgent trades</li>
              <li><strong>Limit Order:</strong> Illiquid stocks, specific price targets</li>
            </ul>`,
        lastUpdated: "2025-07-01",
        helpful: 78,
        notHelpful: 5,
      },
    },
    "order-placement-process": {
      "place-buy-sell-order": {
        id: "place-buy-sell-order",
        question: "How to place buy and sell orders?",
        answer: `<p>Placing orders on Sapphire Broking platform is straightforward. Follow these steps:</p>
            
            <h3>Placing a Buy Order</h3>
            <ol>
              <li><strong>Search Stock:</strong> Enter stock name or symbol</li>
              <li><strong>Select 'Buy':</strong> Click on the Buy button</li>
              <li><strong>Order Details:</strong>
                <ul>
                  <li>Quantity: Number of shares</li>
                  <li>Price: Market/Limit price</li>
                  <li>Product: Intraday/Delivery/Cover Order</li>
                  <li>Validity: Day/IOC/GTD</li>
                </ul>
              </li>
              <li><strong>Review:</strong> Check all details carefully</li>
              <li><strong>Submit:</strong> Click 'Buy' to place order</li>
            </ol>

            <h3>Placing a Sell Order</h3>
            <ol>
              <li><strong>From Holdings:</strong> Select stock from your holdings</li>
              <li><strong>Or Search:</strong> Search for the stock symbol</li>
              <li><strong>Select 'Sell':</strong> Click on the Sell button</li>
              <li><strong>Enter Quantity:</strong> Maximum available shares shown</li>
              <li><strong>Set Price:</strong> Market or your desired limit price</li>
              <li><strong>Submit:</strong> Review and confirm the order</li>
            </ol>

            <h3>Order Confirmation</h3>
            <ul>
              <li>Order acknowledgment with order number</li>
              <li>SMS/Email confirmation</li>
              <li>Real-time order status in platform</li>
              <li>Contract note after execution</li>
            </ul>

            <h3>Important Tips</h3>
            <ul>
              <li>Double-check quantity and price</li>
              <li>Ensure sufficient funds/shares</li>
              <li>Monitor order status</li>
              <li>Cancel/modify if needed before execution</li>
            </ul>`,
        lastUpdated: "2025-07-01",
        helpful: 89,
        notHelpful: 4,
      },
    },
  },
  "technical-platform-issues": {
    "login-access-issues": {
      "forgot-password": {
        id: "forgot-password",
        question: "How to reset forgotten password?",
        answer: `<p>If you've forgotten your trading account password, follow these steps to reset it:</p>
            
            <h3>Online Password Reset</h3>
            <ol>
              <li><strong>Visit Login Page:</strong> Go to the official login page</li>
              <li><strong>Click 'Forgot Password':</strong> Look for the link below login form</li>
              <li><strong>Enter Details:</strong> Provide User ID or registered mobile number</li>
              <li><strong>Verification:</strong> Complete OTP verification via SMS</li>
              <li><strong>New Password:</strong> Create a strong new password</li>
              <li><strong>Confirm:</strong> Re-enter password to confirm</li>
            </ol>

            <h3>Alternative Methods</h3>
            <ul>
              <li><strong>Mobile App:</strong> Use 'Forgot Password' in mobile app</li>
              <li><strong>Customer Support:</strong> Call helpline for assistance</li>
              <li><strong>Email Support:</strong> Send request to support email</li>
            </ul>

            <h3>Password Requirements</h3>
            <ul>
              <li>Minimum 8 characters</li>
              <li>At least one uppercase letter</li>
              <li>At least one lowercase letter</li>
              <li>At least one number</li>
              <li>At least one special character</li>
            </ul>

            <h3>Security Tips</h3>
            <ul>
              <li>Don't use personal information</li>
              <li>Change password regularly</li>
              <li>Don't share with anyone</li>
              <li>Use unique password for trading account</li>
            </ul>`,
        lastUpdated: "2025-07-01",
        helpful: 67,
        notHelpful: 3,
      },
    },
  },
  "new-user-guide-getting-started": {
    "platform-overview": {
      "what-is-sapphire-broking": {
        id: "what-is-sapphire-broking",
        question: "What is Sapphire Broking and what services do you offer?",
        answer: `<p>Sapphire Broking is a leading financial services company that provides comprehensive trading and investment solutions:</p>
            
            <h3>Our Services</h3>
            <ul>
              <li><strong>Equity Trading:</strong> Buy and sell stocks on NSE, BSE</li>
              <li><strong>F&O Trading:</strong> Futures and Options trading</li>
              <li><strong>Commodity Trading:</strong> MCX, NCDEX trading</li>
              <li><strong>Currency Trading:</strong> Currency derivatives</li>
              <li><strong>Mutual Funds:</strong> Direct mutual fund investments</li>
              <li><strong>IPOs:</strong> Apply for Initial Public Offerings</li>
              <li><strong>Research:</strong> Market analysis and recommendations</li>
            </ul>

            <h3>Key Features</h3>
            <ul>
              <li>Advanced trading platforms</li>
              <li>Mobile and web applications</li>
              <li>Real-time market data</li>
              <li>24/7 customer support</li>
              <li>Competitive brokerage rates</li>
              <li>Secure and regulated</li>
            </ul>

            <h3>Why Choose Sapphire Broking?</h3>
            <ul>
              <li>SEBI registered broker</li>
              <li>Multiple exchange memberships</li>
              <li>Advanced technology</li>
              <li>Expert support team</li>
              <li>Educational resources</li>
            </ul>`,
        lastUpdated: "2025-07-01",
        helpful: 45,
        notHelpful: 2,
      },
    },
    "first-steps": {
      "how-to-get-started": {
        id: "how-to-get-started",
        question: "How do I get started with Sapphire Broking?",
        answer: `<p>Getting started with Sapphire Broking is simple and can be completed online:</p>
            
            <h3>Step 1: Account Opening</h3>
            <ol>
              <li>Visit our website or download the mobile app</li>
              <li>Click on "Open Account" or "Get Started"</li>
              <li>Enter your basic details (name, mobile, email)</li>
              <li>Complete KYC verification</li>
              <li>Upload required documents</li>
              <li>Complete In-Person Verification (IPV)</li>
              <li>Sign documents digitally</li>
            </ol>

            <h3>Step 2: Account Activation</h3>
            <ul>
              <li>Account processed within 24-48 hours</li>
              <li>Receive login credentials via SMS/Email</li>
              <li>Set up your trading password</li>
              <li>Link your bank account</li>
            </ul>

            <h3>Step 3: Start Trading</h3>
            <ul>
              <li>Add funds to your account</li>
              <li>Explore the trading platform</li>
              <li>Place your first order</li>
              <li>Access research and analysis</li>
            </ul>

            <h3>Required Documents</h3>
            <ul>
              <li>PAN Card (mandatory)</li>
              <li>Aadhaar Card</li>
              <li>Bank Account details</li>
              <li>Income proof (for F&O)</li>
            </ul>`,
        lastUpdated: "2025-07-01",
        helpful: 67,
        notHelpful: 3,
      },
    },
    "account-setup": {
      "setting-up-trading-account": {
        id: "setting-up-trading-account",
        question: "How to set up my trading account after opening?",
        answer: `<p>After your account is opened, follow these steps to set it up completely:</p>
            
            <h3>Initial Setup</h3>
            <ol>
              <li><strong>Login:</strong> Use the credentials sent to your mobile/email</li>
              <li><strong>Change Password:</strong> Set a strong, unique password</li>
              <li><strong>Complete Profile:</strong> Add missing information if any</li>
              <li><strong>Bank Linking:</strong> Link your bank account for fund transfers</li>
            </ol>

            <h3>Security Setup</h3>
            <ul>
              <li>Enable two-factor authentication (2FA)</li>
              <li>Set up security questions</li>
              <li>Configure login alerts</li>
              <li>Review privacy settings</li>
            </ul>

            <h3>Trading Setup</h3>
            <ul>
              <li>Choose trading segments (Equity, F&O, etc.)</li>
              <li>Set up watchlists</li>
              <li>Configure order preferences</li>
              <li>Set up price alerts</li>
            </ul>

            <h3>Mobile App Setup</h3>
            <ul>
              <li>Download mobile app</li>
              <li>Login with same credentials</li>
              <li>Enable biometric login</li>
              <li>Set up notifications</li>
            </ul>

            <h3>First Steps</h3>
            <ul>
              <li>Add funds to your account</li>
              <li>Explore the platform features</li>
              <li>Read educational content</li>
              <li>Start with small trades</li>
            </ul>`,
        lastUpdated: "2025-07-01",
        helpful: 34,
        notHelpful: 1,
      },
    },
  },
};

// Helper functions to work with the new structure
export const getQuestionsBySubcategory = (
  topicId: string,
  subcategoryId: string
): Question[] => {
  const topicQuestions = questions[topicId];
  const subcategoryQuestions = topicQuestions?.[subcategoryId];
  return subcategoryQuestions ? Object.values(subcategoryQuestions) : [];
};

export const getQuestion = (
  topicId: string,
  subcategoryId: string,
  questionId: string
): Question | undefined => {
  return questions[topicId]?.[subcategoryId]?.[questionId];
};

export const getAllQuestions = (): Question[] => {
  const allQuestions: Question[] = [];

  Object.values(questions).forEach((topicQuestions) => {
    Object.values(topicQuestions).forEach((subcategoryQuestions) => {
      Object.values(subcategoryQuestions).forEach((question) => {
        allQuestions.push(question);
      });
    });
  });

  return allQuestions;
};

export const searchQuestions = (searchTerm: string): Question[] => {
  const allQuestions = getAllQuestions();
  const lowercaseSearch = searchTerm.toLowerCase();

  return allQuestions.filter(
    (question) =>
      question.question.toLowerCase().includes(lowercaseSearch) ||
      question.answer.toLowerCase().includes(lowercaseSearch)
  );
};

export const getQuestionsByTopic = (topicId: string): Question[] => {
  const topicQuestions = questions[topicId];
  const allTopicQuestions: Question[] = [];

  if (topicQuestions) {
    Object.values(topicQuestions).forEach((subcategoryQuestions) => {
      Object.values(subcategoryQuestions).forEach((question) => {
        allTopicQuestions.push(question);
      });
    });
  }

  return allTopicQuestions;
};

export const getRelatedQuestions = (
  topicId: string,
  subcategoryId: string,
  currentQuestionId: string
): Question[] => {
  const subcategoryQuestions = getQuestionsBySubcategory(
    topicId,
    subcategoryId
  );
  return subcategoryQuestions
    .filter((q) => q.id !== currentQuestionId)
    .slice(0, 3);
};
