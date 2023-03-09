import { StyledButtons, Button } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => {
    return tasks.length > 0 && (
        <StyledButtons>
            <Button 
                onClick={toggleHideDone} 
            > 
                {hideDone ? "Ukryj ukończone" : "Pokaż ukończone"}
            </Button>
            <Button 
                onClick={setAllDone} 
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </Button>
        </StyledButtons>
    )
};

export default Buttons;