import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageLayout = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log('pathname', pathname);
  }, [pathname]);

  return <section>{children}</section>;
};

export default PageLayout;
