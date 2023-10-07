import { PlusCircle } from 'lucide-react'

export function Button() {
  return (
    <button className="flex items-center justify-center gap-4 rounded-lg bg-blue-700 p-4 text-gray-100 transition-colors hover:bg-blue-500">
      Criar <PlusCircle />
    </button>
  )
}
