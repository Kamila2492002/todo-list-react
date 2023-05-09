import { createSlice } from '@reduxjs/toolkit';
import { getTasksFromLocalStorage } from './tasksLocalStorage';


const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: getTasksFromLocalStorage(),
        hideDone: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload: newTask }) => {
            tasks.push(newTask);
        },
        toggleHideDone: state => {
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
        setTasks: (state, { payload: tasks }) => {
            state.tasks = tasks;
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
    setTasks,
} = tasksSlice.actions;


export const selectTasks = state => state.tasks;
export const selectLoadingTasks = (state) => selectTasks(state).loading;
export default tasksSlice.reducer;