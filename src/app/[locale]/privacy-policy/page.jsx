import React from 'react'
import { InnerHero } from '../../../components/sections/InnerHero';

export default async function PrivacyPolicyPage() {
    return (
        <div>
            <InnerHero
                // title={t.privacyPolicy.title}
                // breadcrumbLabel={t.privacyPolicy.breadcrumbLabel}
                image="/assets/images/privacy-policy/hero.webp"
            />
        </div>
    )
}
