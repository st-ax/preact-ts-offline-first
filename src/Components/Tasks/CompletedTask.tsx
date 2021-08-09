import { h } from 'preact';
import { StateUpdater } from 'preact/hooks';
import DeleteButton from '../ButtonComponents/DeleteButton';
import { Task } from '../../Model/Task';

export default function CompletedTask(props: any) {
    const CompletedTasks: Task[] = props.CompletedTasks;
    const onDelete: StateUpdater<number> = props.onDelete;
    return (
        <div class="container overflow-y:auto mx-auto mt-5 pb-2">
            {CompletedTasks?.map((task, i) => {
                return (
                    <div class="flex flex-wrap px-5 md:px-20">
                        <DeleteButton onDelete={onDelete} index={i} />
                        <p class="flex-grow overflow-ellipsis overflow-hidden w-2/3 line-through">{task.task}</p>
                    </div>
                );
            })}
        </div>
    )
}
