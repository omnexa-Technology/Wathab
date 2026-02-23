import { InnerHero } from '../sections/InnerHero';

/**
 * ServiceHero — wraps the shared InnerHero for service detail pages.
 * Server component: no client-side hooks needed.
 */
export function ServiceHero({ title, breadcrumbLabel, image }) {
  return (
    <InnerHero
      title={title}
      breadcrumbLabel={breadcrumbLabel}
      image={image || '/assets/images/pages/Service/heroServic.webp'}
    />
  );
}
