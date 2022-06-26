import React from 'react';
import './Comments.css'
import { Button } from '@mui/material';

function ShowComments(props) {
    return (
        <div className='container' >
            <div className="row my-2" >

            
                    <p className='comment'>{props.task}</p>
                <Button variant="text" className='comment' onClick={()=>{
                    props.onSelcet(props.id)
                }}>Delete</Button>
                
            </div>
            
        </div>
    )
}

export default ShowComments