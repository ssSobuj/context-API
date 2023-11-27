/* eslint-disable react/prop-types */
import { useContext } from "react"
import { Context } from "../App"

import Test4 from './Test4';
export default function Test3() {
  const {count,setCount} = useContext(Context)
  const increment = ()=>setCount(count+1)
  return (
    <div>
        <h1>Test3</h1>
        <h1>{count}</h1>
        <button onClick={()=>increment()}>click me</button>
       <Test4/>
    </div>
  )
}
