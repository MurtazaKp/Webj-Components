'use client'
import React, { useState } from 'react'
import AddField from './AddField/AddField'
import AppealLetterEditor from './AppealLetterEditor/AppealLetterEditor'
import AppealLetterEditorPreview from './AppealLetterEditorPreview/AppealLetterEditorPreview'
import AppealLetterHeader from './AppealLetterHeader/AppealLetterHeader'

function CreateAppealLetter() {
    const [value, setValue] =
        useState(`<p style="font-size: 14px; margin-bottom: 10px;">
30 January 2020<br>
  <br>
  Private and Confidential<br>
  <br>
  DeKalb County Board of Assessors<br>
  Maloof Annex<br>
  1300 Commerce Dr.<br>
  Decatur, GA 30030<br>
  <br>
  Re: Superior Court Appeal
</p>
<br>


<p style="font-size: 14px; margin-bottom: 10px;">
  The taxpayer wishes to appeal the decision of the DeKalb County Board of Equalization to DeKalb County Superior
  Court for parcel 15 144 07 001, located at 1130 Mooreland Ave. (heard at BOE 1/9/2020).
</p>
<br>

<p style="font-size: 14px; margin-bottom: 10px;">
  We have enclosed a copy of the Board’s decision. The grounds for our appeal are that the current valuation
  exceeds fair market value and is not assessed uniformly with other like and similar properties.
</p>
<br>

<p style="font-size: 14px; margin-bottom: 10px;">
  Please let us know of any other requirements to complete this request for certification of our appeal to the
  Clerk of Courts in accordance with O.C.G.A. §48-5-311(g).
</p>
<br>

<p style="font-size: 14px; margin-bottom: 10px;">
  Very truly yours,<br>
  <br>
  David Pichler<br>
  Director Property
</p>`)

    const onChange = () => {
        setValue(editorValue)
    }
    const handleDragStart = () => {
        // Set the data to be dragged (account number)
        event.dataTransfer.setData('text/plain', data)
    }

    return (
        <>
            <div className="container p-2">
                {/* Appeal Letter Header */}
                <div className="mb-8">
                    <AppealLetterHeader
                        letterStatus={true}
                        accountNumber={1111111}
                        appealDeadline={'12/12/24'}
                    />
                </div>

                {/* Editor Container */}
                <div className="editor-container grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Add Field */}
                    <div className="mb-8">
                        <AddField
                            handleDragStart={handleDragStart}
                            accountName="raja"
                            accountNumber={87676}
                            accountAddress="Pune"
                            taxYear="2024"
                            jurisdiction="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content"
                        />
                    </div>

                    {/* Appeal Letter Editor */}
                    <div className="mb-8">
                        <AppealLetterEditor
                            value={value}
                            onChange={onChange}
                            placeholder="Enter here"
                        />
                    </div>

                    {/* Appeal Letter Editor Preview */}
                    <div className="mb-8">
                        <AppealLetterEditorPreview value={value} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateAppealLetter
