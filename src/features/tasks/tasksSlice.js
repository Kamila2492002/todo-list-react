import { createSlice } from '@reduxjs/toolkit';
import { getTasksFromLocalStorage } from './tasksLocalStorage';


const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: getTasksFromLocalStorage(),
        hideDone: false,
        loading: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload: newTask }) => {
            tasks.push(newTask);
        },
        toggleHideDone: (state) => {
            state.hideDone = !state.hideDone;
        },
        toggleTaskDone: ({ tasks }, { payload: selectedTaskId }) => {
            const index = tasks.findIndex(({ id }) => id === selectedTaskId);
            tasks[index].done = !tasks[index].done;
        },
        removeTask: ({ tasks}, { payload: selectedTaskId  }) => {
            const index = tasks.findIndex(({ id }) => id === selectedTaskId);
            tasks.splice(index, 1);
        },
        setAllDone: ({ tasks }) => {
            tasks.map((task) => (task.done = true));
        },
        fetchExampleTasks: (state) => {
            state.loading = true;
        },
        fetchExampleTasksSuccess: (state, { payload: tasks }) => {
            state.tasks = tasks;
            state.loading = false;
        },
        fetchExampleTasksError: (state) => {
            state.loading = false;
        },
    },
});

export const { 
    addTask, 
    toggleHideDone, 
    toggleTaskDone,
    removeTask, 
    setAllDone,
    fetchExampleTasks,
    fetchExampleTasksSuccess,
    fetchExampleTasksError,
} = tasksSlice.actions;

const selectTasksState = (state) => state.tasks;

export const selectTasks = (state )=> selectTasksState(state).tasks;
export const selectHideDone = (state )=> selectTasksState(state).hideDone;
export const selectLoadingTasks = (state) => selectTasks(state).loading === true;
export const selectTasksEmpty = (state) => selectTasks(state).length === 0;
export const selectTasksDone = (state) => selectTasks(state).every(({ done }) => done);

export const getTaskById = (state, taskId) => 
    selectTasks(state).find(({ id }) => id === taskId);

export const selectTasksByQuery = (state, query) => {
    const tasks = selectTasks(state);

    if(!query || query.trim() === "") {
        return tasks;
    }

    return tasks.filter(({ content }) => 
    content.toUpperCase().includes(query.trim().toUpperCase()));
}

export default tasksSlice.reducer;