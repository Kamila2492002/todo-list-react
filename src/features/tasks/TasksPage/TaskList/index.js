import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleTaskDone, removeTask } from "../../tasksSlice";
import { List, Item, Content, Button, StyledLink } from "./styled";
import { toTask } from "../../../../routes";

const TaskList = () => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map((task) => (
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
            <StyledLink to={toTask({ id: task.id })}>{task.content}</StyledLink>
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