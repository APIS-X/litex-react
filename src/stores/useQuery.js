import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

export const useQuery = () => {
  const [searchParams] = useSearchParams();
  return Object.fromEntries([...searchParams]);
};
