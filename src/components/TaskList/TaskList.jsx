import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  return (
    <div id="taskList" className='h-[55%] flex items-center overflow-x-auto justify-start gap-5 flex-nowrap w-full  mt-10 py-5'>
        {/* <AcceptTask/>
        <NewTask/>
        <CompleteTask/>
        <FailedTask/> */}
        
        {data.tasks.map((elem,idx)=>{
            if (elem.active) {
                return <AcceptTask key={idx} data={elem}/>
            }
            if(elem.newTask){
                return <NewTask key={idx} data={elem}/>
            }
            if (elem.completed) {
                return <CompleteTask key={idx} data={elem}/>
            }
            if (elem.failed) {
                return<FailedTask key={idx} data={elem}/> 
            }
        })}
    </div>
  )
}

export default TaskList