import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => {
    return tasks.length > 0 && (
        <div className="buttons">
            <button onClick={toggleHideDone} className="buttons__button"> 
                {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
            </button>
            <button 
                onClick={setAllDone}
                className="buttons__button" 
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </button>
        </div>
    )
};

export default Buttons;