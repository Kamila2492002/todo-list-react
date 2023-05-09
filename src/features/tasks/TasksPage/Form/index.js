import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { StyledForm, StyledInput, Button } from "./styled";
import { addTask } from "../../tasksSlice";
import { nanoid } from "@reduxjs/toolkit";

const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const dispatch = useDispatch();

    const onFormSubmit= (event) => {
        event.preventDefault();

        const trimmerNewTaskContnet = newTaskContent.trim();

        if (!trimmerNewTaskContnet) {
            return;
        }

        dispatch(addTask({
            content: trimmerNewTaskContnet,
            done: false,
            id: nanoid(),
        }));

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