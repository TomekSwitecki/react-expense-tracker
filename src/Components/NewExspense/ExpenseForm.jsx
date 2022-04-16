import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [userInput,setUserInput]=useState({
  //     enteredTitle:"",
  //     enteredAmount:"",
  //     enteredDate:""
  // });

  const titleChangeHandler = (event) => {
    // this method ensures all states snapshots are up to date!!!
    // setUserInput((prevValue)=>{
    //     return{
    //         ...prevValue,
    //         enteredTitle:event.target.value
    //     }
    // });

    // you should't do it like this , use method above!!!
    // setUserInput({
    //     ...userInput,
    //     enteredTitle:event.target.value
    // })

    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    //block page refreshing after submiting form
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredDate("");
    setEnteredAmount("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            value={enteredTitle}
            onChange={titleChangeHandler}
            type="text"
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={enteredAmount}
            onChange={amountChangeHandler}
            type="number"
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={enteredDate}
            onChange={dateChangeHandler}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
