import { useSelector, useDispatch } from "react-redux";
import { selectHideDone, toggleHideDone, setAllDone, selectTasksEmpty, selectTasksDone } from "../../tasksSlice";
import { StyledButtons, Button } from "./styled";

const Buttons = () => {
    const tasksDone = useSelector(selectTasksDone);
    const hideDone = useSelector(selectHideDone);
    const tasksEmpty = useSelector(selectTasksEmpty);
    const dispatch = useDispatch();

    return (
        <StyledButtons>
            {!tasksEmpty && (
                <>
                    <Button onClick={ () => dispatch(toggleHideDone())}> 
                        {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}  
                    </Button>
                    <Button 
                        onClick={ () => dispatch(setAllDone())} 
                        disabled={tasksDone}
                    >
                        Ukończ wszystkie
                    </Button>
                </>
            )}
        </StyledButtons>
    )
};

export default Buttons;