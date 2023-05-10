import { useSelector, useDispatch } from "react-redux";
import { selectTasksByQuery, toggleTaskDone, removeTask, selectHideDone } from "../../tasksSlice";
import { List, Item, Content, Button, StyledLink } from "./styled";
import { toTask } from "../../../../routes";
import { useLocation } from "react-router-dom/cjs/react-router-dom";
import searchQueryParamName from "../searchQueryParamName";

const TaskList = () => {
  const location = useLocation();
  const query = (new URLSearchParams(location.search)).get(searchQueryParamName);


  const tasks = useSelector(state => selectTasksByQuery(state, query));
  const hideDone = useSelector(selectHideDone);

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