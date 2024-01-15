import React from 'react'
import LogoCloudOne from './cloudLogoOne'
import LogoCloudTwo from './cloudLogoTwo'

export default {
    title: 'Cloud Logo',
}

const CloudLogoOneTemplate = (args) => <LogoCloudOne {...args} />

export const CloudLogoOneStory = CloudLogoOneTemplate.bind({})
CloudLogoOneStory.args = {
    title: 'Trusted by world class creators',
    companyLogos: [
        {
            src: 'https://cdn.rareblocks.xyz/collection/celebration/images/logos/2/logo-1.png',
            alt: '',
        },
        {
            src: 'https://cdn.rareblocks.xyz/collection/celebration/images/logos/2/logo-2.png',
            alt: 'logos',
        },
        {
            src: 'https://cdn.rareblocks.xyz/collection/celebration/images/logos/2/logo-3.png',
            alt: 'logos',
        },
        {
            src: 'https://cdn.rareblocks.xyz/collection/celebration/images/logos/2/logo-4.png',
            alt: 'logos',
        },
    ],
}

const CloudLogoTwoTemplate = (args) => <LogoCloudTwo {...args} />

export const CloudLogoTwoStory = CloudLogoTwoTemplate.bind({})
CloudLogoTwoStory.args = {
    title: ' Join over 200+ tech companies already using Landingfolio',
    logos: [
        {
            heading: 'Waverio',
            imgUrl: 'https://landingfoliocom.imgix.net/store/collection/saasui/images/cloud-logos/2/waverio.svg',
        },
        {
            heading: 'Logo Ipsum',
            imgUrl: 'https://landingfoliocom.imgix.net/store/collection/saasui/images/cloud-logos/2/logoipsum.svg',
        },
        {
            heading: 'Alterbone',
            imgUrl: 'https://landingfoliocom.imgix.net/store/collection/saasui/images/cloud-logos/2/alterbone.svg',
        },
        {
            heading: 'Carbonia',
            imgUrl: 'https://landingfoliocom.imgix.net/store/collection/saasui/images/cloud-logos/2/carbonia.svg',
        },
        {
            heading: 'Tinygone',
            imgUrl: 'https://landingfoliocom.imgix.net/store/collection/saasui/images/cloud-logos/2/tinygone.svg',
        },
        {
            heading: 'Preso',
            imgUrl: 'https://landingfoliocom.imgix.net/store/collection/saasui/images/cloud-logos/2/preso.svg',
        },
        {
            heading: 'Ridoria',
            imgUrl: 'https://landingfoliocom.imgix.net/store/collection/saasui/images/cloud-logos/2/ridoria.svg',
        },
        {
            heading: 'Incanto',
            imgUrl: 'https://landingfoliocom.imgix.net/store/collection/saasui/images/cloud-logos/2/incanto.svg',
        },
    ],
}
