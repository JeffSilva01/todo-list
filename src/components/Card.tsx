import { Check, Trash2Icon } from 'lucide-react'
import { useId } from 'react'

type CardProps = {
  isDone: boolean
  task: string
  toggleIsDone: () => void
  deleteTask: () => void
}

export function Card({
  isDone = false,
  task,
  toggleIsDone,
  deleteTask,
}: CardProps) {
  const inputId = useId()
  return (
    <div className="flex w-full items-center gap-4 rounded-lg border border-gray-400 bg-gray-500 p-4">
      <input
        type="checkbox"
        className="peer sr-only"
        name=""
        id={inputId}
        checked={isDone}
        onChange={toggleIsDone}
      />
      <label
        htmlFor={inputId}
        className="flex h-4 w-4 cursor-pointer items-center justify-center rounded-full border border-blue-500 text-transparent transition-colors hover:border-blue-700 hover:bg-blue-700/25 peer-checked:border-purple-700 peer-checked:bg-purple-700 peer-checked:text-gray-100 peer-checked:hover:border-purple-500 peer-checked:hover:bg-purple-500"
      >
        <Check />
      </label>
      <p className="line-clamp-2 flex-1 text-gray-100 peer-checked:text-gray-300 peer-checked:line-through">
        {task}
      </p>
      <button
        onClick={deleteTask}
        className="rounded-lg p-2 text-gray-300 transition-colors hover:bg-gray-400 hover:text-danger"
      >
        <Trash2Icon />
      </button>
    </div>
  )
}
