import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleHideDone, setAllDone } from "../tasksSlice";
import { StyledButtons, Button } from "./styled";

const Buttons = () => {
    const { tasks, hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch();

    return (
        <StyledButtons>
            {tasks.length > 0 && (
                <>
                    <Button onClick={ () => dispatch(toggleHideDone())}> 
                        {hideDone ? "Ukryj ukończone" : "Pokaż ukończone"}  
                    </Button>
                    <Button 
                        onClick={ () => dispatch(setAllDone())} 
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