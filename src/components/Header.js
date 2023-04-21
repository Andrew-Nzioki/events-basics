import React from 'react'

 const Header = ({isOn}) => {
  return (
    <>
    <h4>{isOn ? "it's On":'its off'}</h4>
    </>
  )
}
export default Header