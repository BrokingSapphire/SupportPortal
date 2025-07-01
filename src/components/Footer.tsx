import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiYoutube, FiGithub } from "react-icons/fi";
import { AiOutlineFacebook } from "react-icons/ai";
import { PiLinkedinLogo } from "react-icons/pi";
interface LinkSectionProps {
  title: string;
  links: Array<{ title: string; href: string }>;
}

const LinkSection = ({ title, links }: LinkSectionProps) => (
  <div className="col-span-1">
    <h3 className="font-bold mb-4 text-lg sm:text-[20px]">{title}</h3>
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.title}>
          <a href={link.href} className="text-xs sm:text-[14px] hover:text-gray-300">
            {link.title}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const SocialLinks = () => {
  const SOCIAL_ICONS = [
    { Icon: FaWhatsapp, href: "https://wa.me/9890336989" },
    { Icon: AiOutlineFacebook, href: "https://facebook.com/BrokingSapphire" },
    { Icon: PiLinkedinLogo, href: "https://linkedin.com/company/BrokingSapphire" },
    { Icon: FaInstagram, href: "https://instagram.com/BrokingSapphire" },
    { Icon: FiYoutube, href: "https://youtube.com/c/@BrokingSapphire" },
    { Icon: FaXTwitter, href: "https://twitter.com/BrokingSapphire" },
    { Icon: FiGithub, href: "https://github.com/BrokingSapphire" },
  ];

  return (
    <>
    <p className="text-sm pb-4 max-w-[250px] md:max-w-[250px] lg:max-w-[180px] xl:max-w-[220px]">
      Copyright © {new Date().getFullYear()} Sapphire Broking, All rights reserved.
    </p>
    <div className="grid grid-cols-7 sm:grid-cols-7 md:grid-cols-7 lg:grid-cols-4 xl:grid-cols-4 gap-1.5 mb-6 max-w-[250px] md:max-w-[250px] lg:max-w-[180px] xl:max-w-[220px]">
      {SOCIAL_ICONS.map(({ Icon, href }) => (
        <a
          key={href}
          href={href}
          className="hover:opacity-80"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon className="text-2xl" />
        </a>
      ))}
    </div>
    </>
  );
};

const QuickLinks = () => {
  const Links = [
    { name: "Dematerialisation", href: "/dematerialisation" },
    { name: "Upcoming IPOs", href: "" },
    { name: "Market Holidays", href: "" },
    { name: "Economic Calendar", href: "" },
    { name: "Markets", href: "" },
  ];

  return (
    <ul className="space-y-2">
      {Links.map((link) => (
        <li key={link.name}>
          {link.href && link.href.startsWith('/') ? (
            <Link href={link.href} className="text-xs sm:text-[14px] hover:text-gray-300">
              {link.name}
            </Link>
          ) : (
            <a href={link.href} className="text-xs sm:text-[14px] hover:text-gray-300" target="_blank" rel="noopener noreferrer">
              {link.name}
            </a>
          )}
        </li>
      ))}
    </ul>
  );
};

const LegalSection = () => {
  const EXCHANGES = [
    { name: "NSE", link: "https://www.nseindia.com/" },
    { name: "BSE", link: "https://www.bseindia.com/" },
    { name: "MCX", link: "https://www.mcxindia.com/" },
    { name: "NCDEX", link: "https://www.ncdex.com" }
  ];

  const INVESTOR_POINTS = [
    "Always update your mobile number and email ID with your broker and depository participant to receive OTPs and alerts directly from the depository.",
    "Check your securities/mutual funds/bonds in the monthly Consolidated Account Statement issued by CDSL.",
    "Prevent unauthorized transactions in your trading and demat accounts by safeguarding your credentials and being vigilant against unsolicited tips or schemes.",
    "For IPO applications, use ASBA for payment, eliminating the need for cheques.",
  ];

  // Create a copy of EXCHANGES and interchange BSE and MCX
  const modifiedExchanges = [...EXCHANGES];
  const bseIndex = modifiedExchanges.findIndex(exchange => exchange.name.includes("BSE"));
  const mcxIndex = modifiedExchanges.findIndex(exchange => exchange.name.includes("MCX"));
  
  if (bseIndex !== -1 && mcxIndex !== -1) {
    const temp = modifiedExchanges[bseIndex];
    modifiedExchanges[bseIndex] = modifiedExchanges[mcxIndex];
    modifiedExchanges[mcxIndex] = temp;
  }

  return (
    <div className="text-xs sm:text-[14px] space-y-4 border-t border-teal-800 pt-6 ">
      <div className="grid gap-4">
        {/* Legal Name */}
        <p>
          <strong>Legal Name:</strong> <strong>Sapphire Broking</strong>: Registered Office: <strong><span className="underline decoration-dotted decoration-slate-400">Plot No. 84A, First Floor, Pande Layout, New Sneh Nagar, Khamla, Nagpur (MH) - 440025</span></strong>, FRN: <strong><span className="underline decoration-dotted decoration-slate-400">NG000010895</span></strong>, SEBI Registration No.: <span className="font-bold underline decoration-dotted decoration-slate-400">INZ923930210</span> – Member of <span className="font-bold underline decoration-dotted decoration-slate-400">NSE, BSE, MCX, and NCDEX</span>. Clearing House: <strong><span className="underline decoration-dotted decoration-slate-400">Globe Capital Services Ltd.</span></strong>: DP ID: <strong><span className="underline decoration-dotted decoration-slate-400">12020600</span></strong>. Compliance Officer: <strong><span className="underline decoration-dotted decoration-slate-400">Mr. Yash Katyari</span></strong>, Tel: <strong><a href="tel:+919359561831" className="underline decoration-dotted decoration-slate-400 text-inherit">+91 93595 61831</a></strong>, Email: <strong><a href="mailto:yash.katyari@sapphirebroking.com" className="underline decoration-dotted decoration-slate-400 text-inherit">yash.katyari@sapphirebroking.com</a></strong>.
        </p>

        {/* Grievance Redressal */}
        <p>
          <strong>Grievance Redressal:</strong> For complaints related to broking services, email us at <a href="mailto:support@sapphirebroking.com" className="font-bold underline decoration-dotted decoration-slate-400 text-inherit">support@sapphirebroking.com</a>. For depository-related issues, email us at <a href="mailto:dp@sapphirebroking.com" className="font-bold underline decoration-dotted decoration-slate-400 text-inherit">dp@sapphirebroking.com</a>. To escalate unresolved issues, contact our Grievance Redressal Officer: Mr. Undefined, Mobile: +91 Undefined. Alternatively, file complaints on the SEBI SCORES portal by registering with mandatory details like Name, PAN, Address, Mobile Number, and Email ID.
        </p>

        {/* Cybersecurity Issues */}
        <p>
          <strong>Cybersecurity Issues:</strong> Report cybersecurity concerns to <a href="mailto:abhigya.krishna@sapphirebroking.com" className="font-bold underline decoration-dotted decoration-slate-400 text-inherit">abhigya.krishna@sapphirebroking.com</a> or call us at <a href="tel:+919890336989" className="font-bold underline decoration-dotted decoration-slate-400 text-inherit">+91 98903 36989</a>.
        </p>

        {/* Regulatory Compliance */}
        <p>
          <strong>Regulatory Compliance:</strong> Investments in the securities market are subject to market risks. Please read all related documents carefully before investing. Brokerage will not exceed the SEBI-prescribed limit.
        </p>

        {/* Communication Policy */}
        <p>
          <strong>Communication Policy:</strong> By sharing your contact details, you consent to receive communication from us via Call/SMS/Email for a period of 12 months, even if registered under DND. We use your information for legitimate business purposes only and do not sell or rent your contact details to third parties.
        </p>

        <div>
          <strong>Attention Investors:</strong>
          <ol className="list-decimal pl-6 mt-2 space-y-2">
            {INVESTOR_POINTS.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ol>
        </div>

        <p>
          <strong>ODR Portal:</strong> Resolve disputes efficiently using SEBI&apos;s Online Dispute Resolution Portal:{" "}
          <Link target="_blank" href="https://smartodr.in/login">
            <span className="font-bold underline decoration-dotted decoration-slate-400">Smart ODR Portal</span>
          </Link>
        </p>
        <p>
          <strong>Charts are powered by:</strong>{" "}
          <Link target="_blank" href="https://www.tradingview.com">
            <span className="font-bold underline decoration-dotted decoration-slate-400">TradingView</span>
          </Link>
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 py-4">
        {modifiedExchanges.map((exchange, index, array) => (
          <a
            key={exchange.name}
            href={exchange.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-gray-400 ${
              index !== array.length - 1 ? "sm:border-r border-white sm:pr-4" : ""
            }`}
          >
            {exchange.name}
          </a>
        ))}
      </div>
    </div>
  );
};

const Footer = () => {
  const COMPANY_LINKS = [
    { title: "About Us", href: "/about" },
    { title: "Company Info", href: "#" },
    { title: "Pricing", href: "/pricing" },
    { title: "Contact Us", href: "/contact" },
    { title: "Gallery", href: "/gallery" },
    { title: "Support Portal", href: "https://support.sapphirebroking.com" },
    { title: "Become a Partner", href: "/become-a-partner" },
    { title: "Careers", href: "https://careers.sapphirebroking.com" },
  ];

  const LEGAL_LINKS = [
    { title: "Terms and Conditions", href: "/terms-and-conditions" },
    { title: "Risk Management Policy", href: "/risk-management-policy" },
    { title: "Privacy Policy", href: "/privacy-policy" },
    { title: "Investor Attention", href: "/investor-attention" },
    { title: "Investor Charter", href: "/investor-charter" },
    { title: "Aadhar Consent", href: "/aadhar-consent" },
    { title: "Do's and Don'ts of Investors", href: "/investor-dos-and-donts" },
    { title: "Rights of Investors", href: "/investor-rights" },
    { title: "Responsibilities of Investors", href: "/investor-responsibilities" },
    { title: "Code of Conduct for Participants", href: "/code-of-conduct-participants" },
  ];

  const ACCOUNT_LINKS = [
    { title: "Open an Account", href: "https://signup.sapphirebroking.com" },
     { title: "Minor Demat Account", href:"https://signup.sapphirebroking.com/minor"},
     {title: "NRI Demat Account", href:"https://signup.sapphirebroking.com/nri"},
     {title: "Corporate Demat Account", href:"https://signup.sapphirebroking.com/corporate"},
    { title: "Fund Transfer", href: "/fund-transfer" },
    { title: "MTF", href: "/mtf" },
    { title: "Account Closure", href: "/account-closure" },
    { title: "Collateral Haircut", href: "/collateral-haircut" },
    { title: "Risk Disclosure", href: "/risk-disclosure" },
   
  ];

  return (
    <>
      <footer className="bg-[#064D51] text-white p-4 sm:py-8 sm:px-20 max-w-7xl mx-auto">
        <div className="max-w-7xl  xl:max-w-7xl mx-auto">
          {/* Mobile Layout (hidden on sm and above) */}
          <div className="sm:hidden">
            {/* Full Width Sapphire Address */}
            <div className="w-full mb-8">
              <div className="flex items-center mb-4">
                <Image
                  src="/logo-white.svg"
                  alt="Logo"
                  width={32}
                  height={32}
                  priority
                />
                <h3 className="font-bold ml-2 text-lg">Sapphire</h3>
              </div>
              <SocialLinks />
            </div>

            {/* Two Column Layout for Mobile */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {/* Left Column: Company and Legal */}
              <div className="col-span-1 space-y-8">
                <LinkSection title="Company" links={COMPANY_LINKS} />
                <LinkSection title="Legal" links={LEGAL_LINKS} />
              </div>

              {/* Right Column: Account and Follow us + Download */}
              <div className="col-span-1 space-y-8">
                <LinkSection title="Account" links={ACCOUNT_LINKS} />
                
                <div>
                  <h3 className="font-bold mb-4 text-lg">Quick Links</h3>
                  {/* <SocialLinks /> */}
                  
                  <QuickLinks />
                  <h3 className="font-bold mb-4 text-lg">Download Our App</h3>
                  <div className="flex items-center justify-start gap-4">
                    <Image
                      src="/appstore.svg"
                      alt="App Store"
                      width={80}
                      height={50}
                    />
                    <Image
                      src="/playstore.svg"
                      alt="Google Play"
                      width={80}
                      height={50}
                      className="-ml-3"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Layout (hidden on xs, visible on sm and above) */}
          <div className="hidden sm:block">
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-2 mb-8">
              <div className="col-span-2 lg:col-span-1">
                <div className="flex items-center mb-4">
                  <Image
                    src="/logo-white.svg"
                    alt="Logo"
                    width={30}
                    height={30}
                    priority
                  />
                  <h3 className="font-bold ml-2 text-[20px]">Sapphire</h3>
                </div>
                <SocialLinks />
                <div className="hidden lg:flex flex-col justify-start gap-4">
                  <Image
                    src="/appstore.svg"
                    alt="App Store"
                    width={100}
                    height={80}
                  />
                  <Image
                    src="/playstore.svg"
                    alt="Google Play"
                    width={100}
                    height={80}
                  />
                </div>
              </div>

              <div className="hidden lg:block">
                <LinkSection title="Company" links={COMPANY_LINKS} />
              </div>
              <div className="hidden lg:block">
                <LinkSection title="Legal" links={LEGAL_LINKS} />
              </div>
              <div className="hidden lg:block">
                <LinkSection title="Account" links={ACCOUNT_LINKS} />
              </div>

              {/* SM/MD Layout - Company, Legal, Account, Follow us in responsive grid */}
              <div className="col-span-2 lg:hidden">
                <div className="grid grid-cols-2 gap-6">
                  <LinkSection title="Company" links={COMPANY_LINKS} />
                  <LinkSection title="Legal" links={LEGAL_LINKS} />
                  <LinkSection title="Account" links={ACCOUNT_LINKS} />
                  
                  <div className="col-span-1">
                    <h3 className="font-bold mb-4 text-[20px]">Quick Links</h3>
                    <QuickLinks />

                    <h3 className="font-bold mb-4 text-[20px]">Download Our App</h3>
                    <div className="flex items-center justify-start gap-4">
                      <Image
                        src="/appstore.svg"
                        alt="App Store"
                        width={100}
                        height={80}
                      />
                      <Image
                        src="/playstore.svg"
                        alt="Google Play"
                        width={100}
                        height={80}
                        className="-ml-3"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* LG+ Layout - Follow us column */}
              <div className="hidden lg:block col-span-1">
                <h3 className="font-bold mb-3 text-[20px]">Quick Links</h3>
                {/* <SocialLinks /> */}
                <QuickLinks />
              </div>
            </div>
          </div>
          
          <LegalSection />
        </div>
      </footer>
    </>
  );
};

export default Footer;