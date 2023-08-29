import React, { useEffect } from 'react'

const Child = () => {
  useEffect(()=>{
    console.log('child useEffect');
  })
  return (
    <div>Child</div>
  )
}

export default Child