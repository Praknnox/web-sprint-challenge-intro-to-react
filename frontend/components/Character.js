import React,{useState} from 'react'

function Character() { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  const [worldname,showWorld]=useState(false)
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  const toggel=()=>{
    showWorld(show=>!show)
  }
  return (
    <div>
      {/* Use the same markup with the same attributes as in the mock */}
    </div>
  )
}

export default Character
