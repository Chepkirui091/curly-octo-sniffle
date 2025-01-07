import PendingTasks from "@/components/page-components/tasks/pending-tasks";
import CompletedTasks from "@/components/page-components/tasks/completed-tasks";
import {MdWavingHand} from "react-icons/md";
import TaskProgress from "@/components/page-components/tasks/task-progress";
import SimplePendingTasksPage from "@/components/page-components/tasks/pending-task-list";

const ToDoTasks = () => {
    return (
        <>
            <div className="flex space-x-2 text-4xl m-12 font-bold ">
                <h1>Welcome back, amanuel </h1>
                <MdWavingHand className="text-yellow-400" />
            </div>
            <div className="flex justify-between space-x-8  items-start border border-[#A1A3AB] p-8 m-12">
                <SimplePendingTasksPage/>
                <div className="flex flex-col left-6 space-y-4">
                    <TaskProgress />
                    <CompletedTasks/>
                </div>

            </div>

        </>
    )
}

export default ToDoTasks