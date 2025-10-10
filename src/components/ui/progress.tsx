interface ProgressProps {
  label: string
  value: number
}
const NOT_VALUE = 0
export default function Progress({ label, value }: ProgressProps) {
  return (
    <div className="w-full">
      <div className="mb-1 flex justify-between pt-2">
        <span className="font-poppins text-xs font-normal leading-none tracking-normal text-card-progress-text">
          {label}
        </span>
        <span className="font-poppins text-xs font-semibold leading-none tracking-normal text-card-progress-text">
          {value === NOT_VALUE ? 'ZU' : value}
        </span>
      </div>
      {value > NOT_VALUE && (
        <div className="h-1.5 w-full rounded-full bg-card-progress-container">
          <div
            className="h-1.5 rounded-full bg-card-progress-bar transition-all duration-300"
            style={{ width: `${value}%` }}
          />
        </div>
      )}
    </div>
  )
}
