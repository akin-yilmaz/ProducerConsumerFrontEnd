import React, { useState, useEffect } from 'react';
import {FirstRow} from './FirstRow.jsx';
import {SecondRow} from './SecondRow.jsx';
import {ThirdRow} from './ThirdRow.jsx';
import { ForthRow } from './ForthRow.jsx';

function App(){

    //const [startView, setStartView] = useState(true);
    
    const [waitingThreads, setWaitingThreads] = useState([]) // set when ADD button is clicked so as to store to be submitted tasks to backend. 
    const [refreshThreadsView, setRefreshThreadsView] = useState(false) // set when POST request is made so as to trigger GET request for getting tasks created by backend.  
    
    return <div className="container-fluid">
                
                <SecondRow/>
                <ThirdRow 
                    refreshThreadsView = {refreshThreadsView}
                    setRefreshThreadsView = {setRefreshThreadsView}
                />
                <ForthRow 
                    refreshThreadsView = {refreshThreadsView}
                    setRefreshThreadsView = {setRefreshThreadsView}
                    waitingThreads = {waitingThreads}
                    setWaitingThreads = {setWaitingThreads}
                />
                <FirstRow 
                    waitingThreads = {waitingThreads}
                    setWaitingThreads = {setWaitingThreads}
                />
                
            </div>;
}

export {App};