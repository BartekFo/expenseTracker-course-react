import React, { useState } from 'react'
import './NewExpense.css'
import ExpenseForm from '../ExpenseForm/ExpenseForm'

const NewExpense = ({ onAddExpense }) => {
  const [isAddExpensesModalOpen, setIsAddExpensesModalOpen] = useState(false)

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    onAddExpense(expenseData)
  }

  const toggleAddExpensesModal = () => {
    setIsAddExpensesModalOpen(!isAddExpensesModalOpen)
  }

  if (!isAddExpensesModalOpen) {
    return <div className="new-expense">
      <button onClick={toggleAddExpensesModal}>Add New Expense</button>
    </div>
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} toggleAddExpensesModal={toggleAddExpensesModal} />
    </div>
  )
}

export default NewExpense