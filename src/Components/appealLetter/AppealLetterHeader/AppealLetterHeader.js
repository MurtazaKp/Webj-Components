import React, { useState } from 'react'
import { Switch } from 'antd'

const AppealLetterHeader = ({
    accountNumber,
    appealDeadline,
    letterStatus,
}) => {
    const [status, setStatus] = useState(letterStatus)
    const handleChange = () => {
        setStatus(!status)
    }
    return (
        <div className="flex items-center space-x-4">
            <span className="flex items-center">
                Account Number : <span className="ml-2">{accountNumber}</span>
            </span>
            <span className="flex items-center">
                Appeal Deadline : <span className="ml-2">{appealDeadline}</span>
            </span>
            <span className="flex items-center">
                Letter Status :{' '}
                <span className="ml-2">
                    <Switch checked={status} onChange={handleChange} />
                </span>
            </span>
        </div>
    )
}

export default AppealLetterHeader
