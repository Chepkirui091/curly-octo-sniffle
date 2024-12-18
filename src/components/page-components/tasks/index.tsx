import PendingTasks from "@/components/page-components/tasks/pending-tasks";
import CompletedTasks from "@/components/page-components/tasks/completed-tasks";

const ToDoTasks = () => {
    return (
        <>
            <div className="flex justify-between items-center border border-gray-200 p-6">
                <PendingTasks />
                <CompletedTasks />
            </div>

        </>
    )
}

export default ToDoTasks