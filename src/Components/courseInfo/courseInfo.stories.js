import React from 'react'

import CourseInfoOne from './courseOne'

export default {
    title: 'Course Info',
}

const DashboardStepsOneTemplate = (args) => <CourseInfoOne {...args} />

export const DashboardStepsOneStory = DashboardStepsOneTemplate.bind({})
DashboardStepsOneStory.args = {
    mainTitle: 'Is this course right for me?',
    mainParagraph:
        'Amet facilisis egestas egestas nunc. Proin ut eget quam ornare tincidunt ornare in sit. Sociis facilisis leo faucibus donec est neque. Neque in volutpat, at volutpat nulla enim risus nisl. Enim sed eget amet gravida scelerisque egestas vitae.',
    communities: [
        {
            title: 'Slack Community 1',
            description:
                'Non pretium mi, sagittis placerat. Elit risus malesuada ornare orci in. Tellus, tempor eget vitae aliquet suspendisse sed purus velit elit.',
        },
        {
            title: 'Slack Community 2',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis, sapien non volutpat molestie, eros quam elementum tortor.',
        },
        {
            title: 'Slack Community 3',
            description:
                'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
            title: 'Slack Community 4',
            description:
                'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
            title: 'Slack Community 5',
            description:
                'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
            title: 'Slack Community 6',
            description:
                'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
    ],
}
