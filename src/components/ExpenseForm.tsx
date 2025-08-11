import React, { useState } from 'react'
import type { Expense } from '../types/expense'

type Props = {
  onAdd: (expense: Omit<Expense, 'id'>) => void
}

export default function ExpenseForm({ onAdd }: Props) {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState('')
  const [category, setCategory] = useState('')
  const [error, setError] = useState<string | null>(null)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)

    if (!title.trim()) return setError('Please enter a title')
    const amt = Number(amount)
    if (!amount || Number.isNaN(amt) || amt <= 0) return setError('Please enter a valid amount')
    if (!date) return setError('Please choose a date')

    onAdd({ title: title.trim(), amount: amt, date, category: category.trim() || undefined })

    setTitle('')
    setAmount('')
    setDate('')
    setCategory('')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      {error && <div className="alert alert-danger p-2">{error}</div>}

      <div className="mb-2">
        <label className="form-label small">Title</label>
        <input
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g., Coffee"
        />
      </div>

      <div className="mb-2">
        <label className="form-label small">Amount</label>
        <input
          className="form-control"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="0.00"
          inputMode="decimal"
        />
      </div>

      <div className="mb-2">
        <label className="form-label small">Date</label>
        <input
          className="form-control"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label small">Category (optional)</label>
        <input
          className="form-control"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>

      <div className="d-flex justify-content-end">
        <button type="submit" className="btn btn-custom text-white">
          Add Expense
        </button>
      </div>
    </form>
  )
}
