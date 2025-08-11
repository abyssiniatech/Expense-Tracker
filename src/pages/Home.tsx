
import { useState, useMemo } from 'react'
import type { Expense } from '../types/expense'
import { useLocalStorage } from '../hooks/useLocalStorage'
import ExpenseForm from '../components/ExpenseForm'
import ExpenseList from '../components/ExpenseList'
import Summary from '../components/Summary'

const SAMPLE: Expense[] = [
  { id: crypto.randomUUID(), title: 'Coffee', amount: 3.5, date: '2025-08-10', category: 'Food' },
  { id: crypto.randomUUID(), title: 'Bus ticket', amount: 1.25, date: '2025-08-09', category: 'Transport' },
]

export default function Home() {
  const [expenses, setExpenses] = useLocalStorage<Expense[]>('expenses', SAMPLE)
  const [yearFilter, setYearFilter] = useState('all')
  const [search, setSearch] = useState('')

  const filteredExpenses = useMemo(() => {
    return expenses.filter((exp) => {
      if (yearFilter !== 'all' && new Date(exp.date).getFullYear().toString() !== yearFilter) return false
      if (search && !exp.title.toLowerCase().includes(search.toLowerCase())) return false
      return true
    })
  }, [expenses, yearFilter, search])

  const years = useMemo(() => {
    const uniqueYears = Array.from(new Set(expenses.map((e) => new Date(e.date).getFullYear().toString())))
    return ['all', ...uniqueYears.sort((a, b) => Number(b) - Number(a))]
  }, [expenses])

  function addExpense(exp: Omit<Expense, 'id'>) {
    setExpenses((prev) => [{ ...exp, id: crypto.randomUUID() }, ...prev])
  }

  function deleteExpense(id: string) {
    setExpenses((prev) => prev.filter((e) => e.id !== id))
  }

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="mb-6">Expense Tracker</h1>

      <div className="row">
        <div className="col-md-6 mb-4">
          <ExpenseForm onAdd={addExpense} />
        </div>
        <div className="col-md-6">
          <Summary
            total={expenses.reduce((sum, e) => sum + e.amount, 0)}
            years={years}
            selectedYear={yearFilter}
            onChangeYear={setYearFilter}
            onSearch={setSearch}
          />
          <ExpenseList expenses={filteredExpenses} onDelete={deleteExpense} />
        </div>
      </div>
    </div>
  )
}
