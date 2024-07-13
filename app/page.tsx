import { revalidatePath } from 'next/cache';
import React from 'react'

type Props = {}

export default async function Index({ }: Props) {

  //3. fecth data after submit
  const result = await fetch("http://localhost:3000/apis/todo");
  const todoList: { id: string,message : string}[] = await result.json();

  return (
    <div>
      <h1 className='text-2xl font-bold'>Todos App</h1>
      
      <form  action={async (formData:FormData)=>{
        "use server" //0. decare use server
        const message = formData.get("message"); // 1. get message in formdata 
        await fetch("http://localhost:3000/apis/todo",{ //2. send to apis todo by METHOD POST
          method: "POST",
          headers: { "Content-Type": "application/json"},
          body: JSON.stringify({message}),
        });

        revalidatePath("/") //4. refresh update ui from fetch data
      }} className='flex flex-col w-[300px] my-16'>
        <input type="text" name="message" className='px-4 py-2 mb-3' placeholder='write your job...' />
        <button className='bg-blue-500 rounded px-4 py-2 text-white font-semibold'>Submit</button>
        
      </form>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>
            Job {todo.id}: {todo.message}
          </li>
        ))}
      </ul>
        

    </div>
  )
}