import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = props => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = e => {
    setEnteredTitle(e.target.value);
  };
  const amountChangeHandler = e => {
    setEnteredAmount(e.target.value);
  };
  const dateChangeHandler = e => {
    setEnteredDate(e.target.value);
  };
  const submitHandler = e => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    props.onCancel();
    // const sendData = fetch()
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
          />
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            onChange={dateChangeHandler}
            min="2018-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="text" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

//Alternative approach
// const [userInput, setUserInput] = useState({
//   enteredTitle: '',
//   enteredAmount: '',
//   enteredDate: '',
// });

// const titleChangeHandler = e => {
//   // setUserInput({ ...userInput, enteredTitle: e.target.value });
//   setUserInput(prevState => {
//     return { ...prevState, enteredTitle: e.target.value };
//   });
// };
// const amountChangeHandler = e => {
//   setUserInput(prevState => {
//     return { ...prevState, enteredAmount: e.target.value };
//   });
// };
// const dateChangeHandler = e => {
//   setUserInput(prevState => {
//     return { ...prevState, enteredDate: e.target.value };
//   });
// };
