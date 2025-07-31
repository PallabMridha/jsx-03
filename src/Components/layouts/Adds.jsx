import React from 'react'
import Countener from '../Countener'
import Flex from '../Flex'
import Image from '../Image'
import addOne from '../../assets/addOne.png'
import addTwo from '../../assets/addTwo.png'
import addThree from '../../assets/Ad_3.png'
import { Link } from 'react-router-dom'

const Adds = () => {
  return (
    <>
    <div className="pt-9">
        <Countener>
            <Flex className={`justify-between`}>
                <div className="w-[49%]">
                    <Link>
                    <Image src={addOne}/>
                    </Link>
                </div>
                <div className="w-[49%]">
                    <Link>
                    <Image src={addTwo} className={`pb-6`} />
                    </Link>
                    <Link>
                    <Image src={addThree}/>
                    </Link>
                </div>
            </Flex>
        </Countener>
    </div>
    </>
  )
}

export default Adds
