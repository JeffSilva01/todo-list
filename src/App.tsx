import logo from './assets/Logo.svg'
import clipboard from './assets/Clipboard.svg'
import { Input } from './components/Input'
import { Button } from './components/Button'
import { Card } from './components/Card'
import { FormEvent, useRef, useState } from 'react'

type Task = {
  isDone: boolean
  task: string
}

export default function App() {
  const [todoList, setTodoList] = useState<Task[]>([])
  const inputValue = useRef<HTMLInputElement>(null)

  const completedTasks = todoList.filter((task) => task.isDone)

  function handleAddTask(event: FormEvent) {
    event.preventDefault()
    const newTask = inputValue.current?.value

    if (!newTask) {
      return
    }

    setTodoList((state) => [...state, { task: newTask, isDone: false }])

    inputValue.current.value = ''
  }

  function handleToggleIsDone(indexTask: number) {
    const newTodoList = todoList.map((task, index) => {
      if (index === indexTask) {
        task.isDone = !task.isDone
      }

      return task
    })

    setTodoList(newTodoList)
  }

  function handleDeleteTask(indexTask: number) {
    const newTodoList = todoList.filter((_, index) => index !== indexTask)

    setTodoList(newTodoList)
  }

  return (
    <div className="h-screen bg-gray-600">
      <div className="flex h-52 w-screen items-center justify-center bg-gray-700">
        <img src={logo} alt="" />
      </div>
      <div className="container mx-auto">
        <form
          onSubmit={handleAddTask}
          className="flex -translate-y-1/2 items-center gap-2"
        >
          <Input ref={inputValue} />
          <Button type="submit" />
        </form>
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center gap-2">
            <p className="text-sm font-bold text-blue-500">Tarefas criadas</p>
            <samp className="rounded-full bg-gray-400 px-2 py-0.5 text-sm font-bold text-gray-200">
              {todoList.length}
            </samp>
          </div>
          <div className="flex items-center justify-center gap-2">
            <p className="text-sm font-bold text-purple-500">Concluídas</p>
            <samp className="rounded-full bg-gray-400 px-2 py-0.5 text-sm font-bold text-gray-200">
              {completedTasks.length}
            </samp>
          </div>
        </div>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 rounded-lg border-t border-gray-400">
          {todoList.length === 0 && (
            <img src={clipboard} className="my-16 h-14 w-14" alt="" />
          )}
          {todoList.map((item, index) => (
            <Card
              key={item.task}
              toggleIsDone={() => handleToggleIsDone(index)}
              isDone={item.isDone}
              task={item.task}
              deleteTask={() => handleDeleteTask(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
