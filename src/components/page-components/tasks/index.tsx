import PendingTasks from "@/components/page-components/tasks/pending-tasks";
import CompletedTasks from "@/components/page-components/tasks/completed-tasks";
import {MdWavingHand} from "react-icons/md";

const ToDoTasks = () => {
    return (
        <>
            <div className="flex space-x-2 text-4xl m-12 font-bold">
                <h1>Welcome back, amanuel </h1>
                <MdWavingHand className="text-yellow-400" />
            </div>
            <div className="flex justify-between  items-center border border-gray-200 p-8 m-12">
                <PendingTasks/>
                <CompletedTasks/>
            </div>

        </>
    )
}

export default ToDoTasks