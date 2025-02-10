import { Button } from '@mui/material'
import React from 'react'
import { MdOutlineDeleteOutline } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const CartPanelData = () => {
  
  return (
    <>
      <div className="scroll max-h-[300px] w-[full] max-w-full overflow-y-scroll overflow-hidden">
          <div className="cartItem w-full flex items-center gap-4 border-b border[rgba(0,0,0,0.2)] pb-4">
            <div className="img  w-[30%] overflow-hidden h-[80px] rounded-md ">
              <img  src="https://api.spicezgold.com/download/file_1734529297930_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-2-202307260626.jpg" alt="cartImg" />
            </div>
            <div className="info w-[70%] relative">
              <h4 className="text-[13px] w-[90%]  font-[500]"> A-Line Kurti With Shararaasd asd  asd & Dupatta.</h4>
              <p className='flex items-center mt-4 mb-4 gap-4 '>
                <span>Qty : <span>2</span></span>
                <span className='text-primary font-[500]'>Price : 499</span>
              </p>
              <MdOutlineDeleteOutline className='absolute top-[10px] right-[10px] cursor-pointer text-[20px] link transition-all duration-300'/>

            </div>
          </div>
          <div className="cartItem w-full flex items-center gap-4 border-b border[rgba(0,0,0,0.2)] pb-4">
            <div className="img  w-[30%] overflow-hidden h-[80px] rounded-md ">
              <img src="https://api.spicezgold.com/download/file_1734529297930_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-2-202307260626.jpg" alt="cartImg" />
            </div>
            <div className="info w-[70%] relative">
              <h4 className="text-[13px] w-[90%]  font-[500]"> A-Line Kurti With Shararaasd asd  asd & Dupatta.</h4>
              <p className='flex items-center mt-4 mb-4 gap-4 '>
                <span>Qty : <span>2</span></span>
                <span className='text-primary font-[500]'>Price : 499</span>
              </p>
              <MdOutlineDeleteOutline className='absolute top-[10px] right-[10px] cursor-pointer text-[20px] link transition-all duration-300'/>

            </div>
          </div>
        
        </div>

        <div className="bottomSection absolute bottom-[10px] left-[10px] w-full overflow-hidden pr-5">


        <div className="bottomInfo w-full border-t px-4 py-3 border-[rgba(0,0,0,0.2)] flex items-center justify-between flex-col">
          <div className="flex items-center justify-between w-full">
            <span className='font-[600] text-[14px]'>1 item</span>
            <span className='text-primary font-bold'>499</span>
          </div>
          <div className="flex justify-between w-full">
            <span className='font-[600] text-[14px]'>Shipping</span>
            <span className='text-primary font-bold'>99</span>
          </div>
        </div>


        <div className="bottomInfo w-full border-t px-4 gap-2 py-3 border-[rgba(0,0,0,0.2)] flex items-center justify-between flex-col">
          <div className="flex items-center justify-between w-full">
            <span className='font-[600] text-[14px]'>Total(tax excl.)</span>
            <span className='text-primary font-bold'>199</span>
          </div>
          <div className="flex items-center justify-between w-full">
            <span className='font-[600] text-[14px]'>Total(tax incl.)</span>
            <span className='text-primary font-bold'>199</span>
          </div>
          <div className="flex justify-between w-full">
            <span className='font-[600] text-[14px]'>Taxes</span>
            <span className='text-primary font-bold'>99</span>
          </div>
        </div>
        <br />
        <div className="container flex items-center justify-between gap-5">
          <Button  className='btn-org btn-lg w-[50%]'>ViewCart</Button>
          <Button className='btn-org btn-lg w-[50%]'>Check Out</Button>
        </div>
      </div>

    </>
  )
}

export default CartPanelData
