import React from 'react'
import Countener from '../Countener'
import Flex from '../Flex'
import Image from '../Image'
import specileOne from '../../assets/SpecialOne.png'
import SpecileTwo from '../../assets/SpecialTwo.png'
import SpecileThree from '../../assets/SpecialThree.png'
import specileFour from '../../assets/SpecialFour.png'
import { FaHeart } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

const Spiceal = () => {
  return (
   <>
    <>
       <Countener className={`pt-[90px]`}>
        <h1 className={`text-[39px] font-dm font-bold text-black pb-10`}>
                Special Offers
            </h1>

           <Flex className={`justify-between`}>
               <div className="relative w-[23%] group">
                   <Image src={specileOne}/>
                   <div className="">
                       <p className={`text-white bg-black w-[45px] text-center absolute top-[7%] left-[10%]`}>New</p>
                   </div>

                    <div className="bg-bagebg p-[30px] w-full absolute opacity-0 bottom-12 left-0 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                 <Flex className={`justify-end items-center gap-x-2`}>
                        <p className={`text-[16px] font-dm text-pramiry`}>Add to Wish List</p> <FaHeart />
                    </Flex>
                    <Flex className={`justify-end items-center gap-x-2 my-3`}>
                        <p className={`text-[16px] font-dm text-pramiry`} >Compare</p> <FaCodeCompare />
                    </Flex>
                    <Flex className={`justify-end items-center gap-x-2`}>
                        <p className={`text-[16px] font-dm font-bold`} >Add to Cart</p> <FaShoppingCart />
                    </Flex>
               </div>


                   <div className="flex justify-between pt-[15px]">
                       <p className={`text-[20px] font-bold font-dm"`}>Basic Crew Neck Tee</p>
                       <p className={`text-[16px] font-normal font-dm text-pramiry pt-[3px]`}>$44.00</p>
                   </div>
               </div>
   
   
               <div className="relative w-[23%] group">
                   <Image src={SpecileTwo}/>
                   <div className="">
                       <p className={`text-white bg-black w-[45px] text-center absolute top-[7%] left-[10%]`}>New</p>
                   </div>

                    <div className="bg-bagebg p-[30px] w-full absolute opacity-0 bottom-12 left-0 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                 <Flex className={`justify-end items-center gap-x-2`}>
                        <p className={`text-[16px] font-dm text-pramiry`}>Add to Wish List</p> <FaHeart />
                    </Flex>
                    <Flex className={`justify-end items-center gap-x-2 my-3`}>
                        <p className={`text-[16px] font-dm text-pramiry`} >Compare</p> <FaCodeCompare />
                    </Flex>
                    <Flex className={`justify-end items-center gap-x-2`}>
                        <p className={`text-[16px] font-dm font-bold`} >Add to Cart</p> <FaShoppingCart />
                    </Flex>
               </div>


                   <div className="flex justify-between pt-[15px]">
                       <p className={`text-[20px] font-bold font-dm"`}>Basic Crew Neck Tee</p>
                       <p className={`text-[16px] font-normal font-dm text-pramiry pt-[3px]`}>$44.00</p>
                   </div>
               </div>
   
   
   
               <div className="relative w-[23%] group">
                   <Image src={SpecileThree}/>
                   <div className="">
                       <p className={`text-white bg-black w-[45px] text-center absolute top-[7%] left-[10%]`}>New</p>
                   </div>

                    <div className="bg-bagebg p-[30px] w-full absolute opacity-0 bottom-12 left-0 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                 <Flex className={`justify-end items-center gap-x-2`}>
                        <p className={`text-[16px] font-dm text-pramiry`}>Add to Wish List</p> <FaHeart />
                    </Flex>
                    <Flex className={`justify-end items-center gap-x-2 my-3`}>
                        <p className={`text-[16px] font-dm text-pramiry`} >Compare</p> <FaCodeCompare />
                    </Flex>
                    <Flex className={`justify-end items-center gap-x-2`}>
                        <p className={`text-[16px] font-dm font-bold`} >Add to Cart</p> <FaShoppingCart />
                    </Flex>
               </div>


                   <div className="flex justify-between pt-[15px]">
                       <p className={`text-[20px] font-bold font-dm"`}>Basic Crew Neck Tee</p>
                       <p className={`text-[16px] font-normal font-dm text-pramiry pt-[3px]`}>$44.00</p>
                   </div>
               </div>
   
   
   
   
               <div className="relative w-[23%] group">
                   <Image src={specileFour}/>
                   <div className="">
                       <p className={`text-white bg-black w-[45px] text-center absolute top-[7%] left-[10%]`}>New</p>
                   </div>

                    <div className="bg-bagebg p-[30px] w-full absolute opacity-0 bottom-12 left-0 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                 <Flex className={`justify-end items-center gap-x-2`}>
                        <p className={`text-[16px] font-dm text-pramiry`}>Add to Wish List</p> <FaHeart />
                    </Flex>
                    <Flex className={`justify-end items-center gap-x-2 my-3`}>
                        <p className={`text-[16px] font-dm text-pramiry`} >Compare</p> <FaCodeCompare />
                    </Flex>
                    <Flex className={`justify-end items-center gap-x-2`}>
                        <p className={`text-[16px] font-dm font-bold`} >Add to Cart</p> <FaShoppingCart />
                    </Flex>
               </div>


                   <div className="flex justify-between pt-[15px]">
                       <p className={`text-[20px] font-bold font-dm"`}>Basic Crew Neck Tee</p>
                       <p className={`text-[16px] font-normal font-dm text-pramiry pt-[3px]`}>$44.00</p>
                   </div>
               </div>
           </Flex>
       </Countener>
       </>
   </>
  )
}

export default Spiceal
