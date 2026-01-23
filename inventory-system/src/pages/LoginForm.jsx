import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa";
import LogiscoolLogo from '../assets/Logiscool-logo.jpg'
import { FaEye, FaRegEyeSlash } from "react-icons/fa";

const LoginForm = () => {
    const [show, setShow] = useState(false);
    return (


        <div className="flex min-h-full flex-col justify-center px- py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img src={LogiscoolLogo} alt="Your Company" className=" mx-auto h-40 w-auto" />
                <h2 className="text-center text-2xl/9 font-bold tracking-tight text-gray-800">Sign in to your account</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form action="#" method="POST" className="space-y-6">
                    <div>
                        <label for="email" className="text-left block text-sm/6 font-medium text-gray-800">Email address</label>
                        <div className="mt-2">
                            <input id="email" placeholder="Password" type="email" name="email" required autocomplete="email" className="border-solid block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
                        </div>
                    </div>

                    <div className="mt-2 relative">
                        <label for="email" className="text-left block text-sm/6 font-medium text-gray-800">Password</label>
                        <input
                            type={show ? "text" : "password"}
                            placeholder="Password"
                            className="border-solid block w-full rounded-md bg-white/5 px-3 py-1.5 pr-10 text-white placeholder:text-gray-500 outline-1 -outline-offset-1 outline-white/10 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                        />

                        <div
                            onClick={() => setShow(!show)}
                            className="absolute right-3 top-8.5 transform-translate-y-1/2 text-gray-400 hover:text-indigo-400 cursor-pointer"
                        >
                            {show ? <FaEye size={18} /> : <FaRegEyeSlash size={18} />}
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md border border- bg-blue-400! px-3 py-1.5 text-sm font-semibold text-white 
                                        hover:bg-white! hover:text-black! hover:border-black!
                                        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500
                                        transition-colors duration-300"
                        >
                            Sign in
                        </button>

                    </div>
                </form>

            </div>
        </div>


    )
}

export default LoginForm