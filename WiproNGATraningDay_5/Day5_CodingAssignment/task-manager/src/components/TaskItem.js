import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "../redux/actions";

const TaskItem = ({ task }) => {
    const dispatch = useDispatch();

    return (
        <li className="p-2 border flex justify-between">
            {task.text}
            <button onClick={() => dispatch(deleteTask(task.id))} className="bg-red-500 text-white px-2">
                delete
            </button>
        </li>
    );
};

export default TaskItem;

