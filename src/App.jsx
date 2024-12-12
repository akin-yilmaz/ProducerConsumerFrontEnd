import React, { useState, useEffect } from 'react';
import {FirstRow} from './FirstRow.jsx';
import {SecondRow} from './SecondRow.jsx';
import {ThirdRow} from './ThirdRow.jsx';
import { ForthRow } from './ForthRow.jsx';

function App(){

    //const [startView, setStartView] = useState(true);
     
    const [refreshThreadsView, setRefreshThreadsView] = useState(false)
    const [waitingThreads, setWaitingThreads] = useState([])

    return <div className="container-fluid">
                
                <SecondRow 
                    setRefreshThreadsView = {setRefreshThreadsView}
                    refreshThreadsView = {refreshThreadsView}
                />
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