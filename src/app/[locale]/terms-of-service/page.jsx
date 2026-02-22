import React from 'react'
import { InnerHero } from '../../../components/sections/InnerHero';
function page() {
    return (
        <div>
            <InnerHero
                // title={t.termsOfService.title}
                // breadcrumbLabel={t.termsOfService.breadcrumbLabel}
                image="/assets/images/terms-of-service/hero.webp"
            />
        </div>
    )
}

export default page
