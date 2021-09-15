import { selector } from 'recoil'
import { Task } from '../Model/Task'
import { todoDB } from './offline'

const getTaskStates = async function getTaskStates () {
  console.log(await todoDB.ActiveTasks.count(), 'active tasks in db')
  const currentActiveTasks = await todoDB.ActiveTasks.toArray()
  console.log(currentActiveTasks)
}
void getTaskStates()

export const addActiveTask = async (newTask: Task) => await todoDB.ActiveTasks.add(newTask)
export const delActiveTask = async (idToDelete: number) => await todoDB.ActiveTasks.delete(idToDelete)

export const completeActiveTask = async (idToComplete: number) => {
  await todoDB.CompletedTasks.add(await todoDB.ActiveTasks.get(idToComplete))
  await todoDB.ActiveTasks.delete(idToComplete)
}

export const ActiveTasksState = selector<Task[]>({
  key: 'ActiveTasksState',
  // default: (localStorage.getItem('ActiveTasks') !== null) ? JSON.parse(localStorage.getItem('ActiveTasks')!) : [],
  get: async () => await todoDB.ActiveTasks.toArray(),
})
export const CompletedTasksState = selector<Task[]>({
  key: 'CompletedTasksState',
  // default: (localStorage.getItem('CompletedTasks') !== null) ? JSON.parse(localStorage.getItem('CompletedTasks')!) : [],
  get: async () => await todoDB.CompletedTasks.toArray(),
})
