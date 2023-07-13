import React, { useState } from 'react'
import './App.css'
import { Input } from 'postcss'

function App() {
  const[value, setValue] = useState('')
  

  return (
    <div class="min-h-screen bg-gray-700 flex items-center justify-center">

    
    <div class="bg-gray-800 border-2 border-gray-900 shadow-2xl rounded-lg">
      
      <form class="border-b-2 border-gray-900">
        <input type="text" value={value} class="bg-transparent p-8 rounded-t-lg outline-none focus:bg-gray-700 text-3xl text-right text-white font-mono"/>
      </form>
  
      
      <div class="p-6 text-gray-800 grid grid-cols-4 gap-4 text-xl">
        <input class="font-mono col-span-2 bg-blue-500 hover:bg-blue-400 rounded-full p-5" type='button' value="AC" onClick={e => setValue('')}/>
        <input class="font-mono col-span-2 bg-blue-500 hover:bg-blue-400 rounded-full p-5" type='button' value="DEL" onClick={e => setValue(value.slice(0, -1))}/>
        <input class="font-mono bg-purple-500 hover:bg-purple-400 rounded-full p-5" type='button' value="/" onClick={e => setValue(value + e.target.value)}/>
  
        <input class="font-mono bg-gray-500 hover:bg-gray-400 rounded-full p-5" type='button' value="1" onClick={e => setValue(value + e.target.value)} />
        <input class="font-mono bg-gray-500 hover:bg-gray-400 rounded-full p-5"  type='button' value="2" onClick={e => setValue(value + e.target.value)}/>
        <input class="font-mono bg-gray-500 hover:bg-gray-400 rounded-full p-5" type='button' value="3" onClick={e => setValue(value + e.target.value)}/>
        <input class="font-mono bg-purple-500 hover:bg-purple-400 rounded-full p-5" type='button' value="*" onClick={e => setValue(value + e.target.value)} />
  
        <input class="font-mono bg-gray-500 hover:bg-gray-400 rounded-full p-5" type='button' value="4" onClick={e => setValue(value + e.target.value)}/>
        <input class="font-mono bg-gray-500 hover:bg-gray-400 rounded-full p-5" type='button' value="5" onClick={e => setValue(value + e.target.value)}/>
        <input class="font-mono bg-gray-500 hover:bg-gray-400 rounded-full p-5" type='button' value="6" onClick={e => setValue(value + e.target.value)}/>
        <input class="font-mono bg-purple-500 hover:bg-purple-400 rounded-full p-5"type='button' value="-" onClick={e => setValue(value + e.target.value)}/>
  
        <input class="font-mono bg-gray-500 hover:bg-gray-400 rounded-full p-5" type='button' value="7" onClick={e => setValue(value + e.target.value)}/>
        <input class="font-mono bg-gray-500 hover:bg-gray-400 rounded-full p-5" type='button' value="8" onClick={e => setValue(value + e.target.value)}/>
        <input class="font-mono bg-gray-500 hover:bg-gray-400 rounded-full p-5" type='button' value="9" onClick={e => setValue(value + e.target.value)}/>
        <input class="font-mono bg-purple-500 hover:bg-purple-400 rounded-full p-5" type='button' value="+" onClick={e => setValue(value + e.target.value)}/>
  
        <input class="font-mono bg-blue-500 hover:bg-blue-400 rounded-full p-5" type='button' value="0" onClick={e => setValue(value + e.target.value)}/>
        <input class="font-mono col-span-3 bg-purple-500 hover:bg-purple-400 rounded-full p-5" type='button' value="=" onClick={e => setValue(eval(value))}/>
      </div>
    </div>
  
  </div>
  )
}

export default App
