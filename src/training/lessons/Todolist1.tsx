import {FilterValue, Task} from "./App1";
import {Button1} from "./Button1";
import {useState} from "react";

type TodolistType = {
    title: string
    tasks: Task[]
    date?: string
    deleteTask: (Id: string) => void
    changeFilter: (filter:FilterValue) => void
    createTasks:(title:string)=>void
}


export const Todolist1 = ({title, tasks, date,deleteTask,changeFilter,createTasks}: TodolistType) => {

    // const inputRef = useRef<HTMLInputElement>(null);
const[taskTitle,setTaskTitle]=useState("")

    return (
        <div>
            <div>
                <h3>{title}</h3>
                <div>
                    <input value={taskTitle} onChange={(e) => setTaskTitle(e.currentTarget.value)}/>
                   <Button1 title={"+"} onClick={()=>{
                       createTasks(taskTitle)
                       setTaskTitle("")
                       // if(inputRef.current) {
                       //     createTasks(inputRef.current.value)
                       //     inputRef.current.value = "";
                       // }
                   }}/>
                </div>
                {tasks.length === 0 ? (<p>"Tasks not"</p>) : <ul>
                    {tasks.map(t => {
                        return (
                            <li key={t.id}>
                                <Button1 title={"x"} onClick={()=>deleteTask(t.id)}/>
                                <input type={"checkbox"} checked={t.isDone}/>
                                <span>{t.title}</span>
                            </li>
                        )
                    })}
                </ul>}

                <div>
                   <Button1 title={"All"} onClick={()=>changeFilter("all")}/>
                   <Button1 title={"Active"} onClick={()=>changeFilter("active")}/>
                   <Button1 title={"Completed"} onClick={()=>changeFilter("completed")}/>
                </div>
            </div>
            <div>{date}</div>

        </div>
    );
};
