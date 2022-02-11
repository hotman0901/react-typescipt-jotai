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
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h2>count: {count}</h2>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="button"
        onClick={() => setCount((value) => value + 1)}
      >
        add +1
      </button>
      <Child />
    </div>
  );
};

export default HomeView;
