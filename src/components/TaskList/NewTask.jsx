import React from 'react'

const NewTask = ({data}) => {
  console.log(data)
  return (
    <div className='h-full flex-shrink-0 w-[300px] p-5 bg-green-400 rounded-xl'>
            <div className='flex justify-between  items-center'>
                <h3 className='bg-red-600 px-3 py-1 rounded text-sm '>{data.category}</h3>
                <h4 className='text-sm'>{data.date}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
            <p className='text-sm mt-3'>{data.description}</p>
        <div className='mt-4'>
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-200 ease-in-out">
  Accepted Task
</button>

        </div>
    </div>
    
  )
}

export default NewTask