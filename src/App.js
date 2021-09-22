import React, { useState } from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import ExpensesWrap from './components/Expenses/ExpensesWrap';
const DUMMY_EXPENSES = [
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
    date: new Date(2020, 2, 28),
  },
  {
    id: 'e4',
    title: 'Bucket - vintage ;)',
    amount: '12',
    date: new Date(2019, 0, 15),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = expense => {
    // console.log(expense);
    setExpenses(expenses => {
      return [expense, ...expenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpensesWrap items={expenses} />
    </div>
  );
};

export default App;
