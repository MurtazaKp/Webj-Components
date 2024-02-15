import React from 'react'

const SettingsPage = () => {
    // Data object
    const data = {
        logo: {
            altText: 'Logo',
            desktopSrc:
                'https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/logo-alt.svg',
            mobileSrc:
                'https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/logo-symbol.svg',
        },
        menuItems: [
            { text: 'Dashboard', icon: 'dashboard', link: '#' },
            { text: 'Analytics', icon: 'analytics', link: '#' },
            { text: 'Products', icon: 'products', link: '#' },
            { text: 'Customers', icon: 'customers', link: '#' },
            { text: 'Support', icon: 'support', link: '#' },
        ],
        settingsSections: [
            { title: 'Profile', link: '#' },
            { title: 'Password', link: '#' },
            { title: 'Team', link: '#' },
            { title: 'Notification', link: '#' },
            { title: 'Integrations', link: '#' },
            { title: 'Licenses', link: '#' },
        ],
        teams: [
            {
                name: 'Rareblocks',
                members: 3,
                imageSrc:
                    'https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/settings/1/rareblocks-logo.png',
            },
            {
                name: 'Astrona',
                members: 12,
                imageSrc:
                    'https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/settings/1/astrona-logo.png',
            },
        ],
        teamMembers: [
            {
                name: 'Arlene McCoy',
                username: '@arlenemc',
                imageSrc:
                    'https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/settings/1/avatar-female.png',
                status: 'active',
            },
            {
                name: 'Darrell Steward',
                username: '@darrellsteward',
                imageSrc:
                    'https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/settings/1/avatar-female-2.png',
                status: 'inactive',
            },
            {
                name: 'Marvin McKinney',
                username: '@marvinmc',
                imageSrc:
                    'https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/settings/1/avatar-female-3.png',
                status: 'active',
            },
            {
                name: 'Floyd Miles',
                username: '@floydmiles',
                imageSrc:
                    'https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/settings/1/avatar-male.png',
                status: 'active',
            },
            {
                name: 'Albert Flores',
                username: '@albertfl',
                imageSrc:
                    'https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/settings/1/avatar-male-2.png',
                status: 'inactive',
            },
        ],
    }

    return <div>asdasd</div>
}

export default SettingsPage
