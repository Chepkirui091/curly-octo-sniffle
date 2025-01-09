import CompletedTasks from "@/components/page-components/tasks/completed-tasks";
import {MdWavingHand} from "react-icons/md";
import TaskProgress from "@/components/page-components/tasks/task-progress";
import SimplePendingTasksPage from "@/components/page-components/tasks/pending-task-list";

const ToDoTasks = () => {
    return (
        <>
            <div className="flex space-x-2 text-4xl m-12 font-bold ">
                <h1>Welcome back, Emmanuel </h1>
                <MdWavingHand className="text-yellow-400" />
            </div>
            <div className="lg:flex justify-between space-x-8  items-start border border-[#A1A3AB] p-8 m-12">
                <div className="w-full lg:w-1/2">
                    <SimplePendingTasksPage />
                </div>
                <div className="flex flex-col left-6 space-y-4 w-full lg:w-1/2">
                    <TaskProgress />
                    <CompletedTasks/>
                </div>

            </div>

        </>
    )
}

export default ToDoTasks