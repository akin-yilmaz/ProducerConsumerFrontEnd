import React from 'react';
import { AddTask } from './AddTask';

function FirstRow(props){

    return <div className="row firstRow">
    
                <div className="col-4" >
                    
                </div>
                <div className="col-4" >
                    
                    <AddTask
                        setRefreshThreadsView = {props.setRefreshThreadsView}
                        refreshThreadsView = {props.refreshThreadsView}
                    />
                    
                </div>
                <div className="col-4" >
                    
                </div>
            </div>;
}

export {FirstRow};