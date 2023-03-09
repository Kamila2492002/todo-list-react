import React, { useState, useRef } from "react";
import { StyledForm, StyledInput, Button } from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const onFormSubmit= (event) => {
        event.preventDefault();

        const trimmerNewTaskContnet = newTaskContent.trim();

        if (!trimmerNewTaskContnet) {
            return;
        }
        
        addNewTask(trimmerNewTaskContnet);
        setNewTaskContent("");
        inputRef.current.focus();
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
        <StyledInput 
            value={newTaskContent} 
            placeholder="Co jest do zrobienia?" 
            onChange={({ target }) => setNewTaskContent(target.value)}
        />
        <Button>Dodaj zadanie</Button>
    </StyledForm>
    )
};

export default Form; 