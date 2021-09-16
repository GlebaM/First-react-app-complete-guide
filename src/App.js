import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    {
      title: `Ann's birthday party`,
      amount: '110',
      date: new Date(2021, 2, 28),
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
      date: new Date(2021, 1, 15),
    },
  ];
  return (
    <div>
      {expenses.map(exp => {
        let title = exp.title;
        let amount = exp.amount;
        let date = exp.date;
        return <ExpenseItem title={title} amount={amount} date={date} />;
      })}
    </div>
    // <ExpenseItem
    //     title={expenses[0].title}
    //     amount={expenses[0].amount}
    //     date={expenses[0].date}
    //   />
    //   <ExpenseItem
    //     title={expenses[1].title}
    //     amount={expenses[1].amount}
    //     date={expenses[1].date}
    //   />
    //   <ExpenseItem
    //     title={expenses[2].title}
    //     amount={expenses[2].amount}
    //     date={expenses[2].date}
    //   />
    //   <ExpenseItem
    //     title={expenses[3].title}
    //     amount={expenses[3].amount}
    //     date={expenses[3].date}
    //   />
  );
}

export default App;
