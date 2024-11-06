import React,{useState} from 'react'

function Character({name,homeplanet}) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  const [worldName,showWorld]=useState(false)
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  const toggel=()=>{
    showWorld(show=>!show)
  }
  return (
    <div className='character-card' onClick={toggel}>
      {/* Use the same markup with the same attributes as in the mock */
      <h3 className='character-name'  >{name}</h3>
    }
    {worldName&&(<p>Planet: <span className='character-planet'>{homeplanet}</span></p>)}
    </div>
  )
}

export default Character
