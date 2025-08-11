
import type { Expense } from '../types/expense'
import { FiTrash2 } from 'react-icons/fi'

type Props = {
  expense: Expense
  onDelete: (id: string) => void
}

export default function ExpenseItem({ expense, onDelete }: Props) {
  const d = new Date(expense.date)
  const dateStr = d.toLocaleDateString()

  return (
    <div className="d-flex align-items-center justify-content-between py-2 border-bottom">
      <div>
        <div className="fw-semibold">{expense.title}</div>
        <div className="text-muted small">
          {expense.category || '—'} · {dateStr}
        </div>
      </div>

      <div className="d-flex align-items-center gap-3">
        <div className="text-end">
          <div className="fw-bold">${expense.amount.toFixed(2)}</div>
        </div>
        <button className="btn btn-sm btn-outline-danger" onClick={() => onDelete(expense.id)} title="Delete">
          <FiTrash2 />
        </button>
      </div>
    </div>
  )
}
