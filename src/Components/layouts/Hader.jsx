import React from 'react'
import Image from '../Image'
import Logo from '../../assets/OREBI©.png'
import Countener from '../Countener'
import Flex from '../Flex'

const Hader = () => {
  return (
   <>
    <Countener>
      <Flex className={`mt-4`}>
        <div className="">
          <Image src={Logo}/>
        </div>
        <ul className={'flex m-auto'}>
          <li className={`uppercase font-bold text-[14px] pr-10 cursor-pointer dm `}>Home</li>
          <li className={`uppercase font-bold text-[14px] pr-10 cursor-pointer dm text-pramiry`}>Shop</li>
          <li className={`uppercase font-bold text-[14px] pr-10 cursor-pointer dm text-pramiry`}>About</li>
          <li className={`uppercase font-bold text-[14px] pr-10 cursor-pointer dm text-pramiry`}>Contacts</li>
          <li className={`uppercase font-bold text-[14px] pr-10 cursor-pointer dm text-pramiry`}>Journal</li>
        </ul>
      </Flex>
    </Countener>
   
   </>
  )
}

export default Hader
