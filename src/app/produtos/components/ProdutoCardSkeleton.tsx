import React from 'react';

const ProdutoCardSkeleton = () => {
  return (
    <div className="flex flex-col justify-between items-center overflow-hidden max-w-[225px] w-full mb-4 animate-pulse">
      <div className="text-center w-full">
        <div className="h-6 bg-gray-300 rounded w-3/4 mx-auto mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2 mx-auto mb-3"></div>
      </div>
      <div className="border-[1px] h-[585px] max-h-[585px] border-gray-400 w-full flex flex-col p-2 gap-4">
        <div className="bg-gray-300 h-[290px] w-full rounded"></div>
        <div className="flex flex-col justify-between flex-1 gap-4">
          <div className="h-16 bg-gray-300 rounded w-full"></div>
          <div className="flex justify-between items-end">
            <div className="flex flex-col gap-2">
              <div className="h-4 bg-gray-300 rounded w-16"></div>
              <div className="flex gap-2">
                <div className="h-4 w-4 bg-gray-300 rounded-full"></div>
                <div className="h-4 w-4 bg-gray-300 rounded-full"></div>
                <div className="h-4 w-4 bg-gray-300 rounded-full"></div>
              </div>
            </div>
            <div className="flex flex-col items-end gap-2">
              <div className="h-4 bg-gray-300 rounded w-16"></div>
              <div className="h-6 bg-gray-300 rounded w-20"></div>
              <div className="h-3 bg-gray-300 rounded w-24"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-2">
        <div className="h-10 bg-gray-300 rounded w-full"></div>
      </div>
    </div>
  );
};

export default ProdutoCardSkeleton;
