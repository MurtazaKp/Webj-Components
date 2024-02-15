import React from 'react'
import classNames from 'classnames'

const Avatar = ({ image, type }) => {
    return (
        <div className="py-12 bg-white">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex flex-wrap items-start gap-5 mt-8">
                    <img
                        className={classNames('object-cover rounded-md', {
                            ' w-8 h-8 ': type === 'small',
                            ' w-10 h-10 ': type === 'medium',
                            ' w-12 h-12 ': type === 'large',
                            ' w-14 h-14 ': type === 'xl',
                        })}
                        src={image?.src}
                        alt={image?.alt}
                    />
                </div>
            </div>
        </div>
    )
}

export default Avatar
