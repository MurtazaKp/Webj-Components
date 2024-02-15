import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'loginOne',
    title: 'loginOne',
    type: 'object',
    fields: [
        defineField({
            name: 'heading',
            title: 'Heading',
            type: 'string',
        }),
        defineField({
            name: 'rememberMeLabel',
            title: 'Remember Me Label',
            type: 'string',
        }),
        defineField({
            name: 'forgotPasswordLink',
            title: 'Forgot Password Link',
            type: 'string',
        }),
        defineField({
            name: 'signInButtonText',
            title: 'Sign In Button Text',
            type: 'string',
        }),
        defineField({
            name: 'signUpLink',
            title: 'Sign Up Link',
            type: 'string',
        }),
        defineField({
            name: 'testimonial',
            title: 'Testimonial',
            type: 'object',
            fields: [
                defineField({
                    name: 'quote',
                    title: 'Quote',
                    type: 'text',
                }),
                defineField({
                    name: 'author',
                    title: 'Author',
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'name',
                            title: 'Name',
                            type: 'string',
                        }),
                        defineField({
                            name: 'role',
                            title: 'Role',
                            type: 'string',
                        }),
                        defineField({
                            name: 'avatar',
                            title: 'Image',
                            type: 'object',
                            fields: [
                                defineField({
                                    name: 'src',
                                    title: 'Source',
                                    type: 'image',
                                }),
                                defineField({
                                    name: 'alt',
                                    title: 'Alt Text',
                                    type: 'string',
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    ],
    initialValue: {
        heading: 'Welcome back to Rareblocks UI Kit',
        rememberMeLabel: 'Remember me',
        forgotPasswordLink: 'Forgot Password?',
        signInButtonText: 'Sign In',
        signUpLink: 'Don’t have an account? Sign up now',
        testimonial: {
            quote: 'You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.',
            author: {
                name: 'Leslie Alexander',
                role: 'React Developer',
            },
        },
    },
})
