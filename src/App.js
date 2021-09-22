import React, { useState } from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import ExpensesWrap from './components/Expenses/ExpensesWrap';
const App = () => {
  const [expenses, setExpenses] = useState([
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
  ]);
  const addExpenseHandler = expense => {
    // console.log(expense);
    setExpenses(expenses => {
      return [...expenses, expense];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpensesWrap expenses={expenses} />
    </div>
  );
};

export default App;
