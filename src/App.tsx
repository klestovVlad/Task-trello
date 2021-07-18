/* eslint-disable no-use-before-define */
import React from 'react';
import { Board, NewColumn } from './styles/AppStyles';
import { listData } from './listData.ts';

const App: React.FC = () => (
  <Board>
    {listData.map((item: { id: React.Key | null | undefined; }) => (
      <NewColumn
        key={item.id}
      />
    ))}
  </Board>
);

export default App;
