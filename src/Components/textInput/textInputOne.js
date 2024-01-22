import React, { useState } from 'react'

const PasswordInput = ({ label, placeholder }) => {
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const handleChange = (e) => {
        setPassword(e.target.value)
    }

    const handleTogglePassword = () => {
        setShowPassword(!showPassword)
    }

    const inputData = {
        label: 'Password',
        type: 'password',
        placeholder: 'Enter a password',
    }

    return (
        <div className="py-8 bg-white">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-xl mx-auto">
                    <div>
                        <label
                            htmlFor=""
                            className="block text-sm font-medium text-gray-600"
                        >
                            {label}
                        </label>
                        <div className="relative mt-2">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                                <svg
                                    className="w-5 h-5 text-gray-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                    />
                                </svg>
                            </div>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name={label}
                                id={label}
                                placeholder={placeholder}
                                value={password}
                                onChange={handleChange}
                                className="border block w-full py-3 pl-12 pr-4 text-gray-500 placeholder-gray-500 border-red-500 rounded-lg focus:ring-red-60500 focus:border-red-500 sm:text-sm caret-red-600"
                            />
                            <div
                                className="absolute inset-y-0 right-0 flex items-center pr-4 cursor-pointer"
                                onClick={handleTogglePassword}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 576 512"
                                    className={`w-5 h-5 fill-gray-400 ${
                                        showPassword ? 'fill-gray-800' : ''
                                    }`}
                                >
                                    <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
                                </svg>
                            </div>
                        </div>
                        <ul className="pl-4 mt-2 text-sm font-medium text-red-500 list-disc list-outside">
                            <li>Use at least one Capital letter</li>
                            <li>Use at least one Special character</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PasswordInput
