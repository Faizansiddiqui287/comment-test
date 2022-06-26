import React, { useState } from 'react';
import ShowComments from './ShowComments';
import './Comments.css';
import { Button } from '@mui/material';
function Comments() {

    const [task, setTask] = useState("")
    const [data, setData] = useState([])

    const onChangeHandler = (e) => {
        setTask(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const newData = task;
        setData([...data, newData])

        setTask('')
    }

    const deleteItem =(a)=>{
        const finalData = data.filter((curEle,index)=>{
            return index !== a;
        })
        setData(finalData)
    }

    return (
        <div className="container" >
            <div >
                
                    
                        <div>
                            <h4 className='text-center'>Comments</h4>
                        </div>
                    </div>
                    <form onSubmit={submitHandler}>
                        <div>
                            <div>
                                <input type="text" className='inp' value={task} onChange={onChangeHandler} />
                            </div>
                        
                            <Button variant="outlined" type="submit">Comment</Button>                        </div>
                    </form>

                    {data.map((value, index) => {
                        return <ShowComments
                            key={index}
                            id={index}
                            task={value}
                            onSelcet={deleteItem}
                            
                        />
                    })}


                </div>
            
    
    )
}

export default Comments