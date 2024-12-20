// returns the component that creates the to be submitted task objects and pushes created tasks into list that stores to be submitted tasks. 

import React, { useState } from 'react';

function AddTask(props) {

    // State to hold the selected values
    const [countSender, setCountSender] = useState(0);
    const [prioritySender, setPrioritySender] = useState("5");
    const [isActiveSender, setIsActiveSender] = useState("Resume");

    const [countReceiver, setCountReceiver] = useState(0);
    const [priorityReceiver, setPriorityReceiver] = useState("5");
    const [isActiveReceiver, setIsActiveReceiver] = useState("Resume");
    
    // Function to handle the button click (including the Axios request with POST)
    const handleAddClick =  () => {
        console.log("Add button clicked!");
        let copiedList = [...props.waitingThreads];

        for (let i = 0; i < countSender; i++) {
            copiedList.push(
                {
                    isActive: isActiveSender === 'Resume' ? true : false,
                    priority: prioritySender,
                    isSender: true
                });
        }

        for (let i = 0; i < countReceiver; i++) {
            copiedList.push(
                {
                    isActive: isActiveReceiver === 'Resume' ? true : false,
                    priority: priorityReceiver,
                    isSender: false
                });
        }

        props.setWaitingThreads(copiedList)

    };

    return <div id="addTask"  className= "rounded">

                <div className="container">
                    <div className="row">
                        
                        <div className="col" > 

                            <h6 style={{textAlign: "center", marginBottom: "3%", fontSize: "0.8vmax"}}> Sender </h6>

                            {/* Count Dropdown with Label */}
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                                <label style={{ fontSize: "0.8vmax", marginRight: "5px" }}>Count:</label>
                                <select 
                                    style={{ width: "40%", padding: "3px", borderRadius: "3px", fontSize: "0.8vmax" }}
                                    value={countSender}
                                    onChange={(e) => setCountSender(e.target.value)}
                                >
                                {[...Array(101).keys()].map(value => (
                                    <option key={value} value={value}>{value}</option>
                                ))}
                                </select>
                            </div>
                            
                            {/* Priority Dropdown with Label */}
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                                <label style={{ fontSize: "0.8vmax", marginRight: "10px" }}>Priority:</label>
                                <select 
                                    style={{ width: "40%", padding: "3px", borderRadius: "3px", fontSize: "0.8vmax" }}
                                    value={prioritySender}
                                    onChange={(e) => setPrioritySender(e.target.value)}
                                >
                                {[...Array(10).keys()].map(value => (
                                    <option key={value + 1} value={value + 1}>{value + 1}</option>
                                ))}
                                </select>
                            </div>

                            {/* Activity Dropdown with Label */}
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                                <label style={{ fontSize: "0.8vmax", marginRight: "10px" }}>Activity:</label>
                                <select  
                                    style={{ width: "40%", padding: "3px", borderRadius: "3px", fontSize: "0.8vmax" }}
                                    value={isActiveSender}
                                    onChange={(e) => setIsActiveSender(e.target.value)}
                                >
                                <option value="Resume">Resume</option>
                                <option value="Paused">Paused</option>
                                </select>
                            </div>
                            
                        </div>

                        <div className="col-1" id="verticalLine">
                        </div>

                        <div className="col" > 

                            <h6 style={{textAlign: "center", marginBottom: "3%", fontSize: "0.8vmax"}}> Receiver </h6>
                            
                            {/* Count Dropdown with Label */}
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                                <label style={{ fontSize: "0.8vmax", marginRight: "10px" }}>Count:</label>
                                <select 
                                    style={{ width: "40%", padding: "3px", borderRadius: "3px", fontSize: "0.8vmax" }}
                                    value={countReceiver}
                                    onChange={(e) => setCountReceiver(e.target.value)}
                                >
                                {[...Array(101).keys()].map(value => (
                                    <option key={value} value={value}>{value}</option>
                                ))}
                                </select>
                            </div>
                            
                            {/* Priority Dropdown with Label */}
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                                <label style={{ fontSize: "0.8vmax", marginRight: "10px" }}>Priority:</label>
                                <select 
                                    style={{ width: "40%", padding: "3px", borderRadius: "3px", fontSize: "0.8vmax" }}
                                    value={priorityReceiver}
                                    onChange={(e) => setPriorityReceiver(e.target.value)}
                                >
                                {[...Array(10).keys()].map(value => (
                                    <option key={value + 1} value={value + 1}>{value + 1}</option>
                                ))}
                                </select>
                            </div>

                            {/* Activity Dropdown with Label */}
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                                <label style={{ fontSize: "0.8vmax", marginRight: "10px" }}>Activity:</label>
                                <select  
                                    style={{ width: "40%", padding: "3px", borderRadius: "3px", fontSize: "0.8vmax" }}
                                    value={isActiveReceiver}
                                    onChange={(e) => setIsActiveReceiver(e.target.value)}
                                >
                                <option value="Resume">Resume</option>
                                <option value="Paused">Paused</option>
                                </select>
                            </div>
                            
                        </div>
                    </div>
                    <div className="row" style={{ display: "flex", justifyContent: "center", marginTop: "5px" }}>
                        
                        <button 
                        onClick={handleAddClick}
                        style={{
                            backgroundColor: "#12065C", 
                            color: "white", 
                            width: "auto", 
                            padding: "8px 16px", 
                            border: "none", 
                            borderRadius: "5px", 
                            cursor: "pointer", 
                            fontSize: "0.8vmax",
                            width: "10%",
                            justifyContent: "center",
                          }
                        } >Add</button>
                        
                    </div>
                    
                </div>
    
            </div>
}

export {AddTask};