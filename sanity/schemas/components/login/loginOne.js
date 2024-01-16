import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'loginOne',
    title: 'Signin Form Data',
    type: 'object',
    fields: [
        defineField({
            name: 'heading',
            title: 'Form Heading',
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
                    title: 'Testimonial Quote',
                    type: 'text',
                }),
                defineField({
                    name: 'author',
                    title: 'Author',
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'name',
                            title: 'Author Name',
                            type: 'string',
                        }),
                        defineField({
                            name: 'role',
                            title: 'Author Role',
                            type: 'string',
                        }),
                        defineField({
                            name: 'avatar',
                            title: 'Author Avatar',
                            type: 'url',
                        }),
                    ],
                }),
            ],
        }),
    ],
})
