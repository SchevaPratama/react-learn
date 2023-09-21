export const Task = (props) => {
    return (
        <div
            className="task"
        >
            <h1
                style={{ textDecoration: props.taskCompleted && "line-through" }}>{props.taskName}</h1>
            <button disabled={props.taskCompleted} onClick={() => props.taskComplete(props.taskID)}> Complete </button>
            <button onClick={() => props.taskDelete(props.taskID)}> X </button>
        </div>
    );
};