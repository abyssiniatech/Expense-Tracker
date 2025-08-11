
import type { Expense } from '../types/expense'
import ExpenseItem from './ExpenseItem'

type Props = {
  expenses: Expense[]
  onDelete: (id: string) => void
}

export default function ExpenseList({ expenses, onDelete }: Props) {
  if (!expenses.length) {
    return <div className="text-center text-muted small py-4">No expenses yet.</div>
  }

  return (
    <div className="list-group">
      {expenses.map((exp) => (
        <ExpenseItem key={exp.id} expense={exp} onDelete={onDelete} />
      ))}
    </div>
  )
}
