import { selectTasks, toogleHideDone } from "../tasksSlice";
import { StyledButtons, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";

const Buttons = ({ setAllDone }) => {
    const { tasks, hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch();
    return (
        <StyledButtons>
            {tasks.length > 0 && (
                <>
                    <Button onClick={() => dispatch(toogleHideDone())}> 
                        {hideDone ? "Ukryj ukończone" : "Pokaż ukończone"}  
                    </Button>
                    <Button 
                        onClick={setAllDone} 
                        disabled={tasks.every(({ done }) => done)}
                    >
                        Ukończ wszystkie
                    </Button>
                </>
            )}
        </StyledButtons>
    )
};

export default Buttons;