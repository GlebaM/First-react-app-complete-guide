import './ExpenseItem.css';

function ExpenseItem(props) {
  const day = props.date.toLocaleString('en-Us', { day: '2-digit' });
  const month = props.date.toLocaleString('en-Us', { month: 'long' });
  const year = props.date.getFullYear();
  //   props.date.toLocaleString('en-Us', { year: 'long' });
  return (
    <div className="expense-item">
      <div>
        {/* {props.date.toLocaleDateString()} */}
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount} PLN</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
