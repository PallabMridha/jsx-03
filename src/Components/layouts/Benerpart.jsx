import React from 'react'
import Countener from '../Countener'
import Flex from '../Flex'
import { RiMenu2Fill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { AiFillCaretDown } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import Image from '../Image';
import benerImage from '../../assets/Intro.png';

const Benerpart = () => {
  return (
   <section className={`bg-has mt-9 cursor-pointer`}>
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
    <Image src={benerImage}/>
   </section>
  )
}

export default Benerpart





