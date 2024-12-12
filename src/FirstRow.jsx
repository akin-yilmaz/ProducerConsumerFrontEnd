// Returns a basic container for AddTask component.

import React from 'react';
import { AddTask } from './AddTask';

function FirstRow(props){

    return <div className="row firstRow">
    
                <div className="col-4" >
                    
                </div>
                <div className="col-4" >
                    
                    <AddTask
                        waitingThreads = {props.waitingThreads}
                        setWaitingThreads = {props.setWaitingThreads}
                    />
                    
                </div>
                <div className="col-4" >
                    
                </div>
            </div>;
}

export {FirstRow};