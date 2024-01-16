import React from 'react';

import LoginOne from './loginOne';



export default {
  title: 'Login',
};

const LoginOneTemplate = (args) => <LoginOne {...args} />;

export const LoginOneStory = LoginOneTemplate.bind({});
LoginOneStory.args = {
    heading: "Welcome back to Rareblocks UI Kit",
    rememberMeLabel: "Remember me",
    forgotPasswordLink: "Forgot Password?",
    signInButtonText: "Sign In",
    signUpLink: "Don’t have an account? Sign up now",
    testimonial: {
      quote: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.",
      author: {
        name: "Leslie Alexander",
        role: "React Developer",
        avatar: "https://cdn.rareblocks.xyz/collection/clarity/images/sign-up/4/avatar-female.png",
      },
    },
};