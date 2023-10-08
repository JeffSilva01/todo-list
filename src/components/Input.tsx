import { InputHTMLAttributes, forwardRef } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  function Input(props, ref) {
    return (
      <input
        className="w-full rounded-lg border border-gray-700 bg-gray-500 p-4 text-gray-300 outline-none placeholder:text-gray-300 focus:border-purple-700"
        placeholder="Adicione uma nova tarefa"
        type="text"
        ref={ref}
        {...props}
      />
    )
  },
)
