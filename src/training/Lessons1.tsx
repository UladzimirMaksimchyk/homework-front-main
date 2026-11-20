import {useState} from "react";


export const Lessons1 = () => {

    const [tasks, setTasks] = useState([
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false},
    ])


    const [current, setCurrent] = useState(0);

    const filteredTasksHandler=()=>{
        const filteredTasks=tasks.filter(t=>t.isDone)
        setTasks(filteredTasks);
    }

    return (
        <div>
            <h1>{current}</h1>
            <button onClick={() => setCurrent(prev=>prev + 1)}>+</button>
            <button onClick={() => setCurrent(0)}>0</button>
            <button onClick={() => setTasks([])}>tasks</button>
            <button onClick={filteredTasksHandler}>filter</button>

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