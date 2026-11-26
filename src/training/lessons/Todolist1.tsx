import {Task} from "./App1";

type TodolistType = {
    title: string
    tasks: Task[]
    date?: string
}


export const Todolist1 = ({title, tasks, date}: TodolistType) => {
    return (
        <div>
            <div>
                <h3>{title}</h3>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>
                    {tasks.map(t => {
                        return (
                            <li key={t.id}>
                                <input type={"checkbox"} checked={t.isDone}/>
                                <span>{t.title}</span>
                            </li>
                        )
                    })}
                </ul>
                <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </div>
            <div>{date}</div>

        </div>
    );
};
