import { Button } from '@mui/material'
import React, { useState } from 'react'
import {FaAngleUp} from 'react-icons/fa6'
import {FaAngleDown} from 'react-icons/fa6'
const QtyBox = () => {

    const [qtyValue,setQtyvalue]  = useState(1)
     const plusQty =()=>{
        setQtyvalue(qtyValue+1)
     }
     const minusQty =()=>{
        if(qtyValue===1){
            setQtyvalue(1)
        }else{
            setQtyvalue(qtyValue-1)
        }
     }
  return (
    <div className='QtyBox relative '>
      <input type="number" className='w-full h-[40px] p-2 pl-3 text-[15px] focus:outline-none border border-[rgba(0,0,0,0.2)] rounded-md' value={qtyValue} />
      <div className='flex items-center flex-col justify-between h-[40px] absolute top-0 right-0 z-50 border-l border-[rgba(0,0,0,0.2)]'>

        <Button onClick={plusQty} className='!min-w-[10px] !w-[24px] !h-[20px] !text-black rounded-none'><FaAngleUp className='text-[12px]'/></Button>
        <Button onClick={minusQty} className='!min-w-[10px] !w-[24px] !h-[20px] !text-black rounded-none'><FaAngleDown className='text-[12px]'/></Button>
      </div>

      

    </div>
  )
}

export default QtyBox
