import React from 'react'
import Countener from '../Countener'
import Flex from '../Flex'
import Image from '../Image'
import logo from '../../assets/OREBI©.png'
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Fouter = () => {
  return (
   <>
   <div className="bg-fouterbg py-15 mt-7">
      <Countener>
        <Flex className={`justify-between`}>
          <div className="w-[10%]">
            <h1 className={`text-[16px] font-bold uppercase pb-2.5`}>Menu</h1>
             <ul className={'leading-8'}>
              <li className={`uppercase font-bold text-[14px] cursor-pointer dm text-pramiry`}>Home</li>
              <li className={`uppercase font-bold text-[14px] cursor-pointer dm text-pramiry`}>Shop</li>
              <li className={`uppercase font-bold text-[14px] cursor-pointer dm text-pramiry`}>About</li>
              <li className={`uppercase font-bold text-[14px] cursor-pointer dm text-pramiry`}>Contacts</li>
              <li className={`uppercase font-bold text-[14px] cursor-pointer dm text-pramiry`}>Journal</li>
            </ul>
          </div>

          <div className="w-[20%]">
            <h1 className={`text-[16px] font-bold uppercase pb-2.5`}>SHOP</h1>

            <ul className={'leading-8'}>
              <li className={`font-bold text-[14px] cursor-pointer dm text-pramiry`}>Category 1</li>
              <li className={`font-bold text-[14px] cursor-pointer dm text-pramiry`}>Category 2</li>
              <li className={`font-bold text-[14px] cursor-pointer dm text-pramiry`}>Category 3</li>
              <li className={`font-bold text-[14px] cursor-pointer dm text-pramiry`}>Category 4</li>
              <li className={`font-bold text-[14px] cursor-pointer dm text-pramiry`}>Category 5</li>
            </ul>
          </div>
          <div className="w-[20%]">
            <h1 className={`text-[16px] font-bold uppercase pb-2.5`}>HELP</h1>

            <ul className={'leading-8'}>
              <li className={`font-bold text-[14px] cursor-pointer dm text-pramiry`}>Privacy Policy</li>
              <li className={`font-bold text-[14px] cursor-pointer dm text-pramiry`}>Terms & Conditions</li>
              <li className={`font-bold text-[14px] cursor-pointer dm text-pramiry`}>Special E-shop</li>
              <li className={`font-bold text-[14px] cursor-pointer dm text-pramiry`}>Shipping</li>
              <li className={`font-bold text-[14px] cursor-pointer dm text-pramiry`}>Secure Payments</li>
            </ul>
          </div>


          <div className="w-[40%]">
            <h1 className={`pr-[147px] font-bold`}>(052) 611-5711 company@domain.com</h1>
            <p>575 Crescent Ave. Quakertown, PA 18951</p>
          </div>

          <div className="w-[20%]">
            <Image src={logo} alt={logo}/>
          </div>


        </Flex>
      </Countener>
      <div className="pt-9">
        <Countener>
        <Flex>
        <><FaFacebookF /></>
        <samp className={`px-3`}><><FaLinkedinIn /></></samp>
        <><FaInstagram /></>
        </Flex>
        </Countener>
      </div>
   </div>
   </>
  )
}

export default Fouter
