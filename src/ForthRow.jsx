// Returns a component responsible for making POST request. waitingThreads(Tasks) is fed into request body. This component is responsible for creating Task components as well. 
// This also sets refreshThreadsView which triggers GET request of getting tasks created by backend after making POST request. 

import React from 'react';
import {Task} from './Task.jsx';
import axios from 'axios'

function ForthRow(props){

    // Function to handle the button click (including the Axios request with POST)
    const handleSubmitClick = async () => {

        console.log("Submit button clicked!");
        
        // Explicitly define the body as JSON
        const requestBody = {
            waitingThreads: props.waitingThreads, // Add the list to the JSON body
        };
        console.log(requestBody);
        // Perform the axios POST request with formData
        try {
            const response = await axios.post("http://localhost:8080/api", requestBody, {
                headers: {
                    'Content-Type': 'application/json', // Ensure JSON format
                },
            });

            console.log("Server response:", response.data);
            
            // No, re-setting a React hook's state variable to the same value does not trigger a re-render.
            // incredibly important

            props.setRefreshThreadsView(!props.refreshThreadsView);
            props.setWaitingThreads([])
            //props.setRefreshThreadsView(true);
                   
        } catch (error) {
            console.error("Error occurred during the POST request:", error);
            props.setWaitingThreads([])
        }
    };

    const handleDeleteClick = () => {

        console.log("Delete button clicked!");
        props.setWaitingThreads([])
        
    };
    
    function CreateTasks(task){
        //console.log(task)
        return <Task
                            
                key={Math.random()}
                id={'?'}
                isActive = {task.isActive}
                isSender= {task.isSender}
                priority = {task.priority}
                refreshThreadsView = {props.refreshThreadsView}
                setRefreshThreadsView = {props.setRefreshThreadsView}
                isCreatedByBackend = {false}
                />

    }

    return <div className="row thirdRow" >

                <div className="col-1" >
                    
                </div>

                <div className="col-10" >

                    <div id="task" className="rounded">

                        <div style={{display: "flex", width: "100%", marginBottom: "1%", alignItems: "center", justifyContent: "center"}}>
                            <h5 style={{fontSize: "1.1vmax", margin: "0px"}} > To Be Submitted Tasks </h5>
                        </div>

                        <div className="scrollbar" id="style-4" style={{fontSize: "0"}}> 
                            <div className='row'>
                            
                                {props.waitingThreads.map(CreateTasks)}

                            </div>  
                        </div>

                        <div style={{ display: "flex", justifyContent: "center", marginTop: "5px" }}> 
                    
                        <button 
                        onClick={handleSubmitClick} 
                        style={{
                            backgroundColor: "#faf9f9", 
                            color: "#12065C",  
                            borderWidth: "1px",  
                            borderRadius: "5px",
                            borderColor: "#12065C", 
                            cursor: "pointer", 
                            fontSize: "0.6vmax",
                            width: "5%",
                            justifyContent: "center",
                            marginRight: "15px"
                          }
                        }
                        >
                            Submit
                        </button> 

                        <button 
                        onClick={handleDeleteClick} 
                        style={{
                            backgroundColor: "#12065C", 
                            color: "white",  
                            padding: "8px 16px", 
                            border: "none", 
                            borderRadius: "5px", 
                            cursor: "pointer", 
                            fontSize: "0.6vmax",
                            width: "5%",
                            justifyContent: "center",
                          }
                        }
                        >
                            Clear
                        </button>  
                
                        </div>

                    </div> 

                </div>

                <div className="col-1" >
                    
                </div>

            </div>;
    
}

export {ForthRow};