import React,{useState} from "react";
import "./ExpenseList.css"
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
const ExpenseList=(props) =>
{ const [filteredYear,setFilteredYear]=useState("2020");
  const filterChangehandler=(selectedYear)=>
  {
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  }

  const filteredExpense=props.expenses.filter(e=>
    {
      return e.date.getFullYear().toString()===filteredYear;
    });
  {

  }

return (
  <div>
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filteredYear}
        onChangeFilter={filterChangehandler}
      />
      {filteredExpense.length === 0 && <p>No expenses</p>}
      {filteredExpense.length > 0 &&
        filteredExpense.map((e, index) => (
          <ExpenseItem
            key={e.id}
            title={e.title}
            amount={e.amount}
            date={e.date}
          />
        ))}
      <ExpensesChart expenses={filteredExpense} />

      {/* <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      />
      <ExpenseItem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      />
      <ExpenseItem
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      /> */}
    </Card>
  </div>
);
}

export default ExpenseList;