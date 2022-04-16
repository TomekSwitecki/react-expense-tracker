import React,{useState} from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css"
const NewExpense = (props) =>
{

    const [isEditing,setIsEditing]=useState(false);

    const startEditingHandler=()=>
    {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    const onSaveExpenseDataHandler=(eneteredExpenseData)=>
    {
        const expenseData={
            ...eneteredExpenseData,
            id:Math.random().toString()
        };
        console.log(expenseData);
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };
    return (
      <div className="new-expense">
        {!isEditing && 
          <button onClick={startEditingHandler}>Add New Expense</button>
        }
        {isEditing && (
          <ExpenseForm
            onSaveExpenseData={onSaveExpenseDataHandler}
            onCancel={stopEditingHandler}
          />
        )}
      </div>
    );
}

export default NewExpense;