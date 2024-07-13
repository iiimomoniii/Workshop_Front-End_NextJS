import React from 'react'

type Props = {}

export default function Index({}: Props) {
  return (
    <div>
      <h1 className='text-2xl font-bold'>Todos App</h1>
      <form className='flex flex-col w-[300px] my-16'>
        <input type="text" name="message" className='px-4 py-2 mb-3' placeholder='write your job...'/>
        <button className='bg-blue-500 rounded px-4 py-2 text-white font-semibold'>Submit</button>
      </form>
    </div>
  )
}