"use client";
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const TopicPage: React.FC = () => {
  const router = useRouter();
  useEffect(() => {
    router.replace('/');
  }, [router]);
  return null;
};

export default TopicPage;
