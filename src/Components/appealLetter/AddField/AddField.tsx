import React from 'react'

type Props = {
    handleDragStart: any
    accountName: string
    accountNumber: number
    accountAddress: string
    taxYear: string
    jurisdiction: string
}

const AddField: React.FC<Props> = ({
    handleDragStart,
    accountName,
    accountNumber,
    accountAddress,
    taxYear,
    jurisdiction,
}) => {
    return (
        <div className="menu-container">
            <div>Add Fields</div>
            <div>
                <div className="menu-span">
                    <span
                        draggable
                        onDragStart={(e) => handleDragStart(e, accountName)}
                    >
                        Account Name
                    </span>
                </div>
                <div className="menu-span">
                    <span
                        draggable
                        onDragStart={(e) => handleDragStart(e, accountNumber)}
                    >
                        Account Number
                    </span>
                </div>
                <div className="menu-span">
                    {/* Attach drag start event to initiate dragging */}
                    <span
                        draggable
                        onDragStart={(e) => handleDragStart(e, accountAddress)}
                    >
                        Account Address
                    </span>
                </div>
                <div className="menu-span">
                    {/* Attach drag start event to initiate dragging */}
                    <span
                        draggable
                        onDragStart={(e) => handleDragStart(e, taxYear)}
                    >
                        Tax Year
                    </span>
                </div>
                <div className="menu-span">
                    {/* Attach drag start event to initiate dragging */}
                    <span
                        draggable
                        onDragStart={(e) => handleDragStart(e, jurisdiction)}
                    >
                        Jurisdiction
                    </span>
                </div>
            </div>
        </div>
    )
}

export default AddField
