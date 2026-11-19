import {useState} from "react";
import {v1} from "uuid";

export const Lessons1 = () => {

    const [tasks, setTasks] = useState([
        {id: v1(), title: 'HTML&CSS', isDone: true},
        {id: v1(), title: 'JS', isDone: true},
        {id: v1(), title: 'ReactJS', isDone: false},
    ])


    const [current, setCurrent] = useState(0);


    return (
        <div>
            <h1>{current}</h1>
            <button onClick={() => setCurrent(current + 1)}>+</button>
            <button onClick={() => setCurrent(0)}>0</button>
            <button onClick={() => setTasks([])}>tasks</button>

            <ul>
                {tasks.map(t => {
                    return (
                        <li key={t.id}>
                            <input type="checkbox" checked={t.isDone} readOnly/>
                            <span>{t.title}</span>
                        </li>
                    )
                })}
            </ul>

        </div>
    );
};