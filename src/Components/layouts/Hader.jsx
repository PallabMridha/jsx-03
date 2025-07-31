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
import { Link } from 'react-router-dom';

const Hader = () => {
  return (
    <>
      <div className="">
        <Countener>
          <Flex className={`mt-4`}>
            <div className="">
             <Link to={"/"}>
              <Image src={Logo} />
             </Link>
            </div>
            <ul className={'flex m-auto'}>
              <Link to={"/"}>
              <li className={`uppercase font-bold text-[14px] pr-10 dm text-pramiry`}>Home</li>
              </Link>

              <Link to={"/shop"}>
               <li className={`uppercase font-bold text-[14px] pr-10 dm text-pramiry`}>Shop</li>
              </Link>

             
              <Link to={"/about"}>
               <li className={`uppercase font-bold text-[14px] pr-10 dm text-pramiry`}>About</li>
              </Link>


              <Link to={"/contacts"}>
              <li className={`uppercase font-bold text-[14px] pr-10 dm text-pramiry`}>Contacts</li>
              </Link>


             <Link to={"journal"}>
              <li className={`uppercase font-bold text-[14px] pr-10 dm text-pramiry`}>Journal</li>
             </Link>
            </ul>

          </Flex>
        </Countener>

        <div className="bg-fromc mt-9 p-[20px]">
          <Countener>
            <Flex className={`justify-between`}>
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
              
            </Flex>
          </Countener>
        </div>
      </div>

    </>
  )
}

export default Hader
