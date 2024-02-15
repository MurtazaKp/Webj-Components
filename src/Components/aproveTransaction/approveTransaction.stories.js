import React from 'react'

import ApproveTransactionOne from './aproveTransactionOne'

export default {
    title: 'Approve Transaction',
}

const approveTransactionOneTemplate = (args) => (
    <ApproveTransactionOne {...args} />
)

export const approveTransactionOneStory = approveTransactionOneTemplate.bind({})
approveTransactionOneStory.args = {
    title: 'Approve This Transaction?',
    description: 'Are you sure minting this token? You must be awesome.',
    product: {
        name: 'Easy Sweep',
        quantityText: '  Quantity',
        quantity: 1,
        image: {
            src: 'https://landingfoliocom.imgix.net/store/collection/niftyui/images/approve-transaction/2/product-thumbnail.png',
            alt: 'Product Thumbnail',
        },
    },
    submitButtonCta: {
        label: 'Submit',
    },
}
