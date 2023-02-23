import React from 'react';
import { useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const PageHome = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);
    console.log('location', location, searchParams, currentParams);
  }, []);

  return (
    <section>
      这是首页<Link to='/user'>跳转到用户信息</Link>
    </section>
  );
};

export default PageHome;
