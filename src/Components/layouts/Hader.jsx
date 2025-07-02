import React from 'react'
import { RiMenu2Fill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { AiFillCaretDown } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import Image from '../Image'
import Logo from '../../assets/OREBI©.png'
import Countener from '../Countener'
import Flex from '../Flex'

const Hader = () => {
  return (
    <>
      <div className="">
        <Countener>
          <Flex className={`mt-4`}>
            <div className="">
              <Image src={Logo} />
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

        <div className="bg-fromc mt-9">
          <Countener>
            <Flex>
              <div className="flex m-auto pt-5 pb-5">

                <div className={`flex justify-between items-center gap-x-38`}>
                  <div className="flex gap-2 items-center">
                    <button className={``}><><RiMenu2Fill /></></button>
                    <p>Shop by Category</p>
                  </div>

                  <div className="flex items-center bg-white p-[15px]">
                    <input className={` w-[600px] h-[30px] outline-0 `} type="text" placeholder='Search Products' />
                    <><FaSearch /></>

                  </div>

                  <div className=" flex items-center">
                    <><FaUserAlt /></>
                    <><AiFillCaretDown /></>
                    <button className={`pl-4`}><><FaShoppingCart /></></button>

                  </div>


                </div>

              </div>
            </Flex>
          </Countener>
        </div>
      </div>

    </>
  )
}

export default Hader
