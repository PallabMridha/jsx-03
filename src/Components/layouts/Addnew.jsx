import React, { useState,useEffect} from 'react'
import Countener from '../Countener'
import Flex from '../Flex'
import Image from '../Image'

import { FaHeart } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios'


const Addnew = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };
    // **********************
    const [MyProduct, setMyProduct] = useState([])
   useEffect(()=>{
    async function all () {
     let data = await axios.get("https://dummyjson.com/products");
     setMyProduct(data.data.products);
    }
    all();
   },[]
   )

    return (
        <>

            <Countener className={`pt-[90px]`}>
                <h1 className={`text-[39px] font-dm font-bold text-black pb-10`}>
                    New Arrivals
                </h1>

                
                <Slider {...settings} className={``}>
                  {MyProduct.map((item) => (
            
                 

                    <div key={item.id} className="relative  group px-3" >
                       <div key={item.id} className="">
                         <Link to={"/ProductsDatils"}>
                            <Image src={item.thumbnail} />
                        </Link>
                        <div className="">
                            <p className={`text-white bg-black w-[45px] text-center absolute top-[7%] left-[10%]`}>10%</p>
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
                            <p className={`text-[20px] font-bold font-dm"`}>{item.title}</p>
                            <p className={`text-[16px] font-normal font-dm text-pramiry pt-[3px]`}>{`$${item.price}`}</p>
                        </div>
                       </div>
                    </div>
 

               
          
                  ))}
                 </Slider>



            </Countener>
        </>
    )
}

export default Addnew



  {/* <div className="relative px-3 group">
                        <Image src={AddnewTwo} />
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


                    <div className="relative px-3 group">
                        <Image src={AddnewThree} />
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

                    <div className="relative px-3 group">
                        <Image src={AddnewFore} />
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

                    <div className="relative px-3 group">
                        <Image src={AddnewFore} />
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
                    </div> */}
