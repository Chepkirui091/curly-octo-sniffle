import PendingTasks from "@/components/page-components/tasks/pending-tasks";
import { MdOutlinePendingActions } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import React, { useState } from "react";
import CreateTaskDialog from "@/components/page-components/tasks/create-task";

const PendingTaskList = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    return (
        <>
            <div className="shadow-md px-6 pb-6 rounded-2xl">
                <div className="flex items-center justify-between mb-4">
                    {/* To-Do Header */}
                    <div className="flex">
                        <MdOutlinePendingActions className="text-gray-400 text-xl" />
                        <span className="ml-2 text-[#FF6767]">To-Do</span>
                    </div>

                    {/* Add Task Button */}
                    <div
                        className="flex items-center cursor-pointer"
                        onClick={() => setIsDialogOpen(true)}
                    >
                        <IoIosAdd className="text-[#FF6767] text-xl" />
                        <span className="ml-2 text-gray-400">Add Task</span>
                    </div>
                </div>

                <PendingTasks />
            </div>

            {/* Task Creation Dialog */}
            <CreateTaskDialog
                open={isDialogOpen}
                onClose={() => setIsDialogOpen(false)}
            />
        </>
    );
};

export default PendingTaskList;
