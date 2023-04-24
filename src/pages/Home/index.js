import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

import { useQuery } from '@/stores/hooks';
import { bubbleSort, quickSort } from '@/utils/sort';

const PageHome = () => {
  const query = useQuery();

  useEffect(() => {
    console.log('bubbleSort', quickSort([3, 2, 1, 4, 6]));
  }, []);

  return <section></section>;
};

export default PageHome;
