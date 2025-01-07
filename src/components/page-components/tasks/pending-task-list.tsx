import PendingTasks from "@/components/page-components/tasks/pending-tasks";
import {MdOutlinePendingActions} from "react-icons/md";
import {IoIosAdd} from "react-icons/io";
import React from "react";

const pendingTaskList = () => {
    return (
        <>
            <div className="shadow-md px-6 pb-6  rounded-2xl">
                <div className="flex items-center justify-between mb-4 ">
                    <div className="flex">
                        <MdOutlinePendingActions className="text-gray-400 text-xl"/>
                        <span className="ml-2 text-[#FF6767]">To-Do</span>
                    </div>
                    <div className="flex">
                        <IoIosAdd className="text-[#FF6767] text-xl"/>
                        <span className="ml-2 text-gray-400">Add Task</span>
                    </div>
                </div>
                <PendingTasks/>
            </div>
        </>
    )
}

export default pendingTaskList