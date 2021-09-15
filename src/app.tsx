import { h } from 'preact'
import { useRecoilValue } from 'recoil'
import Footer from './Components/Footer'
// import InitializingServiceWorker from './Components/ServiceWorker'
import ActiveTask from './Components/Tasks/ActiveTask'
import AddTasks from './Components/Tasks/AddTasks'
import CompletedTask from './Components/Tasks/CompletedTask'
import { Task } from './Model/Task'
import { ActiveTasksState, CompletedTasksState } from './Recoil/recoilState'

export const App = () => {
  // InitializingServiceWorker()
  const ActiveTasks = useRecoilValue<Task[]>(ActiveTasksState)
  const CompletedTasks = useRecoilValue<Task[]>(CompletedTasksState)

  // useEffect(() => {
  //   localStorage.setItem('ActiveTasks', JSON.stringify(ActiveTasks))
  // }, [ActiveTasks])

  // useEffect(() => {
  //   localStorage.setItem('CompletedTasks', JSON.stringify(CompletedTasks))
  // }, [CompletedTasks])

  function returnLineBreak (): any {
    if (CompletedTasks.length > 0 && ActiveTasks.length > 0) {
      return (
        <hr />
      )
    }
  }

  console.log(`Active Tasks: ${ActiveTasks.length}`)
  console.log(`Completed Tasks: ${CompletedTasks.length}`)

  return (
    <div className="container mx-auto lg:w-1/2">
      <h1 className="text-5xl">Todo App</h1>
      <AddTasks />
      <ActiveTask />
      {returnLineBreak()}
      <CompletedTask />
      <Footer />
    </div>
  )
}
