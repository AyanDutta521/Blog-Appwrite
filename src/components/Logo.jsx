import React from 'react'
import viteLogo from '../../public/favicon.svg'
function Logo({width = '100px'}) {
  return (
    <div>
      <img src={viteLogo} alt="Logo" style={{ width }} />
    </div>
  )
}

export default Logo
