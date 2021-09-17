import React from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './ExpensesWrap.css';

const ExpensesWrap = props => {
  return (
    <Card className="expenses">
      {props.expenses.map(item => {
        return (
          <ExpenseItem
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        );
      })}
    </Card>
  );
};
export default ExpensesWrap;
