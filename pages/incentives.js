import React from 'react'
import { AiOutlineHome } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';

import { BiBus } from 'react-icons/bi';
import { AiFillStar } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';


export default function incentives() {
  return (
    <>
        <div className='h-[30vh] w-[100vw] bg-[#2bff00] z-[-1]'>
            <div className="flex justify-between items-center align-middle w-full p-5">
                <h1 className="font-rubik font-semibold text-xl">TPORT</h1>
                <div className="flex justify-between items-center align-middle">
                    <div className="text-sm ">Points: 1789</div>
                </div>
            </div>
            <div className='p-5 text-3xl font-semibold'>Thanks For using our app. Here is your reward</div>
        </div>
        <div className='justify-center flex '>
            <div className='w-[80vw] h-[15vh] rounded-xl mt-[-7.5vh]  bg-white shadow-[0px_0px_75px_-15px_rgba(0,0,0,0.1)]'>
                <div className='justify-center align-middle text-center mt-1 text-lg font-semibold'>You Earned:</div>
                <div className='justify-center align-middle text-center text-5xl mt-3 font-semibold'>1250 </div>
            </div>
        </div>
        <div className="flex justify-between items-center align-middle w-full p-5 bg-yellow-100 absolute bottom-0">
            <div className="justify-between items-center align-middle">
                <AiOutlineHome size={"2rem"}/>
            </div>
            <div className="justify-between items-center align-middle">
                <BiBus size={"2rem"}/>
            </div>
            <div className="justify-between items-center align-middle">
                <BiSearch size={"2rem"}/>
            </div>
            <div className="justify-between items-center align-middle">
                <AiFillStar size={"2rem"}/>
            </div>
            <div className="justify-between items-center align-middle">
                <CgProfile size={"2rem"}/>
            </div>
        </div>
    </>
  )
}
