import './Task.css'
import {TaskProps} from "./Task.types.ts";


export default function Task({
                                 task: {id, title, state},
                                 onArchiveTask,
                                 onPinTask,
                             }: TaskProps) {
    return (
        <div className={`list-item ${state}`}>
            <label
                htmlFor={`archiveTask-${id}`}
                aria-label={`archiveTask-${id}`}
                className="checkbox"
            >
                <input
                    type="checkbox"
                    name="checked"
                    id={`archiveTask-${id}`}
                    disabled={state === "TASK_ARCHIVED"}
                    onClick={() => onArchiveTask(id)}
                />
            </label>

            <input
                type="text"
                value={title}
                readOnly={true}
                name="title"
                id={`title-${id}`}
                placeholder="Input title"
            />
            {state !== "TASK_ARCHIVED" && (
                <button
                    className="pin-button"
                    onClick={() => onPinTask(id)}
                    id={`pinTask-${id}`}
                    // aria-label={`pinTask-${id}`}
                    key={`pinTask-${id}`}
                >
                    <span className={`icon-star`}/>
                </button>
            )}
        </div>
    );
}
