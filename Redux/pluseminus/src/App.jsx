import React from 'react'
import { useSelector} from 'react-redux'
import { useDispatch } from 'react-redux'
import {IncmntNum,DcmntNum} from './action/action'
const App = () => {
  const todos = useSelector(state => state.root.pluseMinus)
  const dispach = useDispatch()
  console.log(todos)
  return (
    <>
      <button onClick={()=>dispach(DcmntNum())}>-</button>
      <input type="text" value={todos}/>
      <button onClick={()=>dispach(IncmntNum(5))}>+</button>
    </>
  )
}

export default App