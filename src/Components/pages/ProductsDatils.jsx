import React from 'react'
import Countener from '../Countener'
import Flex from '../Flex'
import Image from '../Image'
import productone from '../../assets/productone.png'
import producttwo from '../../assets/producttwo.png'
import productthree from '../../assets/productthree.png'
import productfour from '../../assets/productfour.png'
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";

const ProductsDatils = () => {
  return (
    <>
      <Countener>
        <Flex className={`flex-wrap gap-x-8 gap-y-8 pt-10`}>
          <Image className={`w-[48%]`} src={productone} />
          <Image className={`w-[48%]`} src={producttwo} />
          <Image className={`w-[48%]`} src={productthree} />
          <Image className={`w-[48%]`} src={productfour} />
        </Flex>
        <p className={`text-[39px] font-dm font-bold `}>Product</p>
        <Flex className={`items-center gap-x-2`}>
          <samp className={`text-amber-200`}><FaStar /></samp>
          <samp className={`text-amber-200`}><FaStar /></samp>
          <samp className={`text-amber-200`}><FaStar /></samp>
          <samp className={`text-amber-200`}><FaStarHalfAlt /></samp>
          <p className={`text-[14px] font-dm font-normal text-pramiry`}>1 Rivew</p>
        </Flex>
        <Flex className={`gap-x-8 pt-2`}>
          <del className={`text-[16px] font-dm text-pramiry font-normal`}>$88.00</del>
          <p className={`text-[16px] font-dm font-bold`}>$44.00</p>
        </Flex>

        <input type="color" className="w-12 h-12 rounded-full border-none p-0 cursor-pointer appearance-none mt-8" />

        <Flex className={`gap-x-18 items-center `}>
          <p className={`text-[16px] font-dm font-normal `}>Size :</p>
          <samp className={`border-x-1 border-y-1 border-has pt-1 pb-1 pl-3 pr-3 text-[16px] font-dm text-pramiry font-normal flex items-center gap-x-22 `}>p<FaAngleDown /></samp>
        </Flex>
        <div className="">
          <Flex className={`gap-x-6 items-center pt-8`}>
            <p className={`text-[16px] font-dm font-normal `}>QUANTITY :</p>
            <samp className={`border-x-1 border-y-1 border-has pt-1 pb-1 pl-3 pr-3 text-[16px] font-dm text-pramiry font-normal flex items-center gap-x-10`}> <FiMinus />  1 <FaPlus /> </samp>
          </Flex>
          <div className="">
            <Flex className={`gap-x-4 items-center pt-8 `}>
              <p className={`text-[16px] font-dm font-normal `}>STATUS :</p>
              <samp className={`border-x-1 border-y-1 border-has pt-1 pb-1 pl-3 pr-3 text-[16px] font-dm text-pramiry font-normal flex items-center gap-x-21 `}>In stock</samp>
            </Flex>
          </div>
          <Flex className={`gap-x-3 pt-8`}>
            <button className={`border-x-1 border-y-1 border-black px-8 py-2`}>Add to Wish List</button>
            <button className={`border-x-1 border-y-1 border-black px-8 py-2 text-white bg-black`}>Add to Cart</button>
          </Flex>
          <div className="w-[48%] items-center pt-9">
            <Flex className={`justify-between`}>
              <p className={`text-[16px] font-dm font-bold`}>FEATURES  & DETAILS</p>
              <samp className={``}>< FaPlus /></samp>
            </Flex>
          </div>
          <div className="w-[48%] items-center pt-8">
            <Flex className={`justify-between`}>
              <p className={`text-[16px] font-dm font-bold`}>FEATURES  & DETAILS</p>
              <samp className={``}>< FaPlus /></samp>
            </Flex>
          </div>
        </div>
        <p className={`text-[16px] font-dm font-normal text-pramiry w-[48%] pt-8`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <Flex className={`gap-x-8 pt-8`}>
          <p className={`text-[20px] font-dm text-pramiry font-normal`}>Description</p>
          <p className={`text-[20px] font-dm font-bold`}>Reviews (1)</p>
        </Flex>
        <p className={`text-[16px] font-dm font-normal text-pramiry pt-8`}>1 review for Product</p>
        <Flex className={`items-center gap-x-2 pt-8`}>
          <p className={`text-[16px] font-dm font-normal text-pramiry`}>John Ford</p>
          <samp className={`text-amber-200`}><FaStar /></samp>
          <samp className={`text-amber-200`}><FaStar /></samp>
          <samp className={`text-amber-200`}><FaStar /></samp>
          <samp className={`text-amber-200`}><FaStarHalfAlt /></samp>
        </Flex>
        <p className={`text-[16px] font-dm font-normal text-pramiry pt-2`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </p>
        <div className="">
          <h1>Add a Rivew</h1>
          <p className={`text-[16px] font-dm font-bold mt-8`}>Name</p>
          <input className={`text-[14px] font-dm font-normal `} type="text" placeholder='your name hare' />
          <p className={`text-[16px] font-dm font-bold mt-8`}>Email</p>
          <input className={`text-[14px] font-dm font-normal`} type="text" placeholder='Your email here' />
          <p className={`text-[16px] font-dm font-bold mt-8`}>Review</p>
          <input className={`text-[14px] font-dm font-normal`} type="text" placeholder='Your review here' />  
        </div>
        <button className={`border-x-1 border-y-1 border-black px-20 py-2 mt-8 text-white bg-black`}>Post</button>
      </Countener>
    </>
  )
}

export default ProductsDatils
