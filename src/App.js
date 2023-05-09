import React from "react";
import { HashRouter, Link, Switch, Route, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import AuthorPage from "./features/author/AuthorPage";
import { toAuthor, toTask, toTasks } from "./routes";


const App = () => (
    <HashRouter>
    <nav>
        <ul>
            <li>
                <Link to="/zadania">Zadania</Link>
            </li>
            <li>
                <Link to="/autor">O autorze</Link>
            </li>
        </ul>
        <Switch>
            <Route path={toTask()}>
                <TaskPage />
            </Route>
            <Route path={toTasks()}>
                <TasksPage />
            </Route>
            <Route path={toAuthor()}>
                <AuthorPage />
            </Route>
            <Route path="/">
                <Redirect to={toTasks()} />
            </Route>
        </Switch>
    </nav>
    </HashRouter>
);

export default App;