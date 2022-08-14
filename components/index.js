
import React from 'react'
import Map from './map'



export default function index() {
    
  return (
    <>
    <div className='h-[100vh] w-[100vw] absolute bg-gray-400'>
        {/* <MyMapComponent/> */}
        Map
    </div>
    <div className='absolute h-fit bottom-0 '>
        <div class="grid grid-rows-1 grid-flow-col gap-4 m-4 h-[13vh]">
            <div className=' bg-white shadow-[0px_0px_75px_-15px_rgba(0,0,0,0.3)]'>
               
                <div className='align-middle justify-center flex text-center'>
                    <img src='img/bike.png' width={"75px"} height={"75px"}></img>
                </div>
                <div className='text-center font-bold'>SEDAN</div>

                <div className='text-center'>30 min</div>
            </div>
            <div className=' bg-white shadow-[0px_0px_75px_-15px_rgba(0,0,0,0.3)]'>
               
               <div className='align-middle justify-center flex text-center'>
                   <img src='img/bike.png' width={"75px"} height={"75px"}></img>
               </div>
               <div className='text-center font-bold'>SEDAN</div>

               <div className='text-center'>30 min</div>
           </div>
           <div className='bg-white shadow-[0px_0px_75px_-15px_rgba(0,0,0,0.3)]'>
               
               <div className='align-middle justify-center flex text-center'>
                   <img src='img/bike.png' width={"75px"} height={"75px"}></img>
               </div>
               <div className='text-center font-bold'>SEDAN</div>

               <div className='text-center'>30 min</div>
           </div>
        </div> 
        <div className='bg-white'>
            <div className="flex justify-between items-center align-middle w-full pt-4 h-[5vh] px-8 ">
                        <div className="font-rubik font-semibold text-lg">Estimated Fare:</div>
                        <div className="flex justify-between items-center align-middle">120.00</div>
            </div>
            <div className="flex justify-between items-center align-middle w-full h-[5vh] px-8 ">
                        <div className="font-rubik font-semibold text-lg">Capacity:</div>
                        <div className="flex justify-between items-center align-middle">1-30</div>
            </div>
            <div className="flex justify-between items-center align-middle w-full h-[5vh] px-8 ">
                        <div className="font-rubik font-semibold text-lg">Payable:</div>
                        <div className="flex justify-between items-center align-middle">60.00</div>
            </div>
            <div className="flex justify-between items-center align-middle w-full h-[8vh] border-y-2 border-slate-200 px-8 m-0">
                <div className='w-2/3 border-r-2 p-0 h-full pt-2 flex'>
                    <div className="font-rubik font-semibold text-lg pr-2">Payable:</div>
                    <div className="font-rubik font-medium text-emerald-400 text-lg px-2">OGO Wallet (60.00)</div>
                </div>
                <div className='h-full pt-2 text-slate-400 text-md'>Promo Code:</div>
            </div>
            <div className="flex justify-between items-center align-bottom w-full h-fit px-8 pb-4">
                <button type="button" className="text-white  w-full bg-[#2bff00] rounded-full text-lg px-5 py-2.5 text-center mr-2 mb-2 mt-4 font-bold">Book Now</button>
            </div>
        </div>
    </div>

    </>
  )
}