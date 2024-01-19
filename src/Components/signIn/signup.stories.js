import React from 'react'
import SignUpOne from './signUpOne'

export default {
    title: 'Signup',
}

const SignUpOneTemplate = (args) => <SignUpOne {...args} />

export const SignUpOneStory = SignUpOneTemplate.bind({})
SignUpOneStory.args = {
    logo: {
        src: 'https://cdn.rareblocks.xyz/collection/clarity/images/logo.svg',
        alt: 'logo',
    },
    sectionTitle: 'Get started your 14 days free trial now',
    sectionDescription: 'Already have an account?',
    formFields: [
        {
            type: 'text',
            label: 'Email',
            placeholder: 'Username',
        },
        {
            type: 'password',
            label: 'Password',
            placeholder: 'Password (min. 8 characters)',
        },
    ],
    agreeTermsLabel: 'I agree with Terms & Conditions',
    joinButtonLabel: 'Join Rareblocks',
    loginLink: {
        label: 'Login Now',
        href: '/login',
    },
    loginLinkLabel: 'Already have an account? Login now',
    testimonial: {
        quote: '“You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.”',
        authorName: 'Leslie Alexander',
        authorRole: 'React Developer',
        authorAvatar: {
            src: 'https://cdn.rareblocks.xyz/collection/clarity/images/sign-up/4/avatar-female.png',
            alt: 'Leslie Alexander Avatar',
        },
    },
}
