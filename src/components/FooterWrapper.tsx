// components/FooterWrapper.tsx
"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";
// import Opportunities from "./product/Opportunities"; // Temporarily removed due to missing module

// Pages that should not display the footer
const excludedPaths = [
  "/terms-and-conditions",
  "/risk-management-policy",
  "/privacy-policy",
  "/investor-attention",
  "/investor-charter",
  "/investor-dos-and-donts",
  "/investor-rights",
  "/investor-responsibilities",
  "/become-a-partner",
  "/code-of-conduct-participants",
];

export default function FooterWrapper() {
  const pathname = usePathname();

  // Check if current path is in the excluded list or starts with /signup
  const isSignupPage = pathname?.startsWith("/signup");
  const isExcludedPage = excludedPaths.some((path) => pathname === path);

  // Return null if on signup page or excluded page
  if (isSignupPage) return null;
  if (isExcludedPage) return (
    <>
      <Footer />
    </>
  );

  return (
    <>
      {/* <Opportunities /> */}
      <Footer />
    </>
  );
}
