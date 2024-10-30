import React from 'react'

const AcceptTask = ({data}) => {
  console.log(data)
  return (
    <div className='h-full flex-shrink-0 w-[300px] p-5 bg-red-400 rounded-xl'>
            <div className='flex justify-between  items-center'>
                <h3 className='bg-red-600 px-3 py-1 rounded text-sm '>{data.category}</h3>
                <h4 className='text-sm'>{data.date}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
            <p className='text-sm mt-3'>{data.description}</p>
            <div className='flex justify-between mt-4'>
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-3 rounded-lg text-sm transition duration-200 ease-in-out">
  Mark as Completed
</button>
<button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-3 rounded-lg text-sm transition duration-200 ease-in-out ml-2">
  Mark as Failed
</button>

            </div>
    </div>
  )
}

export default AcceptTask