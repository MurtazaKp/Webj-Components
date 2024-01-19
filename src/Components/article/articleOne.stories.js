import React from 'react'
import ArticleOne from './articleOne'

export default {
    title: 'Article',
}

const ArticleOneTemplate = (args) => <ArticleOne {...args} />

export const ArticleOneStory = ArticleOneTemplate.bind({})
ArticleOneStory.args = {
    subheading: 'blog',
    date: ' April 14, 2021',
    heading: 'Discover the most solutions for building landing page website.',
    content: `
      <p class="text-base font-normal leading-7 text-gray-700 font-pj">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa risus sed eget ornare posuere turpis vitae. Id elementum velit posuere vestibulum lectus id eu sollicitudin. Tellus amet bibendum sit mus phasellus quis duis lacus. Enim eget sagittis, auctor iaculis nulla semper. In
            vitae neque integer integer metus, est, tristique fermentum tristique.
        </p>

        <h2 class="mt-12 text-3xl font-bold text-gray-900 font-pj">Get everything from scratch</h2>
        <p class="mt-6 text-base font-normal leading-7 text-gray-700 font-pj">
            Massa risus sed eget ornare posuere turpis vitae. Id elementum velit posuere vestibulum lectus id eu sollicitudin. Tellus amet bibendum sit mus phasellus quis duis lacus. Enim eget sagittis, auctor iaculis nulla semper. In vitae neque integer integer metus, est, tristique
            fermentum tristique.
        </p>
        <ul class="pl-5 mt-6 space-y-1 text-base font-normal leading-7 text-gray-700 list-disc list-outside font-pj">
            <li>Id elementum velit posuere vestibulum lectus id eu sollicitudin.</li>
            <li>Tellus amet bibendum sit mus phasellus quis duis lacus.</li>
            <li>Enim eget sagittis, auctor iaculis nulla semper.</li>
        </ul>

        <h2 class="mt-12 text-3xl font-bold text-gray-900 font-pj">Choose from 120+ UI blocks</h2>
        <p class="mt-6 text-base font-normal leading-7 text-gray-700 font-pj">
            Massa risus sed eget ornare posuere turpis vitae. Id elementum velit posuere vestibulum lectus id eu sollicitudin. Tellus amet bibendum sit mus phasellus quis duis lacus. Enim eget sagittis, auctor iaculis nulla semper. In vitae neque integer integer metus, est, tristique
            fermentum tristique.
        </p>
        <blockquote class="pl-5 mt-8 border-l-2 border-gray-900">
            <p class="text-lg italic font-medium text-gray-900 font-pj">“Tellus amet bibendum sit mus phasellus quis duis lacus. Enim eget sagittis, auctor iaculis nulla semper. In vitae neque integer integer metus, est, tristique fermentum tristique.”</p>
        </blockquote>

        <div class="relative mt-16">
            <div class="absolute -inset-2">
                <div class="w-full h-full mx-auto opacity-30 blur-lg filter" style="background: linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)"></div>
            </div>

            <img class="relative rounded-xl" src="https://cdn.rareblocks.xyz/collection/clarity/images/long-form/1/img-blog.png" alt="" />
        </div>

        <h2 class="mt-16 text-3xl font-bold text-gray-900 font-pj">Create your first landing page</h2>
        <p class="mt-6 text-base font-normal leading-7 text-gray-700 font-pj">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus enim id habitasse nunc at turpis vestibulum pretium ridiculus. Tempus, amet mattis purus molestie urna. Tellus amet nisl, vel eget tincidunt. Viverra libero, etiam rhoncus amet, vulputate et sodales.
        </p>
        <p class="mt-6 text-base font-normal leading-7 text-gray-700 font-pj">Cras hendrerit porta donec tincidunt sed elit dictum tellus. Quam aenean elit pretium risus. Ullamcorper proin interdum dui amet eleifend. Justo, morbi elit amet sollicitudin eget felis amet leo.</p>
        <p class="mt-6 text-base font-normal leading-7 text-gray-700 font-pj">Ac pretium tellus id ut. Netus sed consequat aliquet sed sed. Platea ac nunc ut curabitur et. In tristique montes, aenean nibh tempus viverra.</p>
    `,
}
