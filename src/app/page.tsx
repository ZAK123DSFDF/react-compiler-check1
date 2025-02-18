"use client"
import {useEffect, useState} from "react";

function SlowComponent(){
  useEffect(()=>{
    console.log('component rerender')
  })
  let i=0
  while (i<100000){
    i++
  }
  return <h1>Slow component</h1>
}
export default function Home() {
  const [count,setCount]=useState(0)

  return (
      <>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>increment</button>
        <SlowComponent/>
      </>
  );
}
