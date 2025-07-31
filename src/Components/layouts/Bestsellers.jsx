import React from 'react'
import Countener from '../Countener'
import Flex from '../Flex'
import Image from '../Image'
import BestOne from '../../assets/BestOne.png'
import Besttwo from '../../assets/Besttwo.png'
import BestThree from '../../assets/BestThree.png'
import BestFore from '../../assets/Bestfour.png'
import { FaHeart } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

const Bestsellers = () => {
  return (
     <>
    <Countener className={`pt-[90px]`}>
        <Flex className={`justify-between`}>
            <div className="relative w-[23%] group">
                <Image src={BestOne}/>
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
                <Image src={Besttwo}/>
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
                <Image src={BestThree}/>
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
                <Image src={BestFore}/>
                <div className="">
                    <p className={`text-white bg-black w-[45px] text-center absolute top-[7%] left-[10%]`}>New</p>
                </div>

                 <div className="bg-bagebg p-[30px] w-full opacity-0 absolute bottom-12 left-0 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
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
  )
}

export default Bestsellers
