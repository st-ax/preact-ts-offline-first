import { h } from 'preact'
import { useRef, useState } from 'preact/hooks'
import { useRecoilValue } from 'recoil'
import { Task } from '../../Model/Task'
import { TaskStatus } from '../../Model/TaskStatus'
import { ActiveTasksState, completeActiveTask, delActiveTask } from '../../Recoil/recoilState'
import CheckButton from '../ButtonComponents/CheckButton'
import DeleteButton from '../ButtonComponents/DeleteButton'
import Editable from '../Editable'

export default function ActiveTask () {
  const [Index, setIndex] = useState(-1)
  const [NewTask, setNewTask] = useState<Task>({ task: '', status: TaskStatus.Active })
  const ActiveTasks = useRecoilValue(ActiveTasksState)
  //   const CompletedTasks = useRecoilValue(CompletedTasksState)

  const onCheck = (index: number) => {
    console.log(index)
    void completeActiveTask(index)
  }
  const onDelete = (index: number) => {
    void delActiveTask(index)
  }
  const inputRef = useRef<any>()

  function handleEditTask (e: any, i: number) {
    // eslint-disable-next-line no-return-assign
    setNewTask(x => x.task = e.target.value)
    setIndex(i)
  }
  function pushTasks (e: any) {
    console.log(e)
  }

  return (
    <div class="container overflow-y:auto mx-auto mb-5">
      {ActiveTasks?.map((task, i) => {
        return (
          <div key={i} class="flex flex-wrap px-5 md:px-20">
            <CheckButton onCheck={onCheck} index={i} />
            <Editable
                            class="flex-grow w-2/3"
                            text={task.task}
                            placeholder="Write a task name"
                            type="input"
                            childRef={inputRef}
                            handleOnInput = {(e: any) => handleEditTask(e, i)}
                            handleKeyDown = {(e: any) => pushTasks(e)}
                        />
            <DeleteButton onDelete={onDelete} index={i} />
          </div>
        )
      })}
    </div>
  )
}
