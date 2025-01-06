"use client"

import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";
import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";

const TaskProgress = () => {
    const tasks = [
        { title: "Update Documentation", status: "Not Started" },
        { title: "Fix Login Issue", status: "In Progress" },
        { title: "Review Pull Requests", status: "Completed" },
        { title: "Prepare Presentation", status: "In Progress" },
        { title: "Deploy Website", status: "Completed" },
        { title: "Draft Blog Post", status: "Not Started" },
    ];

    // Define the type for task statuses
    type TaskStatus = "In Progress" | "Completed" | "Not Started";

    // Initial status counts object
    const initialStatusCounts: Record<TaskStatus, number> = {
        "In Progress": 0,
        "Completed": 0,
        "Not Started": 0,
    };

    // Task statuses and counts
    const totalTasks = tasks.length;
    const statusCounts = tasks.reduce((counts, task) => {
        counts[task.status as TaskStatus]++;
        return counts;
    }, initialStatusCounts);

    const data = [
        { name: "In Progress", value: statusCounts["In Progress"], color: "#0225FF" },
        { name: "Completed", value: statusCounts["Completed"], color: "#05A301" },
        { name: "Not Started", value: statusCounts["Not Started"], color: "#F21E1E" },
    ];

    const [isClient, setIsClient] = useState(false);
    useEffect(() => setIsClient(true), []);

    return (
        <div className="shadow-md p-6 rounded-2xl w-full max-w-6xl">
            <div className="flex">
                <HiOutlineClipboardDocumentCheck className="text-gray-400 text-xl " />
                <span className="ml-2 text-[#FF6767]">Task Progress</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {data.map((entry, index) => {
                    const percentage = ((entry.value / totalTasks) * 100).toFixed(1);
                    const chartData = [
                        { name: entry.name, value: entry.value, color: entry.color },
                        { name: "Remaining", value: totalTasks - entry.value, color: "#e5e7eb" }, // Gray for unused
                    ];

                    return (
                        <div key={index} className="text-center">
                            {isClient && (
                                <PieChart width={200} height={200}>
                                    <Pie
                                        data={chartData}
                                        dataKey="value"
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={50}
                                        outerRadius={80}
                                        startAngle={90}
                                        endAngle={450}
                                        isAnimationActive={true}
                                    >
                                        {chartData.map((slice, i) => (
                                            <Cell key={`cell-${i}`} fill={slice.color} />
                                        ))}
                                    </Pie>
                                    <text
                                        x="50%"
                                        y="50%"
                                        textAnchor="middle"
                                        dominantBaseline="middle"
                                        className="text-xl font-bold text-gray-700"
                                    >
                                        {`${percentage}%`}
                                    </text>
                                </PieChart>
                            )}
                            {/* Labels below the pie chart */}
                            <div className="mt-4 flex justify-center items-center gap-2">
                                <div
                                    className="w-3 h-3 rounded-full"
                                    style={{ backgroundColor: entry.color }}
                                ></div>
                                <span className="text-sm font-medium">{entry.name}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TaskProgress;
