// Returns a component that makes a GET request for queue with a period of 1 second. Based on the response, creates the queue elements (item) as well.

import React, { useState, useEffect } from 'react';
import { Item } from "./Item";
import { HiMiniRectangleStack } from "react-icons/hi2";
import axios from 'axios'

function Queue(props) {
    
    // State to hold the selected values
    const [q, setQ] = useState([]); // State to hold fetched data
    const [error, setError] = useState(null); // State to hold any errors
    
    
    // The dependency array is the second argument to useEffect. It tells React when to re-run the code inside the useEffect.
    // When the array is empty, the useEffect runs only once, right after the component is rendered the first time.
    // It won’t re-run, even if the component re-renders.

    // Using an empty array ensures:
    //The fetchData logic and the polling interval are set up only once.
    //React doesn’t unnecessarily re-run this logic after every render.

    // as you can see, useEffect is a function call and arguments passed in is a callback function.
    useEffect(() => {
        const fetchData = async () => {
            //console.log("aaaa")
          try {
            const response = await axios.get("http://localhost:8080/api/resource");
            console.log(response.data)
            setQ(response.data.queue); // Update state with fetched data
          } catch (err) {
            setError(err.message); // Handle error
          }
        };
    
        // Start polling every 1 second
        const intervalId = setInterval(fetchData, 1000);
    
        // Cleanup: Stop polling on unmount
        return () => clearInterval(intervalId); // returning a callback function.
      }, []); // Empty dependency array ensures this runs only once on mount

    function createItem(item){
        //console.log(item)
        return < Item
                key = {item.id}
                id = {item.id}
                />;   
    }

    return  <div id="queue" className="rounded"> 

                <div style={{display: "flex", width: "100%", marginBottom: "1%", alignItems: "center", justifyContent: "center"}}>

                    <h5 style={{fontSize: "1.1vmax", margin: "0px"}} > Queue </h5>
                    <div style={{position: "relative", marginLeft: "0.75vmax"}} >
                        <HiMiniRectangleStack size="1vmax"/>
                        
                        <h6 style={{marginLeft: "1.2vmax", fontSize: "0.75vmax"}} > { q.length } </h6>
                    </div>
                    
                </div>
                
                <div className="scrollbar" id="style-3">
                    
                    {q.length > 0 ? q.map(createItem) : null}
                    
                </div>
                

            </div> ;
}

export {Queue};