import React from 'react';
import { useAtom } from 'jotai';

import './index.scss'

import { countAtom } from '@/jotai/atoms';

const Child: React.FC = () => {
  const [count, ] = useAtom(countAtom);
  return (
    <div className="child">
      <div>child</div>
      <h2>{count}</h2>
    </div>
  );
};

export default Child;
