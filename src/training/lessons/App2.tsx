import {useState} from 'react';
import {Todolist2} from "../Todolist2";


export const App2 = () => {
    let [tasks, setTasks] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "Rest API", isDone: false},
        {id: 5, title: "GraphQL", isDone: false},
    ]);

    function removeTask(id: number) {
        setTasks(tasks.filter(t => t.id == id))
    }

    const deleteTasks = () => {
        setTasks([])
    }


    return (
        <div className="App">
            <Todolist2 title="What to learn"
                       tasks={tasks}
                       removeTask={removeTask}
                       deleteTasks={deleteTasks}
            />
        </div>
    );
}
