import React, { useState, useEffect } from 'react';
import {Task} from './Task.jsx';
import axios from 'axios'
import { GrTasks } from "react-icons/gr";

function ThirdRow(props){
    
    //console.log("aaaa")
    //const [senderTasks, setSenderTasks] = useState([]);
    //const [receiverTasks, setReceiverTasks] = useState([]);
    const [tasks, settTasks] = useState([]);
    
    useEffect(() => {
        //console.log("ccc");
        axios
        .get("http://localhost:8080/api/threads")
        .then((result) => {
          console.log(result.data);
          //setSenderTasks(result.data.SenderThreads);
          //setReceiverTasks(result.data.ReceiverThreads)
          settTasks(result.data.Threads)
        })
        .catch((error) => console.log(error));
    }, [props.refreshThreadsView]); // incredibly crucial for re-execution
    
    const [selectedTask, setSelectedTask] = useState(null);
    
    function CreateTasks(task){
        
        return <Task
                            
                key={task.threadId}
                id={task.threadId}
                isActive = {task.isActive}
                isSender= {task.isSender}
                priority = {task.priority}
                refreshThreadsView = {props.refreshThreadsView}
                setRefreshThreadsView = {props.setRefreshThreadsView}
                />

    }

    return <div className="row thirdRow" >

                <div className="col-1" >
                    
                </div>

                <div className="col-10" >

                    <div id="task" className="rounded">

                    <div style={{display: "flex", width: "100%", marginBottom: "1%", alignItems: "center", justifyContent: "center"}}>

                    <h5 style={{fontSize: "1.1vmax", margin: "0px"}} > Tasks </h5>
                    <div style={{position: "relative", marginLeft: "0.75vmax"}} >
                        <GrTasks size="1vmax"/>
                    </div>

                    </div>

                        <div className="scrollbar" id="style-4" style={{fontSize: "0"}}> 
                    
                            <div className='row'>
                            
                                {tasks.map(CreateTasks)}

                            </div>  
                

                        </div>

                    </div> 

                </div>

                <div className="col-1" >
                    
                </div>

            </div>;
    

    
}

export {ThirdRow};