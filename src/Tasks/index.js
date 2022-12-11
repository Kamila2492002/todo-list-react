import "./style.css";

const Tasks = (props) => (
    <ul className="section__list">
    {props.tasks.map(task => (
        <li className="list__items">
            <button className="list__button list__button--done">{task.done ? "&#10004" : ""}</button>
            <span className={`${task.done ? "style=\"text-decoration: line-through\"" : ""}`}>{task.content}</span>
            <button className="list__button--delete">🗑</button>
        </li>
    ))}
    </ul>
);

export default Tasks;