import { useState } from 'react'
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter/ExpensesFilter'
import ExpensesList from './ExspensesList/ExpensesList'
import ExpensesChart from './ExpensesChart'

const Expenses = ({ expenses }) => {
  const [expensesYear, setExpensesYear] = useState('2020')
  const changeExpensesYear = (year) => {
    setExpensesYear(year)
  }

  const filterExpenses = () => {
    return  expenses.filter((expense) => {
      return expense.date.getFullYear().toString() === expensesYear
    })
  }

  const filteredExpenses = filterExpenses()

  return (
      <Card className="expenses">
        <ExpensesFilter selected={expensesYear} onYearChange={changeExpensesYear}/>
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList filteredExpenses={filteredExpenses} />
      </Card>
  )
}

export default Expenses