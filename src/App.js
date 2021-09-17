import React from 'react';
import ExpensesWrap from './components/ExpensesWrap';

function App() {
  const expenses = [
    {
      title: `Ann's birthday party`,
      amount: '110',
      date: new Date(2021, 8, 18),
    },
    {
      title: 'Desk',
      amount: '254',
      date: new Date(2021, 5, 8),
    },
    {
      title: 'Car insurance',
      amount: '514',
      date: new Date(2021, 2, 28),
    },
    {
      title: 'Bucket',
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
}

export default App;
