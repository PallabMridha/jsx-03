import React from 'react'

const Flex = ({children ,className}) => {
  return (
    <div className={`flex text-center ${className}`}>{children}</div>
  )
}

export default Flex
