/* eslint-disable react/prop-types */
/* eslint-disable no-undef */

import { useContext } from "react"
import { Context } from "../App"


export default function Test4() {
  const {count,setCount} = useContext(Context)
  const increment = ()=>setCount(count+1)
  return (
    <div>
        <h1>Test3</h1>
        <h1>{count}</h1>
        <button onClick={()=>increment()}>click me</button>
    </div>
  )
}
