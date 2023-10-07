import { Check, Trash2Icon } from 'lucide-react'

export function Card() {
  return (
    <div className="flex items-center gap-4 rounded-lg border border-gray-400 bg-gray-500 p-4">
      <input type="checkbox" className="peer sr-only" name="" id="is-done" />
      <label
        htmlFor="is-done"
        className="flex h-4 w-4 items-center justify-center rounded-full border border-blue-500 text-transparent transition-colors hover:border-blue-700 hover:bg-blue-700/25 peer-checked:border-purple-700 peer-checked:bg-purple-700 peer-checked:text-gray-100 peer-checked:hover:border-purple-500 peer-checked:hover:bg-purple-500"
      >
        <Check />
      </label>
      <p className="line-clamp-2 text-gray-100 peer-checked:text-gray-300 peer-checked:line-through">
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </p>
      <button className="rounded-lg p-2 text-gray-300 transition-colors hover:bg-gray-400 hover:text-danger">
        <Trash2Icon />
      </button>
    </div>
  )
}
