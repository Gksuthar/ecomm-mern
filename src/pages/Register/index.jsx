import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";

const Register = () => {
    const [isShowPassword,setisShowPassword] = useState(false)
  return (
    <div className='section py-10'>
        <div className="container">
            <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-10 mt-5">
                <h3 className='text-center !text-[18px] !font-[500] py-2 mb-4'>Sign Up to your account</h3>
                <form action="" className='w-full'>
                    <div className="form-group w-full mb-5">
                        <TextField id="standard-basic" type='text'  label="Full Name" variant="outlined" className='w-full' />
                    </div>
                    <div className="form-group w-full mb-5">
                        <TextField id="standard-basic" type='email'  label="Email id" variant="outlined" className='w-full' />
                    </div>
                    <div className="form-group w-full mb-5 relative">
                        <TextField id="standard-basic"  type={`${isShowPassword===false ? 'text' : 'password'}`} label="Password" variant="outlined" className='w-full' />
                        <Button onClick={()=>setisShowPassword(!isShowPassword)}  className='!absolute top-[10px] !text-black right-[10px] z-50 !w-[35px] !h-[35px] !min-w-[35px] opacity-75 '>
                            {
                                isShowPassword===true ?  <FaEye className='text-[20px]' />:<FaEyeSlash className='text-[20px]' />
                            }
                        </Button>
                    </div>
                <a className='link cursor-pointer text-[14px] mb-1 font-[600]' href="">forget password</a>
                <div className='flex items-center w-full mt-3 btn-lg'>
                    <Button className='btn-org w-full'><Link to='/'>Sign Up</Link></Button>
                </div>
                <p className='text-center text-[14px] mb-1'>Do You have already Account? <Link to='/Login' className=' link text-[14px] font-[600 ]'>Login</Link> </p>

                <p className='text-center text-[12px] font-[500] mb-2 mt-4'>Or continue With Social Account </p>
                <Button className='flex gap-3 w-full !bg-[#f1f1f1] !btn-lg !text-black mt-2'><FcGoogle className='text-[20px]'/>Sign Up with Google</Button>
                </form>

            </div>
        </div>
    </div>
  )
}

export default Register
