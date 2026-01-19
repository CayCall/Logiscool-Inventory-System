import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const LoginForm = () => {
    return (
        <body className='bg-gray-100'>
            <div className='bg-gray-50 border border-gray-300 rounded-2xl shadow-xl'>
                <form className='items-center'>
                    <div className='my-5'>
                        <h2 className='my-2 text-xl'>Welcome, To the LogiManage</h2>
                        <h2 className=' text-base'>Manage your school's Inventory</h2>
                    </div>

                    <div className='px-15 py-5'>
                        <div className='mb-7'>
                            <h3 className='text-base mb-2'>Enter Username</h3>

                            <input placeholder='Username' className='px-3 py-1 placeholder:text-xs leading-normal border border-gray-400 rounded-sm shadow-sm' />
                        </div>
                        <div className='mb-4'>
                            <h3 className='text-base mb-2'>Enter Password</h3>
                            <input placeholder='Password' className='px-3 py-1 placeholder:text-xs border border-gray-400 rounded-sm shadow-sm' />
                        </div>

                        <div>
                            <a>Forgot password?</a>

                        </div>

                    </div>

                    <button className='submit'>
                        submit <FaArrowRight />
                    </button>
                </form>
            </div>
        </body>
    )
}

export default LoginForm