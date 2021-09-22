import React from 'react';
import './ExpensesFilter.css';

const ExpensesFilter = props => {
  const filterHandler = e => {
    props.onChangeFilter(e.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filer by year</label>
        <select value={props.selected} onChange={filterHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
        </select>
      </div>
    </div>
  );
};
export default ExpensesFilter;
