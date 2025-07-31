import React from 'react'
import Countener from '../Countener'
import Flex from '../Flex'
import { PiNumberTwoBold } from "react-icons/pi";
import { FaTruck } from "react-icons/fa";
import { FaUndo } from "react-icons/fa";

const Information = () => {
  return (
    <>
    <div className="py-6">
        <Countener>
            <Flex className={`justify-between`}>
                <div className="flex items-center gap-x-1">
                    <h1 className={`text-2xl`}><PiNumberTwoBold /></h1>
                    <p className={`text-[#6D6D6D] text-[16px] font-dm font-semibold`}>Two years warranty</p>
                </div>
                <div className="flex items-center gap-x-3">
                    <h1 className={`text-2xl`}><FaTruck /></h1>
                    <p className={`text-[#6D6D6D] text-[16px] font-dm font-semibold`}>Free shipping</p>
                </div>
                <div className="flex items-center gap-x-3">
                    <h1 className={`text-2xl`}><FaUndo /></h1>
                    <p className={`text-[#6D6D6D] text-[16px] font-dm font-semibold`}>Return policy in 30 days</p>
                </div>
                
            </Flex>
        </Countener>
    </div>
    </>
  )
}

export default Information
