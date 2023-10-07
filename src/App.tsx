import logo from './assets/Logo.svg'
import clipboard from './assets/Clipboard.svg'
import { NewTaskInput } from './components/NewTaskInput'
import { Button } from './components/Button'
import { Card } from './components/Card'

export default function App() {
  return (
    <div className="h-screen bg-gray-600">
      <div className="flex h-52 w-screen items-center justify-center bg-gray-700">
        <img src={logo} alt="" />
      </div>
      <div className="container mx-auto">
        <form action="" className="flex -translate-y-1/2 items-center gap-2">
          <NewTaskInput />
          <Button />
        </form>
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center gap-2">
            <p className="text-sm font-bold text-blue-500">Tarefas criadas</p>
            <samp className="rounded-full bg-gray-400 px-2 py-0.5 text-sm font-bold text-gray-200">
              0
            </samp>
          </div>
          <div className="flex items-center justify-center gap-2">
            <p className="text-sm font-bold text-purple-500">Concluídas</p>
            <samp className="rounded-full bg-gray-400 px-2 py-0.5 text-sm font-bold text-gray-200">
              0
            </samp>
          </div>
        </div>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 rounded-lg border-t border-gray-400">
          <img src={clipboard} className="my-16 h-14 w-14" alt="" />
          <Card />
        </div>
      </div>
    </div>
  )
}
