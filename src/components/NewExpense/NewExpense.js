import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = props => {
  const [isFormEditing, setIsFormEditing] = useState(false);

  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const startEditHandler = () => {
    setIsFormEditing(true);
  };
  const stopEditHandler = () => {
    setIsFormEditing(false);
  };

  return (
    <div className="new-expense">
      {!isFormEditing && (
        <button onClick={startEditHandler}>Add New Expense</button>
      )}
      {isFormEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
