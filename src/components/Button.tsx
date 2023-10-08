import { PlusCircle } from 'lucide-react'
import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className="flex items-center justify-center gap-4 rounded-lg bg-blue-700 p-4 text-gray-100 transition-colors hover:bg-blue-500"
    >
      Criar <PlusCircle />
    </button>
  )
}
