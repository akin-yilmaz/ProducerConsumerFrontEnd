import React from 'react';

import { Queue } from './Queue';


function SecondRow(props){
    return <div className="row secondRow" >

                <div className="col-2" >
                    
                </div>
                
                <div className="col-8" >
                    <Queue
                    />
                </div>

                <div className="col-2" >
                
                </div>

            </div>;
}

export {SecondRow};