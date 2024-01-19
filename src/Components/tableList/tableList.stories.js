import React from 'react'
import TableListOne from './tableListOne'

export default {
    title: 'TableList',
}

const TestimonialOneTemplate = (args) => <TableListOne {...args} />

export const TestimonialOneStory = TestimonialOneTemplate.bind({})
TestimonialOneStory.args = {
    title: 'All Transactions',
    headers: ['Invoice', 'Date', 'Amount', 'Status'],
    transactions: [
        {
            id: 1,
            plan: 'Standard Plan - Feb 2022',
            date: '07 February, 2022',
            amount: '$59.00',
            status: 'Complete',
            statusColor: 'green',
        },
        {
            id: 2,
            plan: 'Standard Plan - Jan 2022',
            date: '09 January, 2022',
            amount: '$59.00',
            status: 'Canceled',
            statusColor: 'red',
        },
        {
            id: 3,
            plan: 'Basic Plan - Dec 2021',
            date: '15 December, 2021',
            amount: '$29.00',
            status: 'Complete',
            statusColor: 'green',
        },
        {
            id: 4,
            plan: 'Basic Plan - Nov 2021',
            date: '14 November, 2021',
            amount: '$29.00',
            status: 'Pending',
            statusColor: 'yellow',
        },
        {
            id: 5,
            plan: 'Basic Plan - Oct 2021',
            date: '15 October, 2021',
            amount: '$29.00',
            status: 'Complete',
            statusColor: 'green',
        },
        // Add three more transactions as needed
        {
            id: 6,
            plan: 'Premium Plan - Sep 2021',
            date: '20 September, 2021',
            amount: '$79.00',
            status: 'Complete',
            statusColor: 'green',
        },
        {
            id: 7,
            plan: 'Premium Plan - Aug 2021',
            date: '18 August, 2021',
            amount: '$79.00',
            status: 'Canceled',
            statusColor: 'red',
        },
        {
            id: 8,
            plan: 'Standard Plan - Jul 2021',
            date: '25 July, 2021',
            amount: '$59.00',
            status: 'Pending',
            statusColor: 'yellow',
        },
    ],
}
