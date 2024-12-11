import React, { useState, useEffect } from 'react';
import {FirstRow} from './FirstRow.jsx';
import {SecondRow} from './SecondRow.jsx';
import {ThirdRow} from './ThirdRow.jsx';

function App(){

    //const [startView, setStartView] = useState(true);
     
    const [refreshThreadsView, setRefreshThreadsView] = useState(false)

    return <div className="container-fluid">
                
                <SecondRow 
                    setRefreshThreadsView = {setRefreshThreadsView}
                    refreshThreadsView = {refreshThreadsView}
                />
                <ThirdRow 
                    refreshThreadsView = {refreshThreadsView}
                    setRefreshThreadsView = {setRefreshThreadsView}
                />
                <FirstRow 
                    setRefreshThreadsView = {setRefreshThreadsView}
                    refreshThreadsView = {refreshThreadsView}
                />
                
            </div>;
}

export {App};