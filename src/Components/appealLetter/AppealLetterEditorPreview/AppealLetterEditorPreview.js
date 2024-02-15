import React from 'react'

const AppealLetterEditorPreview = (value) => {
    return (
        <div className="preview-container">
            <span>Preview:</span>
            <div
                className="border border-gray-300 rounded p-4 min-h-200 overflow-x-auto bg-white"
                style={{ width: '350px', height: '465px' }}
                dangerouslySetInnerHTML={{ __html: value }}
            />
        </div>
    )
}

export default AppealLetterEditorPreview
