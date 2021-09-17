import React from 'react';
import ExpensesWrap from './components/Expenses/ExpensesWrap';

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: `Ann's birthday party`,
      amount: '110',
      date: new Date(2021, 8, 18),
    },
    {
      id: 'e2',
      title: 'Desk (new)',
      amount: '254',
      date: new Date(2021, 5, 8),
    },
    {
      id: 'e3',
      title: 'Car insurance',
      amount: '514',
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'Bucket - vintage ;)',
      amount: '12',
      date: new Date(2021, 0, 15),
    },
  ];
  return (
    <div>
      <h2>Lets get started</h2>
      <ExpensesWrap expenses={expenses} />
    </div>
  );
};

export default App;
