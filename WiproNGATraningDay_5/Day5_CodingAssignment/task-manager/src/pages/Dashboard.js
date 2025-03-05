import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions";
import TaskList from "../components/TaskList";

const Dashboard = () => {
    const dispatch = useDispatch();
    const [taskText, setTaskText] = useState("");

    const handleAddTask = () => {
        if (taskText.trim() !== "") {
            dispatch(addTask({ id: Date.now(), text: taskText }));
            setTaskText("");
        }
    };

    return (
        <div className="p-4">
            <h2>Task Dashboard</h2>
            <input
                type="text"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
                placeholder="Enter task"
                className="border p-2 mr-2"
            />
            <button onClick={handleAddTask} className="bg-green-500 text-white px-4 py-2">
                Add Task
            </button>

            <TaskList />
        </div>
    );
};

export default Dashboard;
