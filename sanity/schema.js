import components from './schemas/components'
import aboutOne from './schemas/components/about/aboutOne'
import blogListingOne from './schemas/components/blogListing/blogListingOne'
import blogOne from './schemas/components/blogs/blogOne'
import cloudLogoOne from './schemas/components/cloudLogo/cloudLogoOne'
import contactOne from './schemas/components/contact/contactOne'
import faqs from './schemas/components/faq/faqs'
import featureOne from './schemas/components/features/featureOne'
import footerOne from './schemas/components/footer/footerOne'
import headerOne from './schemas/components/headers/headerOne'
import heroOne from './schemas/components/heroSection/heroOne,'
import newsletterOne from './schemas/components/newsletter/newsletterOne'
import pricingOne from './schemas/components/pricing/pricingOne'
import statsOne from './schemas/components/stats/statsOne'
import teamOne from './schemas/components/team/teamOne'
import testimonialOne from './schemas/components/testimonials/testimonialOne'

export const schema = {
    types: [
        components,
        headerOne,
        footerOne,
        heroOne,
        featureOne,
        cloudLogoOne,
        newsletterOne,
        blogOne,
        testimonialOne,
        contactOne,
        aboutOne,
        teamOne,
        blogListingOne,
        statsOne,
        pricingOne,
        faqs,
    ],
}
