import React, { useState } from 'react'

import {
    Button,
    ConfigProvider,
    Input,
    Switch,
    Dropdown,
    Space,
    Popover,
    Drawer,
    Modal,
} from 'antd/lib'
import TextArea from 'antd/lib/input/TextArea'
import 'react-quill/dist/quill.snow.css'

// import CreateAppealLetter from '@/Components/appealLetter/CreateAppealLetter'

const DatagainPage = () => {
    const [isEditTargetValue, SetIsEditTargetValue] = useState(false)
    const [isEditFinalValue, SetIsEditFinalValue] = useState(false)
    const [isEditEquailizationValue, SetIsEditEquailizationValue] =
        useState(false)
    const [isEditTaxValue, SetIsEditTaxValue] = useState(false)

    const [reasonDrawerOpen, setReasonDrawerOpen] = useState(false)
    const [taxDrawerOpen, setTaxDrawerOpen] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isAppealModalOpen, setAppealIsModalOpen] = useState(false)
    const [editorHtml, setEditorHtml] = useState('')
    const [targetValue, SetTargetValue] = useState({
        targetLandValue: '$100',
        targetAssesmentValue: '$100',
        targetTotalValue: '2',
    })
    const [finalValue, SetFinalValue] = useState({
        finalLandValue: '$100',
        finalAssesmentValue: '$100',
        finalTotalValue: '2',
    })
    const [taxRate, setTaxRate] = useState({
        equailizationRate: '1.0',
        taxRate: '1.0',
    })

    const showReasonDrawer = () => {
        setReasonDrawerOpen(true)
    }

    const onReasonDrawerClose = () => {
        setReasonDrawerOpen(false)
    }

    const showTaxDrawer = () => {
        setTaxDrawerOpen(true)
    }

    const onTaxDrawerClose = () => {
        setTaxDrawerOpen(false)
    }

    const showModal = () => {
        setIsModalOpen(true)
    }

    const handleOk = () => {
        setIsModalOpen(false)
    }

    const handleCancel = () => {
        setIsModalOpen(false)
    }

    const showAppealModal = () => {
        setAppealIsModalOpen(true)
    }

    const handleAppealOk = () => {
        setAppealIsModalOpen(false)
    }

    const handleAppealCancel = () => {
        setAppealIsModalOpen(false)
    }

    const onHandleTargetValueChange = (e) => {
        const { name, value } = e.target
        SetTargetValue((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const onHandleFinalValueChange = (e) => {
        const { name, value } = e.target
        SetFinalValue((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const onHandleTaxChange = (e) => {
        const { name, value } = e.target
        setTaxRate((prev) => ({
            ...prev,
            [name]: value,
        }))
    }
    const items = [
        {
            key: '1',
            label: <p>1st menu item</p>,
        },
        {
            key: '2',
            label: <p>2st menu item</p>,
        },
        {
            key: '3',
            label: <p>3st menu item</p>,
        },
    ]

    const HandleIsEditTargetValue = () => {
        SetIsEditTargetValue(!isEditTargetValue)
    }

    const HandleIsEditFinalValue = () => {
        SetIsEditFinalValue(!isEditFinalValue)
    }

    const HandleIsEquailizationValue = () => {
        SetIsEditEquailizationValue(!isEditEquailizationValue)
    }

    const HandleIsTaxValue = () => {
        SetIsEditTaxValue(!isEditTaxValue)
    }

    const HandleSave = () => {
        SetIsEditEquailizationValue(false)
        SetIsEditTaxValue(false)
        setTaxDrawerOpen(false)
    }
    const handleQuillChange = (content) => {
        setEditorHtml(content)
    }

    console.log(editorHtml, '99999999999999999999999')

    const content = (
        <div className="flex flex-col">
            <Button
                onClick={showModal}
                className="border-none shadow-none text-left"
            >
                Void Appeal
            </Button>
            <Button
                onClick={showTaxDrawer}
                className="border-none shadow-none text-left"
            >
                Tax Rate
            </Button>
            <Button className="border-none shadow-none text-left">
                Equalization Ratio
            </Button>
        </div>
    )
    return (
        <>
            <Drawer
                className=" rounded-xl"
                title="Reasons"
                onClose={onReasonDrawerClose}
                open={reasonDrawerOpen}
            >
                <div className="flex flex-col justify-between h-full">
                    <div className="flex flex-col gap-5">
                        <label
                            className="flex gap-5 justify-start items-center"
                            htmlFor="reasonOne"
                        >
                            <Input
                                className="h-5 w-5 p-1"
                                id="reasonOne"
                                type="checkbox"
                            />
                            Increase in cap rate
                        </label>
                        <label
                            className="flex gap-5 justify-start items-center"
                            htmlFor="reasonTwo"
                        >
                            <Input
                                className="h-5 w-5 p-1"
                                id="reasonTwo"
                                type="checkbox"
                            />
                            Increase in Vacancy
                        </label>{' '}
                        <label
                            className="flex gap-5 justify-start items-center"
                            htmlFor="reasonThree"
                        >
                            <Input
                                className="h-5 w-5 p-1"
                                id="reasonThree"
                                type="checkbox"
                            />
                            Income Approach
                        </label>{' '}
                        <label
                            className="flex gap-5 justify-start items-center"
                            htmlFor="reasonFour"
                        >
                            <Input
                                className="h-5 w-5 p-1"
                                id="reasonFour"
                                type="checkbox"
                            />
                            Sale/Market comparision approach
                        </label>{' '}
                        <label
                            className="flex gap-5 justify-start items-center"
                            htmlFor="reasonFive"
                        >
                            <Input
                                className="h-5 w-5 p-1"
                                id="reasonFive"
                                type="checkbox"
                            />
                            Uniformity of assessments
                        </label>{' '}
                        <label
                            className="flex gap-5 justify-start items-center"
                            htmlFor="reasonFive"
                        >
                            <Input
                                className="h-5 w-5 p-1"
                                id="reasonFive"
                                type="checkbox"
                            />
                            Increase in vacancy
                        </label>{' '}
                        <label
                            className="flex gap-5 justify-start items-center"
                            htmlFor="reasonSix"
                        >
                            <Input
                                className="h-5 w-5 p-1"
                                id="reasonSix"
                                type="checkbox"
                            />
                            Other
                        </label>
                    </div>
                    <div className="pt-5 flex gap-4">
                        <button
                            onClick={onReasonDrawerClose}
                            className="w-1/2 rounded text-sm py-2 border bg-white border-[#3FC3AC] text-[#3FC3AC]"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={onReasonDrawerClose}
                            className=" w-1/2 bg-[#3FC3AC] px-10 rounded text-sm py-2 text-white"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </Drawer>
            <Drawer
                className=" rounded-xl"
                title="Settings"
                onClose={onTaxDrawerClose}
                open={taxDrawerOpen}
            >
                <div className="flex justify-between h-full flex-col">
                    <div>
                        <div>
                            {!isEditEquailizationValue && (
                                <div
                                    onClick={HandleIsEquailizationValue}
                                    className="flex justify-between border p-2  mt-2"
                                >
                                    <p>
                                        Equalization Ration :
                                        {taxRate.equailizationRate}
                                    </p>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="17"
                                        viewBox="0 0 16 17"
                                        fill="none"
                                    >
                                        <path
                                            d="M8.84202 4.1254L3.36868 9.91874C3.16202 10.1387 2.96202 10.5721 2.92202 10.8721L2.67535 13.0321C2.58868 13.8121 3.14868 14.3454 3.92202 14.2121L6.06868 13.8454C6.36868 13.7921 6.78868 13.5721 6.99535 13.3454L12.4687 7.55207C13.4153 6.55207 13.842 5.41207 12.3687 4.01874C10.902 2.63874 9.78868 3.1254 8.84202 4.1254Z"
                                            stroke="#3FC3AC"
                                            stroke-miterlimit="10"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M7.92871 5.0918C8.21538 6.9318 9.70871 8.33846 11.562 8.52513"
                                            stroke="#3FC3AC"
                                            stroke-miterlimit="10"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </div>
                            )}
                            <div className="flex flex-col p-2  mt-2 rounded-md">
                                {isEditEquailizationValue && (
                                    <>
                                        <div>
                                            <p className="text-[#A5A8AF] text-xs font-bold mb-1">
                                                Equalization Ratio
                                            </p>
                                        </div>

                                        <div className=" font-semibold">
                                            <Input
                                                className="py-2"
                                                name="equailizationRate"
                                                value={
                                                    taxRate.equailizationRate
                                                }
                                                onChange={onHandleTaxChange}
                                            />
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                        <div>
                            {!isEditTaxValue && (
                                <div
                                    onClick={HandleIsTaxValue}
                                    className="flex justify-between border p-2  mt-2"
                                >
                                    <p>Tax Rate : {taxRate.taxRate}</p>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="17"
                                        viewBox="0 0 16 17"
                                        fill="none"
                                    >
                                        <path
                                            d="M8.84202 4.1254L3.36868 9.91874C3.16202 10.1387 2.96202 10.5721 2.92202 10.8721L2.67535 13.0321C2.58868 13.8121 3.14868 14.3454 3.92202 14.2121L6.06868 13.8454C6.36868 13.7921 6.78868 13.5721 6.99535 13.3454L12.4687 7.55207C13.4153 6.55207 13.842 5.41207 12.3687 4.01874C10.902 2.63874 9.78868 3.1254 8.84202 4.1254Z"
                                            stroke="#3FC3AC"
                                            stroke-miterlimit="10"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M7.92871 5.0918C8.21538 6.9318 9.70871 8.33846 11.562 8.52513"
                                            stroke="#3FC3AC"
                                            stroke-miterlimit="10"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </div>
                            )}
                            <div className="flex flex-col p-2  mt-2 rounded-md">
                                {isEditTaxValue && (
                                    <>
                                        <div>
                                            <p className="text-[#A5A8AF] text-xs font-bold mb-1">
                                                Tax Rate
                                            </p>
                                        </div>

                                        <div className=" font-semibold">
                                            <Input
                                                className="py-2"
                                                name="taxRate"
                                                value={taxRate.taxRate}
                                                onChange={onHandleTaxChange}
                                            />
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <button
                            onClick={HandleSave}
                            className="w-1/2 rounded text-sm py-2 border bg-white border-[#3FC3AC] text-[#3FC3AC]"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={HandleSave}
                            className="bg-[#3FC3AC] w-1/2 rounded text-sm py-2 text-white"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </Drawer>

            <Modal
                closeIcon={false}
                className="appeal-modal w-10/12 top-5"
                open={isAppealModalOpen}
            >
                <div className="">
                    <div className="relative flex self-center items-center justify-between p-4 rounded-t-xl  bg-blue-950">
                        <h2 className="text-white text-lg mx-auto text-center">
                            Appeal Letter
                        </h2>
                        <Button
                            className="!border-none"
                            onClick={handleAppealCancel}
                        >
                            <svg
                                className=""
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                viewBox="0 0 30 30"
                                fill="none"
                            >
                                <rect
                                    x="0.5"
                                    y="0.5"
                                    width="29"
                                    height="29"
                                    rx="14.5"
                                    fill="#F6F7F8"
                                />
                                <rect
                                    x="0.5"
                                    y="0.5"
                                    width="29"
                                    height="29"
                                    rx="14.5"
                                    stroke="#F6F7F8"
                                />
                                <path
                                    d="M10 20L20 10"
                                    stroke="#2D2E34"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M20 20L10 10"
                                    stroke="#2D2E34"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </Button>
                    </div>
                    <div className="bg-white rounded-b-xl p-4 pb-32 flex ">
                        {/* <CreateAppealLetter /> */}
                    </div>
                </div>
            </Modal>
            <Modal open={isModalOpen} closeIcon={false}>
                <p className="text-center font-bold mt-3">
                    Do you want to void this appeal?
                </p>
                <p className="mt-7 mb-1 font-semibold">Give your Reason</p>
                <TextArea className="!bg-gray-50 hover:!bg-gray-50 " rows={4} />
                <div className="flex gap-6 py-5 pe-6 justify-center">
                    <button
                        onClick={handleCancel}
                        className="px-14 rounded text-sm py-2 border bg-white border-[#3FC3AC] text-[#3FC3AC]"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleOk}
                        className="bg-[#3FC3AC] px-14 rounded text-sm py-2 text-white"
                    >
                        Save
                    </button>
                </div>
            </Modal>

            <div className="p-4 bg-gray-100">
                <div className="wrapper flex flex-col text-sm p-6 gap-5 rounded-xl bg-slate-200">
                    <div className="flex gap-2">
                        <div className="w-2/12">
                            <h2>Account Number</h2>
                            <p className="font-bold">1_870093</p>
                        </div>
                        <div className="w-3/12">
                            <h2>Account Status</h2>
                            <p className="font-bold">Active</p>
                        </div>
                        <div className="w-2/12">
                            <h2>Account type</h2>
                            <p className="font-bold">Property</p>
                        </div>
                        <div className="w-2/12">
                            <h2>Property type</h2>
                            <p className="font-bold">Real</p>
                        </div>
                        <div className="w-3/12">
                            <h2>Account Address</h2>
                            <p className="font-bold">
                                12/A Louise Street Phase 1 Alabama , Usa
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div className="w-2/12">
                            <h2>State </h2>
                            <p className=" font-bold">Alabama</p>
                        </div>
                        <div className="w-3/12">
                            <h2>Company</h2>
                            <p className=" font-bold">
                                Alabama and Gulf Coast Railway LLC
                            </p>
                        </div>
                        <div className="w-2/12">
                            <h2>Country</h2>
                            <p className=" font-bold">Baldwing</p>
                        </div>
                        <div className="w-2/12">
                            <h2>Accessor</h2>
                            <p className=" font-bold">
                                Wilcox Brown Hat 2 County Tax Collector
                            </p>
                        </div>
                        <div className="w-3/12">
                            <h2>Accessor Address</h2>
                            <p className=" font-bold">
                                1508-C , Marshall Street, D Block, Baldwin,
                                U.S.A.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="p-4 border bg-white border-[#DFE7FD]  rounded-xl mt-5">
                    <div className="flex ">
                        <div className="w-1/5">
                            <h2>Notice Value</h2>
                            <p className=" mt-1">$100</p>
                        </div>{' '}
                        <div className="w-1/5">
                            <h2>Target Assessment Reduction</h2>
                            <p className=" mt-1">$ 100</p>
                        </div>
                        <div className="w-1/5">
                            <h2>Target Tax Reduction</h2>
                            <p className=" mt-1">$ 100</p>
                        </div>
                        <div className="w-1/5">
                            <h2>Final Assessment Reduction</h2>
                            <p className=" font-bold flex">
                                <span className=" flex  bg-[#00AE50] px-2 py-1 mt-1 text-white rounded">
                                    $ 400
                                </span>
                            </p>
                        </div>
                        <div className="w-1/5">
                            <h2>Final Tax Reduction</h2>
                            <p className=" flex font-bold ">
                                <span className=" flex  bg-[#00AE50] px-2 py-1 mt-1 text-white rounded">
                                    $ 500
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="p-4 mt-5 flex rounded-xl bg-white ">
                    <div className="w-4/12 flex items-center gap-2">
                        <div className="w-2/12">Tax Year</div>
                        <div className="flex items-center gap-2">
                            <Input className="w-4/12" value="2023" disabled />
                            <Button
                                defaultBorderColor="red"
                                className="flex justify-center items-center border border-[#3FC3AC] hover:!border-[#3FC3AC]"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                >
                                    <mask
                                        id="path-1-inside-1_2173_87537"
                                        fill="white"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M3.80917 3.80177C6.65542 0.959266 11.2829 0.989266 14.1464 3.85352C17.0114 6.71852 17.0414 11.3483 14.1944 14.1945C11.3482 17.0408 6.71842 17.0115 3.85342 14.1465C3.04755 13.344 2.43866 12.3655 2.07455 11.2881C1.71045 10.2106 1.60104 9.06339 1.75492 7.93652C1.77511 7.78862 1.85323 7.65481 1.97208 7.56451C2.09093 7.47421 2.24078 7.43483 2.38867 7.45502C2.53656 7.47521 2.67038 7.55332 2.76068 7.67217C2.85098 7.79102 2.89036 7.94088 2.87017 8.08877C2.73955 9.04375 2.83216 10.016 3.1407 10.9292C3.44925 11.8423 3.96534 12.6715 4.64842 13.3515C7.08217 15.7845 10.9994 15.7988 13.3994 13.3995C15.7987 10.9995 15.7844 7.08227 13.3514 4.64852C10.9192 2.21702 7.00417 2.20127 4.60417 4.59752L5.16517 4.59977C5.23904 4.60011 5.31212 4.615 5.38023 4.64359C5.44835 4.67218 5.51016 4.7139 5.56215 4.76637C5.61414 4.81885 5.65529 4.88105 5.68324 4.94943C5.71118 5.01781 5.72539 5.09102 5.72505 5.16489C5.7247 5.23876 5.70981 5.31184 5.68123 5.37995C5.65264 5.44806 5.61092 5.50988 5.55844 5.56187C5.50596 5.61386 5.44376 5.655 5.37538 5.68295C5.307 5.7109 5.23379 5.72511 5.15992 5.72477L3.25042 5.71577C3.10215 5.71498 2.96018 5.65567 2.8554 5.55076C2.75063 5.44584 2.69151 5.30379 2.69092 5.15552L2.68117 3.24752C2.68078 3.17365 2.69494 3.10042 2.72284 3.03203C2.75075 2.96363 2.79185 2.9014 2.8438 2.84889C2.89576 2.79638 2.95755 2.75461 3.02564 2.72598C3.09374 2.69735 3.1668 2.68241 3.24067 2.68202C3.31454 2.68162 3.38776 2.69578 3.45616 2.72369C3.52456 2.75159 3.58679 2.79269 3.6393 2.84465C3.69181 2.8966 3.73358 2.95839 3.76221 3.02648C3.79084 3.09458 3.80578 3.16765 3.80617 3.24152L3.80917 3.80252V3.80177Z"
                                        />
                                        <path d="M9.39691 5.60225C9.29142 5.49676 9.14835 5.4375 8.99917 5.4375L8.99992 5.43825C8.85073 5.43825 8.70766 5.49751 8.60217 5.603C8.49668 5.70849 8.43742 5.85157 8.43742 6.00075V9.23325L10.4774 11.2733C10.5293 11.327 10.5914 11.3698 10.6601 11.3992C10.7287 11.4287 10.8025 11.4441 10.8772 11.4448C10.9519 11.4454 11.026 11.4311 11.0951 11.4028C11.1642 11.3745 11.227 11.3327 11.2798 11.2798C11.3326 11.227 11.3743 11.1642 11.4025 11.095C11.4308 11.0259 11.445 10.9518 11.4443 10.8771C11.4436 10.8024 11.4281 10.7286 11.3986 10.66C11.369 10.5914 11.3262 10.5294 11.2724 10.4775L9.56167 8.7675V6C9.56167 5.85082 9.5024 5.70774 9.39691 5.60225Z" />
                                    </mask>
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M3.80917 3.80177C6.65542 0.959266 11.2829 0.989266 14.1464 3.85352C17.0114 6.71852 17.0414 11.3483 14.1944 14.1945C11.3482 17.0408 6.71842 17.0115 3.85342 14.1465C3.04755 13.344 2.43866 12.3655 2.07455 11.2881C1.71045 10.2106 1.60104 9.06339 1.75492 7.93652C1.77511 7.78862 1.85323 7.65481 1.97208 7.56451C2.09093 7.47421 2.24078 7.43483 2.38867 7.45502C2.53656 7.47521 2.67038 7.55332 2.76068 7.67217C2.85098 7.79102 2.89036 7.94088 2.87017 8.08877C2.73955 9.04375 2.83216 10.016 3.1407 10.9292C3.44925 11.8423 3.96534 12.6715 4.64842 13.3515C7.08217 15.7845 10.9994 15.7988 13.3994 13.3995C15.7987 10.9995 15.7844 7.08227 13.3514 4.64852C10.9192 2.21702 7.00417 2.20127 4.60417 4.59752L5.16517 4.59977C5.23904 4.60011 5.31212 4.615 5.38023 4.64359C5.44835 4.67218 5.51016 4.7139 5.56215 4.76637C5.61414 4.81885 5.65529 4.88105 5.68324 4.94943C5.71118 5.01781 5.72539 5.09102 5.72505 5.16489C5.7247 5.23876 5.70981 5.31184 5.68123 5.37995C5.65264 5.44806 5.61092 5.50988 5.55844 5.56187C5.50596 5.61386 5.44376 5.655 5.37538 5.68295C5.307 5.7109 5.23379 5.72511 5.15992 5.72477L3.25042 5.71577C3.10215 5.71498 2.96018 5.65567 2.8554 5.55076C2.75063 5.44584 2.69151 5.30379 2.69092 5.15552L2.68117 3.24752C2.68078 3.17365 2.69494 3.10042 2.72284 3.03203C2.75075 2.96363 2.79185 2.9014 2.8438 2.84889C2.89576 2.79638 2.95755 2.75461 3.02564 2.72598C3.09374 2.69735 3.1668 2.68241 3.24067 2.68202C3.31454 2.68162 3.38776 2.69578 3.45616 2.72369C3.52456 2.75159 3.58679 2.79269 3.6393 2.84465C3.69181 2.8966 3.73358 2.95839 3.76221 3.02648C3.79084 3.09458 3.80578 3.16765 3.80617 3.24152L3.80917 3.80252V3.80177Z"
                                        fill="#3FC3AC"
                                    />
                                    <path
                                        d="M9.39691 5.60225C9.29142 5.49676 9.14835 5.4375 8.99917 5.4375L8.99992 5.43825C8.85073 5.43825 8.70766 5.49751 8.60217 5.603C8.49668 5.70849 8.43742 5.85157 8.43742 6.00075V9.23325L10.4774 11.2733C10.5293 11.327 10.5914 11.3698 10.6601 11.3992C10.7287 11.4287 10.8025 11.4441 10.8772 11.4448C10.9519 11.4454 11.026 11.4311 11.0951 11.4028C11.1642 11.3745 11.227 11.3327 11.2798 11.2798C11.3326 11.227 11.3743 11.1642 11.4025 11.095C11.4308 11.0259 11.445 10.9518 11.4443 10.8771C11.4436 10.8024 11.4281 10.7286 11.3986 10.66C11.369 10.5914 11.3262 10.5294 11.2724 10.4775L9.56167 8.7675V6C9.56167 5.85082 9.5024 5.70774 9.39691 5.60225Z"
                                        fill="#3FC3AC"
                                        fill-opacity="0.4"
                                    />
                                    <path
                                        d="M3.80917 3.80177L2.81988 2.81116L2.40917 3.22133V3.80177H3.80917ZM14.1464 3.85352L13.1563 4.84334L13.1565 4.84347L14.1464 3.85352ZM14.1944 14.1945L13.2046 13.2044L13.2045 13.2046L14.1944 14.1945ZM3.85342 14.1465L4.84337 13.1566L4.84132 13.1545L3.85342 14.1465ZM1.75492 7.93652L3.14205 8.12593L3.14206 8.12588L1.75492 7.93652ZM2.87017 8.08877L4.25726 8.27849L4.25731 8.27813L2.87017 8.08877ZM4.64842 13.3515L5.63822 12.3614L5.63616 12.3594L4.64842 13.3515ZM13.3994 13.3995L14.3892 14.3896L14.3895 14.3893L13.3994 13.3995ZM13.3514 4.64852L14.3415 3.65872L14.3412 3.65841L13.3514 4.64852ZM4.60417 4.59752L3.615 3.60679L1.23406 5.98401L4.59856 5.9975L4.60417 4.59752ZM5.16517 4.59977L5.17171 3.19978L5.17079 3.19978L5.16517 4.59977ZM5.15992 5.72477L5.15332 7.12475H5.15339L5.15992 5.72477ZM3.25042 5.71577L3.24297 7.11575L3.24382 7.11575L3.25042 5.71577ZM2.69092 5.15552L4.09091 5.14994L4.0909 5.14836L2.69092 5.15552ZM2.68117 3.24752L4.08116 3.24036L4.08115 3.24005L2.68117 3.24752ZM3.80617 3.24152L2.40619 3.24898L2.40619 3.249L3.80617 3.24152ZM3.80917 3.80252L2.40919 3.81L5.20917 3.80252H3.80917ZM8.99917 5.4375V4.0375H5.61813L8.00945 6.42769L8.99917 5.4375ZM9.39691 5.60225L10.3869 4.6123H10.3869L9.39691 5.60225ZM9.56167 8.7675H8.16167V9.34758L8.57193 9.75767L9.56167 8.7675ZM11.2724 10.4775L10.2827 11.4677L10.2914 11.4764L10.3003 11.485L11.2724 10.4775ZM10.4774 11.2733L11.484 10.3002L11.4757 10.2917L11.4674 10.2833L10.4774 11.2733ZM8.43742 9.23325H7.03742V9.81315L7.44747 10.2232L8.43742 9.23325ZM8.60217 5.603L7.61222 4.61305L8.60217 5.603ZM8.99992 5.43825V6.83825H12.381L9.98963 4.44806L8.99992 5.43825ZM4.79847 4.79237C7.08839 2.50546 10.8298 2.5162 13.1563 4.84334L15.1365 2.8637C11.736 -0.537673 6.22246 -0.586932 2.81988 2.81116L4.79847 4.79237ZM13.1565 4.84347C15.4846 7.17156 15.4949 10.9147 13.2046 13.2044L15.1842 15.1846C18.5879 11.7818 18.5383 6.26548 15.1364 2.86357L13.1565 4.84347ZM13.2045 13.2046C10.9146 15.4945 7.1713 15.4845 4.84337 13.1566L2.86347 15.1365C6.26555 18.5385 11.7818 18.5871 15.1844 15.1845L13.2045 13.2046ZM4.84132 13.1545C4.18876 12.5047 3.69571 11.7124 3.40087 10.8399L0.748235 11.7363C1.18161 13.0187 1.90633 14.1833 2.86552 15.1385L4.84132 13.1545ZM3.40087 10.8399C3.10604 9.96738 3.01745 9.03843 3.14205 8.12593L0.367796 7.7471C0.184643 9.08835 0.314864 10.4538 0.748235 11.7363L3.40087 10.8399ZM3.14206 8.12588C3.11202 8.34588 2.99583 8.54494 2.81903 8.67927L1.12513 6.44976C0.710624 6.76468 0.438202 7.23137 0.36779 7.74715L3.14206 8.12588ZM2.81903 8.67927C2.64223 8.81359 2.41931 8.87218 2.19931 8.84215L2.57804 6.06788C2.06226 5.99747 1.53963 6.13484 1.12513 6.44976L2.81903 8.67927ZM2.19931 8.84215C1.97931 8.81212 1.78025 8.69592 1.64592 8.51912L3.87543 6.82522C3.56051 6.41072 3.09382 6.13829 2.57804 6.06788L2.19931 8.84215ZM1.64592 8.51912C1.5116 8.34232 1.45301 8.1194 1.48304 7.8994L4.25731 8.27813C4.32772 7.76235 4.19036 7.23972 3.87543 6.82522L1.64592 8.51912ZM1.48309 7.89904C1.32313 9.06849 1.43653 10.2591 1.81437 11.3773L4.46703 10.481C4.22778 9.77292 4.15597 9.019 4.25726 8.27849L1.48309 7.89904ZM1.81437 11.3773C2.19221 12.4955 2.8242 13.5109 3.66069 14.3437L5.63616 12.3594C5.10648 11.832 4.70629 11.1891 4.46703 10.481L1.81437 11.3773ZM3.65863 14.3416C6.62988 17.312 11.4334 17.3445 14.3892 14.3896L12.4096 12.4094C10.5655 14.253 7.53446 14.2571 5.63822 12.3614L3.65863 14.3416ZM14.3895 14.3893C17.3444 11.4335 17.3119 6.62997 14.3415 3.65872L12.3613 5.63831C14.257 7.53456 14.2529 10.5656 12.4093 12.4097L14.3895 14.3893ZM14.3412 3.65841C11.3718 0.689897 6.57103 0.655378 3.615 3.60679L5.59335 5.58824C7.43731 3.74715 10.4666 3.74413 12.3616 5.63862L14.3412 3.65841ZM4.59856 5.9975L5.15956 5.99975L5.17079 3.19978L4.60979 3.19753L4.59856 5.9975ZM5.15864 5.99975C5.04866 5.99924 4.93986 5.97707 4.83845 5.93451L5.92202 3.35267C5.68438 3.25294 5.42942 3.20098 5.17171 3.19978L5.15864 5.99975ZM4.83845 5.93451C4.73703 5.89194 4.645 5.82982 4.56759 5.75169L6.55671 3.78106C6.37533 3.59797 6.15966 3.45241 5.92202 3.35267L4.83845 5.93451ZM4.56759 5.75169C4.49019 5.67356 4.42893 5.58095 4.38732 5.47915L6.97915 4.41972C6.88164 4.18116 6.73809 3.96414 6.55671 3.78106L4.56759 5.75169ZM4.38732 5.47915C4.3457 5.37734 4.32455 5.26834 4.32506 5.15836L7.12503 5.17142C7.12624 4.91371 7.07667 4.65828 6.97915 4.41972L4.38732 5.47915ZM4.32506 5.15836C4.32558 5.04838 4.34775 4.93958 4.39031 4.83816L6.97214 5.92174C7.07188 5.6841 7.12383 5.42914 7.12503 5.17142L4.32506 5.15836ZM4.39031 4.83816C4.43287 4.73675 4.49499 4.64471 4.57312 4.56731L6.54376 6.55643C6.72684 6.37505 6.87241 6.15938 6.97214 5.92174L4.39031 4.83816ZM4.57312 4.56731C4.65125 4.48991 4.74386 4.42865 4.84567 4.38704L5.9051 6.97887C6.14366 6.88136 6.36067 6.73781 6.54376 6.55643L4.57312 4.56731ZM4.84567 4.38704C4.94747 4.34542 5.05648 4.32427 5.16646 4.32478L5.15339 7.12475C5.41111 7.12595 5.66654 7.07638 5.9051 6.97887L4.84567 4.38704ZM5.16652 4.32478L3.25702 4.31578L3.24382 7.11575L5.15332 7.12475L5.16652 4.32478ZM3.25788 4.31579C3.47864 4.31696 3.69002 4.40526 3.84602 4.56147L1.86479 6.54004C2.23035 6.90609 2.72565 7.11299 3.24297 7.11575L3.25788 4.31579ZM3.84602 4.56147C4.00202 4.71768 4.09003 4.92917 4.09091 5.14994L1.29093 5.1611C1.293 5.67841 1.49924 6.17399 1.86479 6.54004L3.84602 4.56147ZM4.0909 5.14836L4.08116 3.24036L1.28119 3.25467L1.29094 5.16267L4.0909 5.14836ZM4.08115 3.24005C4.08174 3.35003 4.06066 3.45905 4.01911 3.56088L1.42657 2.50318C1.32922 2.7418 1.27982 2.99727 1.28119 3.25498L4.08115 3.24005ZM4.01911 3.56088C3.97757 3.66271 3.91637 3.75536 3.83902 3.83355L1.84859 1.86423C1.66733 2.04744 1.52393 2.26455 1.42657 2.50318L4.01911 3.56088ZM3.83902 3.83355C3.76167 3.91173 3.66967 3.97391 3.56829 4.01654L2.48299 1.43543C2.24542 1.53532 2.02985 1.68103 1.84859 1.86423L3.83902 3.83355ZM3.56829 4.01654C3.46691 4.05917 3.35812 4.08141 3.24814 4.082L3.23321 1.28204C2.97549 1.28341 2.72057 1.33553 2.48299 1.43543L3.56829 4.01654ZM3.24814 4.082C3.13816 4.08258 3.02914 4.0615 2.92731 4.01996L3.98501 1.42742C3.74639 1.33006 3.49092 1.28066 3.23321 1.28204L3.24814 4.082ZM2.92731 4.01996C2.82548 3.97841 2.73283 3.91722 2.65464 3.83986L4.62396 1.84943C4.44075 1.66817 4.22363 1.52477 3.98501 1.42742L2.92731 4.01996ZM2.65464 3.83986C2.57646 3.76251 2.51428 3.67051 2.47165 3.56913L5.05276 2.48384C4.95287 2.24627 4.80716 2.03069 4.62396 1.84943L2.65464 3.83986ZM2.47165 3.56913C2.42902 3.46775 2.40678 3.35896 2.40619 3.24898L5.20615 3.23405C5.20478 2.97633 5.15266 2.72141 5.05276 2.48384L2.47165 3.56913ZM2.40619 3.249L2.40919 3.81L5.20915 3.79503L5.20615 3.23403L2.40619 3.249ZM5.20917 3.80252V3.80177H2.40917V3.80252H5.20917ZM8.99917 6.8375C8.77705 6.8375 8.56403 6.74926 8.40696 6.5922L10.3869 4.6123C10.0188 4.24426 9.51965 4.0375 8.99917 4.0375V6.8375ZM8.40696 6.5922C8.2499 6.43514 8.16167 6.22212 8.16167 6H10.9617C10.9617 5.47952 10.7549 4.98035 10.3869 4.6123L8.40696 6.5922ZM8.16167 6V8.7675H10.9617V6H8.16167ZM8.57193 9.75767L10.2827 11.4677L12.2621 9.48733L10.5514 7.77733L8.57193 9.75767ZM10.3003 11.485C10.2203 11.4077 10.1564 11.3154 10.1125 11.2132L12.6846 10.1069C12.5817 9.86747 12.4321 9.65099 12.2445 9.47004L10.3003 11.485ZM10.1125 11.2132C10.0685 11.111 10.0454 11.0012 10.0444 10.89L12.8442 10.8643C12.8419 10.6037 12.7876 10.3462 12.6846 10.1069L10.1125 11.2132ZM10.0444 10.89C10.0433 10.7787 10.0645 10.6685 10.1065 10.5655L12.6985 11.6246C12.7971 11.3833 12.8466 11.1249 12.8442 10.8643L10.0444 10.89ZM10.1065 10.5655C10.1486 10.4626 10.2107 10.369 10.2893 10.2904L12.2702 12.2693C12.4544 12.085 12.6 11.8658 12.6985 11.6246L10.1065 10.5655ZM10.2893 10.2904C10.3679 10.2117 10.4614 10.1495 10.5643 10.1073L11.6258 12.6983C11.867 12.5995 12.086 12.4537 12.2702 12.2693L10.2893 10.2904ZM10.5643 10.1073C10.6672 10.0651 10.7775 10.0439 10.8887 10.0448L10.8657 12.8447C11.1263 12.8469 11.3847 12.7971 11.6258 12.6983L10.5643 10.1073ZM10.8887 10.0448C10.9999 10.0457 11.1098 10.0688 11.212 10.1126L10.1081 12.6858C10.3476 12.7886 10.6051 12.8426 10.8657 12.8447L10.8887 10.0448ZM11.212 10.1126C11.3142 10.1565 11.4067 10.2202 11.484 10.3002L9.47088 12.2463C9.652 12.4337 9.86862 12.5831 10.1081 12.6858L11.212 10.1126ZM11.4674 10.2833L9.42737 8.2433L7.44747 10.2232L9.48747 12.2632L11.4674 10.2833ZM9.83742 9.23325V6.00075H7.03742V9.23325H9.83742ZM9.83742 6.00075C9.83742 6.22287 9.74918 6.43589 9.59212 6.59295L7.61222 4.61305C7.24418 4.98109 7.03742 5.48026 7.03742 6.00075H9.83742ZM9.59212 6.59295C9.43506 6.75001 9.22204 6.83825 8.99992 6.83825V4.03825C8.47943 4.03825 7.98026 4.24501 7.61222 4.61305L9.59212 6.59295ZM9.98963 4.44806L9.98888 4.44731L8.00945 6.42769L8.0102 6.42844L9.98963 4.44806Z"
                                        fill="#3FC3AC"
                                        mask="url(#path-1-inside-1_2173_87537)"
                                    />
                                </svg>
                            </Button>
                            <div className="ms-6 flex gap-2 ">
                                <span>
                                    <a className="underline font-semibold text-[#1E81CE]">
                                        Letter Sent
                                    </a>
                                    <p className="text-xs text-red-500">
                                        May 12 2023
                                    </p>
                                </span>
                                <ConfigProvider
                                    theme={{
                                        components: {
                                            Switch: {
                                                colorPrimary: '#3FC3AC',
                                            },
                                        },
                                    }}
                                >
                                    <Switch className="hover:!bg-none bg-slate-400 checked:!bg-none checked:hover:bg-none mt-1" />
                                </ConfigProvider>
                            </div>
                        </div>
                    </div>
                    <div className="w-4/12 flex items-center text-md justify-end gap-3">
                        <p>Appeals Status</p>
                        <Dropdown
                            menu={{
                                items,
                                selectable: true,
                                defaultSelectedKeys: ['3'],
                            }}
                            placement="bottom"
                            className="w-5/12"
                            trigger={'click'}
                        >
                            <a onClick={(e) => e.preventDefault()}>
                                <Button
                                    className="flex w-[170px] items-center justify-center"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    Awating Information
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="15"
                                        height="14"
                                        viewBox="0 0 15 14"
                                        fill="none"
                                    >
                                        <path
                                            d="M13.2167 4.0162C12.9789 3.79534 12.5975 3.79534 12.3597 4.0162L7.25023 8.76064L2.14021 4.01565L2.03814 4.12557L2.14021 4.01565C1.90236 3.79479 1.52101 3.79479 1.28316 4.01565C1.03895 4.24241 1.03895 4.615 1.28316 4.84176L6.82141 9.98435C7.05926 10.2052 7.44061 10.2052 7.67846 9.98435L13.2163 4.84211C13.2164 4.84203 13.2165 4.84196 13.2166 4.84189C13.3378 4.72995 13.4 4.58026 13.4 4.42898C13.4 4.27714 13.3368 4.12772 13.2167 4.0162Z"
                                            fill="#667085"
                                            stroke="#667085"
                                            stroke-width="0.3"
                                        />
                                    </svg>
                                </Button>
                            </a>
                        </Dropdown>
                    </div>
                    <div className="w-4/12  flex justify-end items-center gap-2">
                        <Button
                            onClick={showAppealModal}
                            className="flex justify-center px-1.5 items-center border border-[#3FC3AC] hover:!border-[#3FC3AC]"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                            >
                                <path
                                    d="M11.25 17.0625H6.75C2.6775 17.0625 0.9375 15.3225 0.9375 11.25V6.75C0.9375 2.6775 2.6775 0.9375 6.75 0.9375H10.5C10.8075 0.9375 11.0625 1.1925 11.0625 1.5C11.0625 1.8075 10.8075 2.0625 10.5 2.0625H6.75C3.2925 2.0625 2.0625 3.2925 2.0625 6.75V11.25C2.0625 14.7075 3.2925 15.9375 6.75 15.9375H11.25C14.7075 15.9375 15.9375 14.7075 15.9375 11.25V7.5C15.9375 7.1925 16.1925 6.9375 16.5 6.9375C16.8075 6.9375 17.0625 7.1925 17.0625 7.5V11.25C17.0625 15.3225 15.3225 17.0625 11.25 17.0625Z"
                                    fill="#3FC3AC"
                                />
                                <path
                                    d="M16.5 8.06335H13.5C10.935 8.06335 9.9375 7.06585 9.9375 4.50085V1.50085C9.9375 1.27585 10.0725 1.06585 10.2825 0.983346C10.4925 0.893346 10.7325 0.945846 10.8975 1.10335L16.8975 7.10335C17.055 7.26085 17.1075 7.50835 17.0175 7.71835C16.9275 7.92835 16.725 8.06335 16.5 8.06335ZM11.0625 2.85835V4.50085C11.0625 6.43585 11.565 6.93835 13.5 6.93835H15.1425L11.0625 2.85835Z"
                                    fill="#3FC3AC"
                                />
                            </svg>
                        </Button>
                        <Button className="flex justify-center px-1.5 items-center border border-[#3FC3AC] hover:!border-[#3FC3AC]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                            >
                                <path
                                    d="M6 4.3125C5.6925 4.3125 5.4375 4.0575 5.4375 3.75V1.5C5.4375 1.1925 5.6925 0.9375 6 0.9375C6.3075 0.9375 6.5625 1.1925 6.5625 1.5V3.75C6.5625 4.0575 6.3075 4.3125 6 4.3125Z"
                                    fill="#3FC3AC"
                                />
                                <path
                                    d="M12 4.3125C11.6925 4.3125 11.4375 4.0575 11.4375 3.75V1.5C11.4375 1.1925 11.6925 0.9375 12 0.9375C12.3075 0.9375 12.5625 1.1925 12.5625 1.5V3.75C12.5625 4.0575 12.3075 4.3125 12 4.3125Z"
                                    fill="#3FC3AC"
                                />
                                <path
                                    d="M6.375 10.8747C6.2775 10.8747 6.18 10.8523 6.09 10.8148C5.9925 10.7773 5.9175 10.7247 5.8425 10.6572C5.7075 10.5147 5.625 10.3272 5.625 10.1247C5.625 10.0272 5.6475 9.92974 5.685 9.83974C5.7225 9.74974 5.775 9.66725 5.8425 9.59225C5.9175 9.52475 5.9925 9.47224 6.09 9.43474C6.36 9.32224 6.6975 9.38225 6.9075 9.59225C7.0425 9.73475 7.125 9.92975 7.125 10.1247C7.125 10.1697 7.1175 10.2223 7.11 10.2748C7.1025 10.3198 7.0875 10.3647 7.065 10.4097C7.05 10.4547 7.0275 10.4997 6.9975 10.5447C6.975 10.5822 6.9375 10.6197 6.9075 10.6572C6.765 10.7922 6.57 10.8747 6.375 10.8747Z"
                                    fill="#3FC3AC"
                                />
                                <path
                                    opacity="0.4"
                                    d="M9 10.8742C8.9025 10.8742 8.805 10.8517 8.715 10.8142C8.6175 10.7767 8.5425 10.7242 8.4675 10.6567C8.3325 10.5142 8.25 10.3267 8.25 10.1242C8.25 10.0267 8.2725 9.92917 8.31 9.83917C8.3475 9.74917 8.4 9.66668 8.4675 9.59168C8.5425 9.52418 8.6175 9.47166 8.715 9.43416C8.985 9.31416 9.3225 9.38168 9.5325 9.59168C9.6675 9.73418 9.75 9.92917 9.75 10.1242C9.75 10.1692 9.7425 10.2217 9.735 10.2742C9.7275 10.3192 9.7125 10.3642 9.69 10.4092C9.675 10.4542 9.6525 10.4992 9.6225 10.5442C9.6 10.5817 9.5625 10.6192 9.5325 10.6567C9.39 10.7917 9.195 10.8742 9 10.8742Z"
                                    fill="#3FC3AC"
                                />
                                <path
                                    d="M11.625 10.8742C11.5275 10.8742 11.43 10.8517 11.34 10.8142C11.2425 10.7767 11.1675 10.7242 11.0925 10.6567C11.0625 10.6192 11.0325 10.5817 11.0025 10.5442C10.9725 10.4992 10.95 10.4542 10.935 10.4092C10.9125 10.3642 10.8975 10.3192 10.89 10.2742C10.8825 10.2217 10.875 10.1692 10.875 10.1242C10.875 9.92917 10.9575 9.73418 11.0925 9.59168C11.1675 9.52418 11.2425 9.47166 11.34 9.43416C11.6175 9.31416 11.9475 9.38168 12.1575 9.59168C12.2925 9.73418 12.375 9.92917 12.375 10.1242C12.375 10.1692 12.3675 10.2217 12.36 10.2742C12.3525 10.3192 12.3375 10.3642 12.315 10.4092C12.3 10.4542 12.2775 10.4992 12.2475 10.5442C12.225 10.5817 12.1875 10.6192 12.1575 10.6567C12.015 10.7917 11.82 10.8742 11.625 10.8742Z"
                                    fill="#3FC3AC"
                                />
                                <path
                                    d="M6.375 13.5004C6.2775 13.5004 6.18 13.4779 6.09 13.4404C6 13.4029 5.9175 13.3504 5.8425 13.2829C5.7075 13.1404 5.625 12.9454 5.625 12.7504C5.625 12.6529 5.6475 12.5554 5.685 12.4654C5.7225 12.3679 5.775 12.2854 5.8425 12.2179C6.12 11.9404 6.63 11.9404 6.9075 12.2179C7.0425 12.3604 7.125 12.5554 7.125 12.7504C7.125 12.9454 7.0425 13.1404 6.9075 13.2829C6.765 13.4179 6.57 13.5004 6.375 13.5004Z"
                                    fill="#3FC3AC"
                                />
                                <path
                                    d="M9 13.5004C8.805 13.5004 8.61 13.4179 8.4675 13.2829C8.3325 13.1404 8.25 12.9454 8.25 12.7504C8.25 12.6529 8.2725 12.5554 8.31 12.4654C8.3475 12.3679 8.4 12.2854 8.4675 12.2179C8.745 11.9404 9.255 11.9404 9.5325 12.2179C9.6 12.2854 9.6525 12.3679 9.69 12.4654C9.7275 12.5554 9.75 12.6529 9.75 12.7504C9.75 12.9454 9.6675 13.1404 9.5325 13.2829C9.39 13.4179 9.195 13.5004 9 13.5004Z"
                                    fill="#3FC3AC"
                                />
                                <path
                                    d="M11.625 13.5007C11.43 13.5007 11.235 13.4182 11.0925 13.2832C11.025 13.2157 10.9725 13.1332 10.935 13.0357C10.8975 12.9457 10.875 12.8482 10.875 12.7507C10.875 12.6532 10.8975 12.5557 10.935 12.4657C10.9725 12.3682 11.025 12.2857 11.0925 12.2182C11.265 12.0457 11.5275 11.9632 11.7675 12.0157C11.82 12.0232 11.865 12.0382 11.91 12.0607C11.955 12.0757 12 12.0982 12.045 12.1282C12.0825 12.1507 12.12 12.1882 12.1575 12.2182C12.2925 12.3607 12.375 12.5557 12.375 12.7507C12.375 12.9457 12.2925 13.1407 12.1575 13.2832C12.015 13.4182 11.82 13.5007 11.625 13.5007Z"
                                    fill="#3FC3AC"
                                />
                                <path
                                    d="M15.375 7.38086H2.625C2.3175 7.38086 2.0625 7.12586 2.0625 6.81836C2.0625 6.51086 2.3175 6.25586 2.625 6.25586H15.375C15.6825 6.25586 15.9375 6.51086 15.9375 6.81836C15.9375 7.12586 15.6825 7.38086 15.375 7.38086Z"
                                    fill="#3FC3AC"
                                />
                                <path
                                    d="M12 17.0625H6C3.2625 17.0625 1.6875 15.4875 1.6875 12.75V6.375C1.6875 3.6375 3.2625 2.0625 6 2.0625H12C14.7375 2.0625 16.3125 3.6375 16.3125 6.375V12.75C16.3125 15.4875 14.7375 17.0625 12 17.0625ZM6 3.1875C3.855 3.1875 2.8125 4.23 2.8125 6.375V12.75C2.8125 14.895 3.855 15.9375 6 15.9375H12C14.145 15.9375 15.1875 14.895 15.1875 12.75V6.375C15.1875 4.23 14.145 3.1875 12 3.1875H6Z"
                                    fill="#3FC3AC"
                                />
                            </svg>
                        </Button>
                        <Button
                            onClick={showReasonDrawer}
                            className="flex justify-center px-1.5 items-center border border-[#3FC3AC] hover:!border-[#3FC3AC]"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                            >
                                <path
                                    d="M12.75 13.8223H9.75L6.41249 16.0423C5.91749 16.3723 5.25 16.0198 5.25 15.4198V13.8223C3 13.8223 1.5 12.3223 1.5 10.0723V5.57227C1.5 3.32227 3 1.82227 5.25 1.82227H12.75C15 1.82227 16.5 3.32227 16.5 5.57227V10.0723C16.5 12.3223 15 13.8223 12.75 13.8223Z"
                                    stroke="#3FC3AC"
                                    stroke-width="1.4"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    opacity="0.4"
                                    d="M9.00011 8.51953V8.36206C9.00011 7.85206 9.31513 7.58205 9.63013 7.36455C9.93763 7.15455 10.2451 6.88456 10.2451 6.38956C10.2451 5.69956 9.69011 5.14453 9.00011 5.14453C8.31011 5.14453 7.75513 5.69956 7.75513 6.38956"
                                    stroke="#3FC3AC"
                                    stroke-width="1.4"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    opacity="0.4"
                                    d="M8.99662 10.3125H9.00337"
                                    stroke="#3FC3AC"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </Button>
                        <Button className="flex justify-center px-1.5 items-center border border-[#3FC3AC] hover:!border-[#3FC3AC]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                            >
                                <path
                                    d="M12.75 10.05V12.3C12.75 15.3 11.55 16.5 8.55 16.5H5.7C2.7 16.5 1.5 15.3 1.5 12.3V9.45C1.5 6.45 2.7 5.25 5.7 5.25H7.95"
                                    stroke="#3FC3AC"
                                    stroke-width="1.4"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M12.75 10.05H10.35C8.54995 10.05 7.94995 9.45 7.94995 7.65V5.25L12.75 10.05Z"
                                    stroke="#3FC3AC"
                                    stroke-width="1.4"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    opacity="0.4"
                                    d="M5.25 3.75C5.25 2.505 6.255 1.5 7.5 1.5H12"
                                    stroke="#3FC3AC"
                                    stroke-width="1.4"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    opacity="0.4"
                                    d="M16.5001 6V10.6425C16.5001 11.805 15.5551 12.75 14.3926 12.75"
                                    stroke="#3FC3AC"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M16.5 6H14.25C12.5625 6 12 5.4375 12 3.75V1.5L16.5 6Z"
                                    stroke="#3FC3AC"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </Button>
                        <Popover
                            content={content}
                            trigger={'click'}
                            placement="bottomRight"
                            className="flex justify-center  w-6 h-6 rounded-full   px-1 items-center bg-[#E5E8EE] "
                        >
                            <Button>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="14"
                                    height="3"
                                    viewBox="0 0 14 3"
                                    fill="none"
                                >
                                    <circle
                                        cx="1.39994"
                                        cy="1.39994"
                                        r="1.39994"
                                        transform="matrix(1 1.74846e-07 1.74846e-07 -1 0.000244141 2.80078)"
                                        fill="#2D2E34"
                                    />
                                    <circle
                                        cx="1.39994"
                                        cy="1.39994"
                                        r="1.39994"
                                        transform="matrix(1 1.74846e-07 1.74846e-07 -1 5.59961 2.80078)"
                                        fill="#2D2E34"
                                    />
                                    <circle
                                        cx="1.39994"
                                        cy="1.39994"
                                        r="1.39994"
                                        transform="matrix(1 1.74846e-07 1.74846e-07 -1 11.1997 2.80078)"
                                        fill="#2D2E34"
                                    />
                                </svg>
                            </Button>
                        </Popover>
                    </div>
                </div>
                <div className="mt-5  flex gap-4">
                    <div className="w-1/3 rounded-xl p-4 pb-14 bg-white">
                        <div className="flex justify-between items-center">
                            <span className="flex gap-3 items-center">
                                <h4 className="font-bold">Notice Value</h4>
                                <p className="flex p-1.5 px-3 bg-[#FFC67D] text-xs rounded-md">
                                    $100
                                </p>
                            </span>

                            <a className="text-md underline text-blue-600">
                                Review
                            </a>
                        </div>
                        <div className="flex p-2 bg-gray-100 mt-5 rounded-md">
                            <div className="w-1/2">
                                <p className="text-[#A5A8AF]">
                                    Notice Land Value
                                </p>
                            </div>
                            <div className="w-1/2 ps-2 font-semibold">
                                <p>$0</p>
                            </div>
                        </div>
                        <div className="flex p-2 bg-gray-100 mt-5 rounded-md">
                            <div className="w-1/2">
                                <p className="text-[#A5A8AF]">
                                    Notice Improvement Value
                                </p>
                            </div>
                            <div className="w-1/2 ps-2 font-semibold">
                                <p>$6,804,707</p>
                            </div>
                        </div>
                        <div className="flex p-2 bg-gray-100 mt-5 rounded-md">
                            <div className="w-1/2">
                                <p className="text-[#A5A8AF]">
                                    Notice Total Value
                                </p>
                            </div>
                            <div className="w-1/2 ps-2 font-semibold">
                                <p>$6,804,707</p>
                            </div>
                        </div>
                        <div className="flex p-2 bg-gray-100 mt-5 rounded-md">
                            <div className="w-1/2">
                                <p className="text-[#A5A8AF]">
                                    Notice Appeal Deadline
                                </p>
                            </div>
                            <div className="w-1/2 ps-2 font-semibold">
                                <p>May 12,2023</p>
                            </div>
                        </div>
                        <div className="flex p-2 bg-gray-100 mt-5 rounded-md">
                            <div className="w-1/2">
                                <p className="text-[#A5A8AF]">Notice Other</p>
                            </div>
                            <div className="w-1/2 ps-2 font-semibold">
                                <p>-</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/3 flex">
                        <div
                            className={`${
                                !isEditTargetValue ? 'block' : 'hidden'
                            } p-4 w-full  rounded-xl pb-14 bg-white`}
                        >
                            <div className="flex justify-between items-center">
                                <span className="flex gap-3 items-center">
                                    <h4 className="font-bold">Target Value</h4>
                                    <p className="flex p-1.5 text-white px-3 bg-[#2A6192] text-xs rounded-md">
                                        $150
                                    </p>
                                </span>

                                <Button
                                    onClick={HandleIsEditTargetValue}
                                    className="border-none p-0 shadow-none"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="25"
                                        viewBox="0 0 24 25"
                                        fill="none"
                                    >
                                        <path
                                            opacity="0.4"
                                            d="M15.48 3.5H7.52C4.07 3.5 2 5.56 2 9.02V16.97C2 20.44 4.07 22.5 7.52 22.5H15.47C18.93 22.5 20.99 20.44 20.99 16.98V9.02C21 5.56 18.93 3.5 15.48 3.5Z"
                                            fill="#2C4E6C"
                                        />
                                        <path
                                            d="M21.02 3.48028C19.23 1.68028 17.48 1.64028 15.64 3.48028L14.51 4.60028C14.41 4.70028 14.38 4.84028 14.42 4.97028C15.12 7.42028 17.08 9.38028 19.53 10.0803C19.56 10.0903 19.61 10.0903 19.64 10.0903C19.74 10.0903 19.84 10.0503 19.91 9.98028L21.02 8.86028C21.93 7.95028 22.38 7.08028 22.38 6.19028C22.38 5.29028 21.93 4.40028 21.02 3.48028Z"
                                            fill="#2C4E6C"
                                        />
                                        <path
                                            d="M17.8601 10.9198C17.5901 10.7898 17.3301 10.6598 17.0901 10.5098C16.8901 10.3898 16.6901 10.2598 16.5001 10.1198C16.3401 10.0198 16.1601 9.86984 15.9801 9.71984C15.9601 9.70984 15.9001 9.65984 15.8201 9.57984C15.5101 9.32984 15.1801 8.98984 14.8701 8.61984C14.8501 8.59984 14.7901 8.53984 14.7401 8.44984C14.6401 8.33984 14.4901 8.14984 14.3601 7.93984C14.2501 7.79984 14.1201 7.59984 14.0001 7.38984C13.8501 7.13984 13.7201 6.88984 13.6001 6.62984C13.4701 6.34984 13.3701 6.08984 13.2801 5.83984L7.9001 11.2198C7.5501 11.5698 7.2101 12.2298 7.1401 12.7198L6.7101 15.6998C6.6201 16.3298 6.7901 16.9198 7.1801 17.3098C7.5101 17.6398 7.9601 17.8098 8.4601 17.8098C8.5701 17.8098 8.6801 17.7998 8.7901 17.7898L11.7601 17.3698C12.2501 17.2998 12.9101 16.9698 13.2601 16.6098L18.6401 11.2298C18.3901 11.1498 18.1401 11.0398 17.8601 10.9198Z"
                                            fill="#2C4E6C"
                                        />
                                    </svg>
                                </Button>
                            </div>
                            <div className="flex p-2 bg-gray-100 mt-5 rounded-md">
                                <div className="w-1/2">
                                    <p className="text-[#A5A8AF]">
                                        Target Land Value
                                    </p>
                                </div>
                                <div className="w-1/2 ps-2 font-semibold">
                                    <p>{targetValue.targetLandValue}</p>
                                </div>
                            </div>
                            <div className="flex p-2 bg-gray-100 mt-5 rounded-md">
                                <div className="w-1/2">
                                    <p className="text-[#A5A8AF]">
                                        Target Assessment Value
                                    </p>
                                </div>
                                <div className="w-1/2 ps-2 font-semibold">
                                    <p>{targetValue.targetAssesmentValue}</p>
                                </div>
                            </div>
                            <div className="flex p-2 bg-gray-100 mt-5 rounded-md">
                                <div className="w-1/2">
                                    <p className="text-[#A5A8AF]">
                                        Target Total Value
                                    </p>
                                </div>
                                <div className="w-1/2 ps-2 font-semibold">
                                    <p>{targetValue.targetTotalValue}</p>
                                </div>
                            </div>
                        </div>
                        <div
                            className={`${
                                isEditTargetValue ? 'block' : 'hidden'
                            } p-4 w-full rounded-xl pb-14 bg-white`}
                        >
                            <div className="flex justify-between items-center">
                                <span className="flex gap-3 items-center">
                                    <h4 className="font-bold">Target Value</h4>
                                    <p className="flex p-1.5 text-white px-3 bg-[#2A6192] text-xs rounded-md">
                                        $150
                                    </p>
                                </span>
                            </div>
                            <div className="flex flex-col p-2  mt-2 rounded-md">
                                <div className="">
                                    <p className="text-[#A5A8AF] text-xs font-bold mb-1">
                                        Target Land Value
                                    </p>
                                </div>
                                <div className=" font-semibold">
                                    <Input
                                        className="py-2"
                                        name="targetLandValue"
                                        value={targetValue.targetLandValue}
                                        placeholder="Basic usage"
                                        onChange={onHandleTargetValueChange}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col p-2 mt-2 rounded-md">
                                <div className="">
                                    <p className="text-[#A5A8AF] text-xs font-bold mb-1">
                                        Target Assessment Value
                                    </p>
                                </div>
                                <div className=" font-semibold">
                                    <Input
                                        className="py-2"
                                        name="targetAssesmentValue"
                                        value={targetValue.targetAssesmentValue}
                                        placeholder="Basic usage"
                                        onChange={onHandleTargetValueChange}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col p-2  mt-2 rounded-md">
                                <div className="">
                                    <p className="text-[#A5A8AF] text-xs font-bold mb-1">
                                        Target Total Value
                                    </p>
                                </div>
                                <div className=" font-semibold">
                                    <Input
                                        className="py-2  text-black"
                                        placeholder="Basic usage"
                                        name="targetTotalValue"
                                        value={targetValue.targetTotalValue}
                                        onChange={onHandleTargetValueChange}
                                    />
                                </div>
                                <div className="pt-5 flex gap-4">
                                    <button
                                        onClick={HandleIsEditTargetValue}
                                        className="w-1/2 rounded text-sm py-2 border bg-white border-[#3FC3AC] text-[#3FC3AC]"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        onClick={HandleIsEditTargetValue}
                                        className=" w-1/2 bg-[#3FC3AC] px-10 rounded text-sm py-2 text-white"
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-1/3 flex justify-between flex-col">
                        <div
                            className={` ${
                                !isEditFinalValue ? 'block' : 'hidden'
                            } p-4 rounded-xl w-full self-start pb-8 bg-white`}
                        >
                            <div className="flex justify-between items-center">
                                <span className="flex gap-3 items-center">
                                    <h4 className="font-bold">Final Value</h4>
                                    <p className="flex p-1.5 text-white px-3 bg-[#2A6192] text-xs rounded-md">
                                        $150
                                    </p>
                                </span>

                                <Button
                                    onClick={HandleIsEditFinalValue}
                                    className=""
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="25"
                                        viewBox="0 0 24 25"
                                        fill="none"
                                    >
                                        <path
                                            opacity="0.4"
                                            d="M15.48 3.5H7.52C4.07 3.5 2 5.56 2 9.02V16.97C2 20.44 4.07 22.5 7.52 22.5H15.47C18.93 22.5 20.99 20.44 20.99 16.98V9.02C21 5.56 18.93 3.5 15.48 3.5Z"
                                            fill="#2C4E6C"
                                        />
                                        <path
                                            d="M21.02 3.48028C19.23 1.68028 17.48 1.64028 15.64 3.48028L14.51 4.60028C14.41 4.70028 14.38 4.84028 14.42 4.97028C15.12 7.42028 17.08 9.38028 19.53 10.0803C19.56 10.0903 19.61 10.0903 19.64 10.0903C19.74 10.0903 19.84 10.0503 19.91 9.98028L21.02 8.86028C21.93 7.95028 22.38 7.08028 22.38 6.19028C22.38 5.29028 21.93 4.40028 21.02 3.48028Z"
                                            fill="#2C4E6C"
                                        />
                                        <path
                                            d="M17.8601 10.9198C17.5901 10.7898 17.3301 10.6598 17.0901 10.5098C16.8901 10.3898 16.6901 10.2598 16.5001 10.1198C16.3401 10.0198 16.1601 9.86984 15.9801 9.71984C15.9601 9.70984 15.9001 9.65984 15.8201 9.57984C15.5101 9.32984 15.1801 8.98984 14.8701 8.61984C14.8501 8.59984 14.7901 8.53984 14.7401 8.44984C14.6401 8.33984 14.4901 8.14984 14.3601 7.93984C14.2501 7.79984 14.1201 7.59984 14.0001 7.38984C13.8501 7.13984 13.7201 6.88984 13.6001 6.62984C13.4701 6.34984 13.3701 6.08984 13.2801 5.83984L7.9001 11.2198C7.5501 11.5698 7.2101 12.2298 7.1401 12.7198L6.7101 15.6998C6.6201 16.3298 6.7901 16.9198 7.1801 17.3098C7.5101 17.6398 7.9601 17.8098 8.4601 17.8098C8.5701 17.8098 8.6801 17.7998 8.7901 17.7898L11.7601 17.3698C12.2501 17.2998 12.9101 16.9698 13.2601 16.6098L18.6401 11.2298C18.3901 11.1498 18.1401 11.0398 17.8601 10.9198Z"
                                            fill="#2C4E6C"
                                        />
                                    </svg>
                                </Button>
                            </div>
                            <div className="flex p-2 bg-gray-100 mt-5 rounded-md">
                                <div className="w-1/2">
                                    <p className="text-[#A5A8AF]">
                                        Target Land Value
                                    </p>
                                </div>
                                <div className="w-1/2 ps-2 font-semibold">
                                    <p>{finalValue.finalLandValue}</p>
                                </div>
                            </div>
                            <div className="flex p-2 bg-gray-100 mt-5 rounded-md">
                                <div className="w-1/2">
                                    <p className="text-[#A5A8AF]">
                                        Target Assessment Value
                                    </p>
                                </div>
                                <div className="w-1/2 ps-2 font-semibold">
                                    <p>{finalValue.finalAssesmentValue}</p>
                                </div>
                            </div>
                            <div className="flex p-2 bg-gray-100 mt-5 rounded-md">
                                <div className="w-1/2">
                                    <p className="text-[#A5A8AF]">
                                        Target Total Value
                                    </p>
                                </div>
                                <div className="w-1/2 ps-2 font-semibold">
                                    <p>{finalValue.finalTotalValue}</p>
                                </div>
                            </div>
                        </div>
                        <div
                            className={`${
                                isEditFinalValue ? 'block' : 'hidden'
                            } p-4 w-full rounded-xl pb-14 bg-white`}
                        >
                            <div className="flex justify-between items-center">
                                <span className="flex gap-3 items-center">
                                    <h4 className="font-bold">Final Value</h4>
                                    <p className="flex p-1.5 text-white px-3 bg-[#2A6192] text-xs rounded-md">
                                        $150
                                    </p>
                                </span>
                            </div>
                            <div className="flex flex-col p-2  mt-2 rounded-md">
                                <div className="">
                                    <p className="text-[#A5A8AF] text-xs font-bold mb-1">
                                        Final Land Value
                                    </p>
                                </div>
                                <div className=" font-semibold">
                                    <Input
                                        className="py-2"
                                        name="finalLandValue"
                                        value={finalValue.finalLandValue}
                                        placeholder="Basic usage"
                                        onChange={onHandleFinalValueChange}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col p-2 mt-2 rounded-md">
                                <div className="">
                                    <p className="text-[#A5A8AF] text-xs font-bold mb-1">
                                        Final Assessment Value
                                    </p>
                                </div>
                                <div className=" font-semibold">
                                    <Input
                                        className="py-2"
                                        name="finalAssesmentValue"
                                        value={finalValue.finalAssesmentValue}
                                        placeholder="Basic usage"
                                        onChange={onHandleFinalValueChange}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col p-2  mt-2 rounded-md">
                                <div className="">
                                    <p className="text-[#A5A8AF] text-xs font-bold mb-1">
                                        Final Total Value
                                    </p>
                                </div>
                                <div className=" font-semibold">
                                    <Input
                                        className="py-2  text-black"
                                        placeholder="Basic usage"
                                        name="finalTotalValue"
                                        value={finalValue.finalTotalValue}
                                        onChange={onHandleFinalValueChange}
                                    />
                                </div>
                                <div className="pt-5 flex gap-4">
                                    <button
                                        onClick={HandleIsEditFinalValue}
                                        className="w-1/2 rounded text-sm py-2 border bg-white border-[#3FC3AC] text-[#3FC3AC]"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        onClick={HandleIsEditFinalValue}
                                        className=" w-1/2 bg-[#3FC3AC] px-10 rounded text-sm py-2 text-white"
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-6 py-10 pe-6 justify-end">
                            <button className="px-10 rounded text-sm py-2 border bg-white border-[#3FC3AC] text-[#3FC3AC]">
                                Cancel
                            </button>
                            <button className="bg-[#3FC3AC] px-10 rounded text-sm py-2 text-white">
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DatagainPage
