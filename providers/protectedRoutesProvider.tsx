'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import LoadingSpinner from '@/components/loading/LoadingSpinner';

interface ProtectedRouteProps {
    children: React.ReactNode;
  }
  
  const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const router = useRouter();
    const [isMounted, setIsMounted] = useState(false);
    const [isLoading, setIsLoading] = useState(true); 
  
    useEffect(() => {
      setIsMounted(true); 
      const accessToken = localStorage?.getItem('accessToken');
  
      if (!accessToken) {
        router.replace('/restaurant/login'); 
      } else {
        setIsLoading(false);
      }
    }, [router]);
  
    if (!isMounted || isLoading) {
      return <LoadingSpinner />; 
    } 
    return <>{children}</>; 
  };
  
  export default ProtectedRoute;
