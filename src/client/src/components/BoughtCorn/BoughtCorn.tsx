import { useState, useEffect, useCallback } from 'react';
import { getBuyCornCounter } from './utils';

export interface BoughtCornProps {
  email?: string;
}

const BoughtCorn = ({ email }: BoughtCornProps) => {
  const [count, setCount] = useState(0);

  const fetchCounter = useCallback(async () => {
    const counter = await getBuyCornCounter(email);
    setCount(counter);
  }, [email]);

  useEffect(() => {
    // Set up interval for subsequent fetches every 30 seconds (30000 milliseconds)
    const intervalId = setInterval(() => {
      fetchCounter();
    }, 30000);

    fetchCounter();

    // Clean up interval when component unmounts
    return () => clearInterval(intervalId);
  }, [fetchCounter]);

  return (
  <div className="flex items-center justify-center h-full">
    <span
      className="inline-block bg-gray-200 rounded-full px-8 py-1 text-4xl font-semibold text-gray-700 mr-2 mb-2"
    >
      {count}
    </span>
  </div>
  );
}

export default BoughtCorn;