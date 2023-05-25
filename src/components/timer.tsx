import React, { useEffect, useState } from 'react'

type Props = {}

export function Timer({}: Props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
        setCount((x) => {
            if (x > 60) clearInterval(intervalId);
            return x+1;
        })
    },1000);
    return () => clearInterval(intervalId);
  })

  return (
    <div className='d-flex justify-content-center align-items-baseline'>Count: <h2 className='m-l-4'>{count}s</h2></div>
  )
}