import { Button, Upload, UploadProps, message } from 'antd'
import React, { useRef, useState } from 'react'

import 'react-quill/dist/quill.snow.css'
import SignatureUpload from '../SignatureUpload/SignatureUpload'
import dynamic from 'next/dynamic'

const ReactQuill = dynamic(import('react-quill'), { ssr: false })

const modules = {
    toolbar: [
        [{ header: [1, 2, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' },
        ],
        ['link', 'code'],
        ['clean'],
        ['link', 'image'],
    ],
}

const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'code',
    'image',
]

// const UplaodProps: UploadProps = {
//     name: 'file',
//     action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
//     headers: {
//         authorization: 'authorization-text',
//     },
//     onChange(info) {
//         if (info.file.status !== 'uploading') {
//             console.log(info.file, info.fileList)
//         }
//         if (info.file.status === 'done') {
//             message.success(`${info.file.name} file uploaded successfully`)
//         } else if (info.file.status === 'error') {
//             message.error(`${info.file.name} file upload failed.`)
//         }
//     },
// }
const AppealLetterEditor = ({ value, onChange, placeholder }) => {
    const quillRef = (useRef < ReactQuill) | (null > null)
    const fileInputRef = (useRef < HTMLInputElement) | (null > null)
    // const [uploaded, setUploaded] = useState(false);
    const [showModal, setShowodal] = useState(false)
    const [AvatarImagePath, setAvatarImagePath] = useState('')
    const [state, setState] = useState({
        image: AvatarImagePath,
        allowZoomOut: false,
        position: { x: 0.5, y: 0.5 },
        scale: 1.0,
        rotate: 0,
        borderRadius: 0,
        preview: undefined,
        width: 200,
        height: 200,
        disableCanvasRotation: false,
        isTransparent: false,
        backgroundColor: undefined,
        showGrid: false,
    })
    const insertImageIntoQuill = () => {
        if (quillRef.current) {
            // Get the current cursor position in the editor
            const cursorPosition = quillRef.current.getEditor().getLength()
            const customWidth = 200
            const customHeight = 150
            // Insert the image at the cursor position
            quillRef.current
                .getEditor()
                .insertEmbed(cursorPosition, 'image', imageUrl)
        }
    }
    const handleFileInputChange = () => {
        const file = e.target.files && e.target.files[0]

        if (file) {
            const reader = new FileReader()
            reader.onload = () => {
                const imageUrl = event.target.result

                // Call a function to insert the image into the ReactQuill editor
                insertImageIntoQuill(imageUrl)
            }
            reader.readAsDataURL(file)
        }
    }

    const handleModal = () => {
        setShowodal(!showModal)
    }
    const handleImage = () => {
        setAvatarImagePath(URL.createObjectURL(event.target.files[0]))
        // setSaveImage(event.target.files[0])

        setState({
            ...state,
            image: URL.createObjectURL(event.target.files[0]),
        })
        setShowodal(!showModal)
    }
    return (
        <>
            <ReactQuill
                theme="snow"
                ref={quillRef}
                value={value || 'null'}
                modules={modules}
                formats={formats}
                onChange={onChange}
                placeholder={placeholder}
                style={{ height: '58vh', width: '50vw' }}
            />
            <div className="mt-12">
                <button
                    data-modal-target="default-modal"
                    data-modal-toggle="default-modal"
                    className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 relative"
                    type="button"
                >
                    <input
                        type="file"
                        onChange={handleImage}
                        className="absolute opacity-0 w-full h-full top-0 left-0 cursor-pointer"
                    />
                    Upload Signature
                </button>

                <div
                    id="default-modal"
                    aria-hidden="true"
                    className={`${
                        showModal ? '' : 'hidden'
                    } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
                >
                    <div className="relative p-4 w-full max-w-2xl max-h-full">
                        <div className="relative bg-slate-100 rounded-lg shadow">
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
                                <button
                                    type="button"
                                    onClick={handleModal}
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    data-modal-hide="default-modal"
                                >
                                    <svg
                                        className="w-3 h-3"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 14"
                                    >
                                        <path
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                        />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <div className="p-4 md:p-5 space-y-4">
                                <SignatureUpload
                                    insertImageIntoQuill={insertImageIntoQuill}
                                    handleModal={handleModal}
                                    state={state}
                                    setState={setState}
                                    handleImage={handleImage}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* <button
            className="btn border-2"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            Upload Signature
          </button>

          <dialog id="my_modal_1" className="modal ">
            <div className="modal-box">
              <SignatureUpload insertImageIntoQuill={insertImageIntoQuill} />
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog> */}
            </div>
        </>
    )
}

export default AppealLetterEditor
