import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleTaskDone, removeTask } from "../../tasksSlice";
import { List, Item, Content, Button } from "./styled";
import { Link } from "react-router-dom/cjs/react-router-dom";

const TaskList = () => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map(task => (
      <Item 
        key={task.id}
        hidden={task.done && hideDone}
        >  
          <Button 
            toogleDone
            onClick={() => dispatch(toggleTaskDone(task.id))}
          >
            {task.done ? "✔" : ""}
          </Button>
          <Content done={task.done}>
            <Link to={`/zadanie/${task.id}`}>{task.content}</Link>
          </Content>
          <Button 
            remove
            onClick={() => dispatch(removeTask(task.id))}
          >
            🗑
          </Button>
      </Item>
      ))}
    </List>
  )
};

export default TaskList;