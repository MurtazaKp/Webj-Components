import React from 'react'
import {
    FreeDeliveryIcon,
    QualityProductsIcon,
    SecuredPaymentsIcon,
    ShopForAnyoneIcon,
} from './icon'

const IncentiveOne = ({ incentives }) => {
    const IncentiveOneData = {
        incentives: [
            {
                title: 'Secured Payments',
                description: 'Make payment with ease',
                icon: 'secure',
            },
            {
                title: 'Shop for Anyone',
                description: 'You can shop for any category',
                icon: 'shop',
            },
            {
                title: 'Free Delivery',
                description: 'Get 100% free delivery',
                icon: 'delivery',
            },
            {
                title: 'Quality Products',
                description: 'Made with highest care',
                icon: 'quality',
            },
        ],
    }

    const IncentiveIcons = {
        secure: SecuredPaymentsIcon,
        shop: ShopForAnyoneIcon,
        delivery: FreeDeliveryIcon,
        quality: QualityProductsIcon,
    }

    const IncentiveLink = ({ icon, url }) => {
        const IconComponent = IncentiveIcons[icon]

        return <IconComponent />
    }

    return (
        <section className="py-12 bg-gray-50 sm:py-16">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="grid max-w-2xl grid-cols-1 mx-auto sm:grid-cols-2 xl:max-w-none xl:grid-cols-4 gap-x-8 gap-y-8 sm:gap-y-12">
                    {incentives?.map((feature, index) => (
                        <div key={index} className="flex items-center">
                            <IncentiveLink {...feature} />
                            <div className="ml-4">
                                <h3 className="text-base font-bold text-gray-900">
                                    {feature.title}
                                </h3>
                                <p className="mt-1 text-sm font-normal text-gray-600">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default IncentiveOne
