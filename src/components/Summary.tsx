

type Props = {
  total: number
  years: string[]
  selectedYear: string
  onChangeYear: (y: string) => void
  onSearch: (q: string) => void
}

export default function Summary({ total, years, selectedYear, onChangeYear, onSearch }: Props) {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-between mb-2">
        <div>
          <div className="small text-muted">Total</div>
          <div className="h5 mb-0">${total.toFixed(2)}</div>
        </div>

        <div style={{ minWidth: 160 }}>
          <select className="form-select form-select-sm" value={selectedYear} onChange={(e) => onChangeYear(e.target.value)}>
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mb-3">
        <input className="form-control form-control-sm" placeholder="Search title..." onChange={(e) => onSearch(e.target.value)} />
      </div>
    </div>
  )
}
