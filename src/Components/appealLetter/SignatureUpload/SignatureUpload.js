import React, { ChangeEvent, MouseEventHandler, useRef, useState } from 'react'
import AvatarEditor, { Position } from 'react-avatar-editor'
import Dropzone from 'react-dropzone'
import Preview from './ImagePreview'

const SignatureUpload = ({
    insertImageIntoQuill,
    handleModal,
    state,
    setState,
    handleImage,
}) => {
    const editor = useRef < AvatarEditor > null
    // const [AvatarImagePath,setAvatarImagePath] = useState("");
    // const [state, setState] = useState<State>({
    //   image: AvatarImagePath,
    //   allowZoomOut: false,
    //   position: { x: 0.5, y: 0.5 },
    //   scale: 1.0,
    //   rotate: 0,
    //   borderRadius: 0,
    //   preview: undefined,
    //   width: 200,
    //   height: 200,
    //   disableCanvasRotation: false,
    //   isTransparent: false,
    //   backgroundColor: undefined,
    //   showGrid: false,
    // })

    const handleNewImage = () => {
        if (e.target.files?.[0]) {
            setState({ ...state, image: e.target.files[0] })
        }
    }

    const handleSave = () => {
        // const img = editor.current.props.image;
        const img = editor.current?.getImageScaledToCanvas()?.toDataURL()

        const rect = editor.current?.getCroppingRect()

        if (!img || !rect) return

        setState({
            ...state,
            preview: {
                img,
                rect,
                scale: state.scale,
                width: state.width,
                height: state.height,
                borderRadius: state.borderRadius,
            },
        })
    }

    const logCallback = () => {
        console.log('callback', e)
    }

    const handlePositionChange = (position) => {
        setState({ ...state, position })
    }

    const setBackgroundColor = () => {
        setState({ ...state, backgroundColor: e.target.value })
    }

    // const handleImage = (event:any) =>{

    //   setAvatarImagePath(URL.createObjectURL(event.target.files[0]))
    //   setState({ ...state, image: URL.createObjectURL(event.target.files[0]) })

    // }
    const handleSaveImage = () => {
        insertImageIntoQuill(state?.preview?.img)
        handleModal(null)
    }
    const zoomIn = () => {
        state.scale > 1 && setState({ ...state, scale: state.scale - 1.0 })
    }
    const zoomOut = () => {
        setState({ ...state, scale: state.scale + 1.0 })
    }
    return (
        <div>
            <Dropzone
                onDrop={([image]) => setState({ ...state, image })}
                noClick
                multiple={false}
            >
                {({ getRootProps, getInputProps }) => (
                    <div {...getRootProps()} className="preview">
                        <AvatarEditor
                            ref={editor}
                            scale={state.scale}
                            width={state.width}
                            height={50}
                            position={state.position}
                            showGrid={state.showGrid}
                            onPositionChange={handlePositionChange}
                            rotate={state.rotate}
                            border={10}
                            borderRadius={
                                state.width / (100 / state.borderRadius)
                            }
                            backgroundColor={state.backgroundColor}
                            onLoadFailure={logCallback.bind(
                                this,
                                'onLoadFailed'
                            )}
                            onLoadSuccess={logCallback.bind(
                                this,
                                'onLoadSuccess'
                            )}
                            onImageReady={logCallback.bind(
                                this,
                                'onImageReady'
                            )}
                            image={state.image}
                            disableCanvasRotation={state.disableCanvasRotation}
                        />
                        {/* <input type='file' onChange={handleImage}/> */}
                    </div>
                )}
            </Dropzone>
            <br />
            Zoom:{' '}
            <button className="border-2 p-3" onClick={zoomIn}>
                -
            </button>
            <button className="border-2 p-3" onClick={zoomOut}>
                +
            </button>
            <br />
            {state.isTransparent && (
                <div style={{ marginLeft: '1rem' }}>
                    Background color:
                    <input
                        name="backgroundColor"
                        type="color"
                        defaultValue={state.backgroundColor}
                        onChange={setBackgroundColor}
                    />
                    <br />
                </div>
            )}
            <br />
            <input
                type="button"
                onClick={handleSave}
                value="Preview"
                className="border-2"
            />
            <br />
            {state.preview && (
                <>
                    <img
                        alt=""
                        src={state.preview.img}
                        style={{
                            borderRadius: `${
                                (Math.min(
                                    state.preview.height,
                                    state.preview.width
                                ) +
                                    10) *
                                (state.preview.borderRadius / 2 / 100)
                            }px`,
                        }}
                    />
                    {/* <Preview
            width={
              state.preview.scale < 1
                ? state.preview.width
                : (state.preview.height * 478) / 270
            }
            height={state.preview.height}
            image={AvatarImagePath}
            rect={state.preview.rect}
          /> */}
                </>
            )}
            <form method="dialog">
                <button
                    className="border-2"
                    disabled={state.preview ? false : true}
                    onClick={handleSaveImage}
                >
                    Save
                </button>
            </form>
        </div>
    )
}

export default SignatureUpload
