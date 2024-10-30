import React from 'react'

const TaskList = () => {
  return (
    <div id="taskList" className='h-[55%] flex items-center overflow-x-auto justify-start gap-5 flex-nowrap w-full  mt-10 py-5'>
        <div className='h-full flex-shrink-0 w-[300px] p-5 bg-red-400 rounded-xl'>
            <div className='flex justify-between  items-center'>
                <h3 className='bg-red-600 px-3 py-1 rounded text-sm '>High</h3>
                <h4 className='text-sm'>20 feb 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a project base on React</h2>
            <p className='text-sm mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quis iure earum nemo maiores rem.</p>
        </div>
        <div className='h-full flex-shrink-0 w-[300px] p-5 bg-green-400 rounded-xl'>
            <div className='flex justify-between  items-center'>
                <h3 className='bg-red-600 px-3 py-1 rounded text-sm '>High</h3>
                <h4 className='text-sm'>20 feb 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a project base on React</h2>
            <p className='text-sm mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quis iure earum nemo maiores rem.</p>
        </div>
        <div className='h-full flex-shrink-0 w-[300px] p-5 bg-blue-400 rounded-xl'>
            <div className='flex justify-between  items-center'>
                <h3 className='bg-red-600 px-3 py-1 rounded text-sm '>High</h3>
                <h4 className='text-sm'>20 feb 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a project base on React</h2>
            <p className='text-sm mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quis iure earum nemo maiores rem.</p>
        </div>
        <div className='h-full flex-shrink-0 w-[300px] p-5 bg-yellow-400 rounded-xl'>
            <div className='flex justify-between  items-center'>
                <h3 className='bg-red-600 px-3 py-1 rounded text-sm '>High</h3>
                <h4 className='text-sm'>20 feb 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a project base on React</h2>
            <p className='text-sm mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quis iure earum nemo maiores rem.</p>
        </div>
        
    </div>
  )
}

export default TaskList