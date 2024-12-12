// Returns the Task component and contains various handlers through which HTTP requests are made.

import axios from "axios";
import React from "react";
import Switch from "react-switch";

function Task(props) {
    
    // Local state to track the switch status (true or false)
    //const [isActive, setIsActive] = useState(props.isActive);

    //const [priority, setPriority] = useState(props.priority);


    // Function to handle the change in Switch state
    const handleSwitchChange = async (newState) => {
        try {
            // Sending the PUT request to update the task state

            const formData = new FormData();
            formData.append('id', props.id);
            formData.append('isActive', newState);

            const response = await axios.put("http://localhost:8080/api/activity", formData);

            // Assuming the server returns the updated task
            console.log("Updated Task:", response.data);
            props.setRefreshThreadsView(!props.refreshThreadsView); // Actually I need to update the specific component but I am running out of time

        } catch (error) {
            console.error("Error updating task:", error);
        }
    };

    const handleDropDownChange = async (e) => {
        try {
            // Sending the PUT request to update the task state

            const formData = new FormData();
            formData.append('id', props.id);
            formData.append('priority', e.target.value);

            const response = await axios.put("http://localhost:8080/api/priority", formData);

            // Assuming the server returns the updated task
            console.log("Updated Task:", response.data);
            props.setRefreshThreadsView(!props.refreshThreadsView); // Actually I need to update the specific component but I am running out of time

        } catch (error) {
            console.error("Error updating task:", error);
        }
    };

    // Function to handle the button click (including the Axios request with POST)
    const handleDeleteClick = async () => {
        
        console.log("Delete button clicked!");

        // Perform the axios DELETE request with formData
        try {
            
            const formData = new FormData();
            formData.append('id', props.id);

            const response = await axios.delete("http://localhost:8080/api", { data: formData, headers: { "Content-type": "form-data" } }); // too many trials, finally

            console.log("Server response:", response.data);
            props.setRefreshThreadsView(!props.refreshThreadsView);
            
        } catch (error) {
            console.error("Error occurred during the DELETE request:", error);
            
        }
    };

    if(props.isCreatedByBackend === false){

        return <div className="col-2" 
                style={{alignItems: "center", justifyContent: "center", position: "relative", marginTop: "1vmax", backgroundColor: "white", borderWidth: "2px", borderStyle: "solid", 
                borderColor: props.isSender ? (props.isActive ? "#3dfc49" : "#d6ffd9") : (props.isActive ? "#ff1212" : "#ffcfcf"), borderRadius: "5px", marginLeft: "4vmin"}}
                onClick={() => console.log("Task ID:", props.id)}>
                
                <div className="row" style={{alignItems: "center", justifyContent: "center", marginTop: "1vmax"}}>

                    <h6 style={{ color: "black", textAlign: "center"}}>
                        {"Priority: " + props.priority}
                    </h6>

                </div>
                
            </div>;

    }
        
    return <div className="col-2" 
                style={{alignItems: "center", justifyContent: "center", position: "relative", marginTop: "1vmax", backgroundColor: "white", borderWidth: "2px", borderStyle: "solid", 
                borderColor: props.isSender ? (props.isActive ? "#3dfc49" : "#d6ffd9") : (props.isActive ? "#ff1212" : "#ffcfcf"), borderRadius: "5px", marginLeft: "4vmin"}}
                onClick={() => console.log("Task ID:", props.id)}>
                
            
                <div className="row" style={{display: "flex", alignItems: "center", justifyContent: "center", paddingLeft: "40%", marginTop: "1vmax"}}>

                <Switch
                        checked={props.isActive}
                        onChange={handleSwitchChange}
                        onColor={props.isSender ? "#d6ffd9" : "#ffcfcf"}
                        onHandleColor={props.isSender ? "#3dfc49" : "#ff1212"}
                        handleDiameter={20}
                        uncheckedIcon={false}
                        checkedIcon={false}
                        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                        height={12}
                        width={35}
                    />
                    
                </div>

                <div className="row" style={{alignItems: "center", justifyContent: "center", marginTop: "1vmax"}}>

                    <h6 style={{ color: "black", textAlign: "center"}}>
                        {"Task-" + props.id}
                    </h6>

                </div>

                <div className="row" style={{alignItems: "center", justifyContent: "center", marginTop: "1vmax"}}>
                    
                    {/* Priority Dropdown with Label */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                                <label style={{ fontSize: "0.8vmax", marginRight: "10px" }}>Priority:</label>
                                <select 
                                    style={{ width: "40%", padding: "3px", borderRadius: "3px", fontSize: "0.8vmax" }}
                                    value={props.priority}
                                    onChange={handleDropDownChange}
                                >
                                {[...Array(10).keys()].map(value => (
                                    <option key={value + 1} value={value + 1}>{value + 1}</option>
                                ))}
                                </select>
                    </div>
                    
                </div>

                <div className="row" style={{ display: "flex", justifyContent: "center", marginTop: "1vmax", marginBottom: "1vmax" }}>

                <button 
                        onClick={handleDeleteClick}
                        style={{
                            backgroundColor: "#12065C", 
                            color: "white", 
                            width: "auto", 
                            padding: "8px 16px", 
                            border: "none", 
                            borderRadius: "5px", 
                            cursor: "pointer", 
                            fontSize: "0.7vmax",
                            width: "25%",
                            justifyContent: "center",
                          }
                        } >Delete</button>
                    
                </div>

                
            </div>;
}

export {Task};