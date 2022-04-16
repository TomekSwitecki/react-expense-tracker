import React from "react";
import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem=(props) => {

  return (
    <Card className="expense-item">
      <div className="expense-item__description">
        <div className="expense-item__info__container">
          <h2>{props.title}</h2>
          <ExpenseDate date={props.date} />
        </div>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
