import React from 'react';
import { useAtom } from 'jotai';

import './app.scss';

import Child from '@/components/child';
import { countAtom } from '@/jotai/atoms';

const HomeView: React.FC = () => {
  const [count, setCount] = useAtom(countAtom);
  return (
    <div className="content parent">
      <div>parent</div>
      <h2>{count}</h2>
      <button onClick={() => setCount((value) => value + 1)}>one up</button>
      <Child />
    </div>
  );
};

export default HomeView;
