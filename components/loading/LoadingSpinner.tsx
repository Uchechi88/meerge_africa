import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin border-t-4 border-blue-500 border-solid w-12 h-12 rounded-full"></div>
    </div>
  );
};

export default LoadingSpinner;
