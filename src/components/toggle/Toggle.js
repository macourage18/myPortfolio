import "../pages/nav.css"
import { useState } from "react"

export const Toggle = (initialval = false)=>{
  const [state, setState]= useState(initialval);

  const toggle = ()=>{
    setState((prev)=> !prev)
  }

  return [state, toggle]
};
