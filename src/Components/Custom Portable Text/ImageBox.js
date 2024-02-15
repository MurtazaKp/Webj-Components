
import { useState } from 'react'
import Lightbox from 'react-awesome-lightbox'
import 'react-awesome-lightbox/build/style.css'
import { urlForImage } from '../../../sanity/lib/image'

export default function ImageBox({
    image,
    alt = 'Cover image',
}) {
    const [isOpen, setIsOpen] = useState(false)
    const imageUrl = image && urlForImage(image)

    return (
        <div
            className={`w-full rounded-xl cursor-zoom-in   ${
                imageUrl ? '' : 'bg-gray-50'
            }`}
        >
            {imageUrl && (
                <img
                  
                    alt={alt}
                   
                    
                    src={imageUrl}
                    onClick={() => setIsOpen(true)}
                />
            )}
            {isOpen && (
                <Lightbox
                    image={imageUrl}
                    onClose={() => setIsOpen(false)}
                />
            )}
        </div>
    )
}
