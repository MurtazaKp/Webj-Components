import React from 'react'
import TransactionProgressOne from './transactionProgressOne'

export default {
    title: 'Transaction Progress',
}

const TransactionProgressOneTemplate = (args) => (
    <TransactionProgressOne {...args} />
)

export const TransactionProgressOneStory = TransactionProgressOneTemplate.bind(
    {}
)
TransactionProgressOneStory.args = {
    buttonText: { label: 'View Status', href: '#' },
    title: 'Transaction in Progress',
    description:
        'This can take a few minutes depending on gas. Don’t leave this page. You can do whatever you want.',
}
