
import { createContext, useState } from 'react'
import './App.css'
import Test from './components/Test'
export const Context = createContext()

function App() {
  const [count, setCount] = useState(0)


  return (
    <>

      <Context.Provider value={{ count, setCount}} >
      <Test/> 
      </Context.Provider>
      {/* <h1>Count</h1>
     <Test count={count} setCount={setCount} /> */}
      
    </>
  )
}

export default App
