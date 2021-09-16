import Dexie from 'dexie'
import { Task } from '../Model/Task'
import { initialActiveTasks, initialCompletedTasks } from '../Model/Tasks'

// TODO consider https://dexie.org/docs/Typescript#storing-real-classes-instead-of-just-interfaces
class TodoDB extends Dexie {
  // Declare implicit table properties.
  // (just to inform Typescript. Instanciated by Dexie in stores() method)
  ActiveTasks: Dexie.Table<Task, number> // number = type of the primkey
  CompletedTasks: Dexie.Table<Task, number> // number = type of the primkey
  // ...other tables goes here...
  async init () {
    if ((await this.ActiveTasks.count()) === 0) {
      await this.ActiveTasks.bulkAdd(initialActiveTasks)
    }
    if ((await this.CompletedTasks.count()) === 0) {
      await this.CompletedTasks.bulkAdd(initialCompletedTasks)
    }
  }

  constructor () {
    super('TodoDB')
    this.version(1).stores({
      ActiveTasks: '++id, task, status',
      CompletedTasks: '++id, task, status',
      // ...other tables goes here...//
    })
    // The following line is needed if your typescript
    // is compiled using babel instead of tsc:
    this.ActiveTasks = this.table('ActiveTasks')
    this.CompletedTasks = this.table('CompletedTasks')
    void this.init()
  }
}
export const todoDB = new TodoDB()
