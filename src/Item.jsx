import React from "react";

function Item(props) {
    return <div id="item">

                <div style={{display: "flex", alignItems: "center", justifyContent: "center", position: "relative", marginTop: "0.8vmax", backgroundColor: "#737fc3", borderWidth: "2px", borderStyle: "solid", borderColor: "#12065C", borderRadius: "5px", marginLeft: "5px", marginRight: "5px"}}>
                    <h6 style={{margin: "0px", fontWeight: "bolder", fontSize: "1vmax", color: "white"}}> {props.id} </h6>
                </div>
                
            </div>;
}

export {Item};